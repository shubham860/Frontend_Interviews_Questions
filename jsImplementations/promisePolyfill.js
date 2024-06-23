function MyPromise(executor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onResolveCallbacks = [];
    self.onRejectCallbacks = [];


    function resolve(value) {
        if(self.status === 'pending') {
            self.status = 'fulfilled';
            self.value = value;
            self.onResolveCallbacks.forEach(callback => callback(value));
        }
    }

    function reject(reason) {
        if(self.status === 'pending') {
            self.status = 'rejected'
            self.reason = reason;
            self.onRejectCallbacks.forEach(callback => callback(reason))
        }
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

MyPromise.prototype.then = function(onResolve, onReject) {
    let self = this;
    return new MyPromise(function(resolve, reject) {
        if(self.status === 'fulfilled') {
            onResolve(self.value);
            resolve(self.value);
        } else if(self.status === 'rejected') {
            onReject(self.reason);
            reject(reason);
        } else {
            // adding callback into the onResolveCallbacks which
            // executes when promise resolve and reject.
            self.onResolveCallbacks.push(value => { 
                onResolve(value); 
                resolve(value);
            })
            self.onRejectCallbacks.push(reason => {
                onReject(reason);
                reject(reason);
            });
        }
    })
}

MyPromise.prototype.catch = function(onReject) {
    let self = this;
    return new MyPromise(function(reject) {
        if (self.status === "rejected") {
            onReject(self.reason);
            reject(self.reason);
          } else {
            self.onRejectCallbacks.push(reason => {
                onReject(reason);
                reject(reason);
            });
          }
    })
  }

const testPromise = new MyPromise((resolve, reject) => {
    reject('hello')
})

testPromise.then(res => console.log(res));
testPromise.catch(err => console.log('err', err))