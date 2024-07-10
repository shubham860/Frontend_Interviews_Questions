function customPromise(executor) {
    let onResolve, onReject, isCalled = false, 
        isFulfilled = false, isRejected = false, output, err;
  
    this.then = function(resolveCallback) {
      onResolve = resolveCallback;
      
      if(!isCalled && isFulfilled) {
        isCalled = true;
        onResolve(output);
      }
      return this;
    }
    
    this.catch = function(rejectCallback) {
      onReject = rejectCallback;
      
      if(!isCalled && isRejected) {
        isCalled = true;
        onReject(err);
      }
      return this;
    }
  
    function resolver(data) {
      isFulfilled = true;
      output = data;
      
      if(typeof onResolve=== 'function' && !isCalled){
        isCalled = true;
        onResolve(data);
      }
    }
    
    function rejecter(error) {
      isRejected = true;
      err = error;
      
      if(typeof onReject === 'function' && !isCalled){
        isCalled = true;
        onReject(error);
      }
    }
    
    executor(resolver, rejecter);
  }

  let p1 = new customPromise(
    (resolve, reject) => setTimeout(() => resolve('Resolved successfully', 1000))
  );
  p1.then((data) => console.log(data));
  // Output - Resolved successfully
  
  let p2 = new customPromise((resolve, reject) => reject('reject right away'));
  p2.catch((error) => console.log(error));

  // Output - Resolved right away