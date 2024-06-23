// calc.add(10).multiply(5).subtract(10);

const calc = {
    total: 0,
    add: function (value) {
        this.total += value;
        return this;
    },
    subtract: function (value) {
        this.total -= value;
        return this;
    },
    multiply: function (value) {
        this.total *= value;
        return this;
    },
    getResults: function () {
        return this.total;
    }
}

console.log('1', calc.add(10).multiply(5).subtract(10).getResults());

// -------------------------------------------------------------------------//

function Calculator() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    this.value += number;
    return this;
}

Calculator.prototype.add = function (number) {
    this.value += number;
    return this;
}

Calculator.prototype.multiply = function (number) {
    this.value *= number;
    return this;
}

Calculator.prototype.subtract = function (number) {
    this.value -= number;
    return this;
}

Calculator.prototype.getResult = function () {
    return this.value;
}

const calci = new Calculator();
console.log('2', calci.add(10).multiply(5).subtract(10).getResult()); //40

// -------------------------------------------------------------------------//

class CalculatorClass {
    constructor() {
      this.value = 0;
    }
    add(number) {
      this.value += number;
      return this;
    }
    multiply(number) {
      this.value *= number;
      return this;
    }
    subtract(number) {
      this.value -= number;
      return this;
    }
    getResult() {
      return this.value;
    }
  }
  
  const calco = new CalculatorClass();
  console.log('3', calco.add(10).multiply(5).subtract(10).getResult()); // 40