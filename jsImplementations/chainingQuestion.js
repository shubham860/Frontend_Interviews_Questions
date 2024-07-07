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

Calculator.prototype.add = function (number) {
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


// -------------------------------------------------------------------------// 

function math() {
    return {
        count: 0,
        add(number) {
            this.count += number;
            return this;
        },
        sub(number) {
            this.count -= number;
            return this;
        },
        mul(number) {
            this.count *= number;
            return this;
        },
        value() {
            return this.count;
        }
    }
}

console.log('4', math().add(3).sub(2).mul(5).sub(3).value());


// -------------------------------------------------------------------------// 

function computeAmount() {
    return {
        total: 0,
        Lacs(count) {
            this.total += count * 100000;
            return this;
        },
        crores(count) {
            this.total += count * 10000000;
            return this;
        },
        thousand(count) {
            this.total += count * 1000;
            return this;
        },
        value() {
            return this.total;
        }
    }
}


console.log('5', computeAmount().Lacs(2).crores(1).thousand(5).Lacs(3).value())

// -------------------------------------------------------------------------// 

function num() {
    let value = null;
    let minVal = null;
    let maxVal = null;

    return {
        min: function (min) {
            minVal = min;
            return this;
        },
        max: function (max) {
            maxVal = max;
            return this;
        },
        validate: function (input) {
            if (isNaN(input)) {
                throw new Error("Input is not a number");
            }

            value = parseFloat(input);

            if (minVal !== null && value < 2) {
                throw new Error(`Value should be greater than or equal to 2`);
            }

            if (maxVal !== null && value > 10) {
                throw new Error(`Value should be less than or equal to 10`);
            }

            return value;
        }
    };
}

let x = num().min(2).max(10)
x.validate(1) // should throw error should be less than 2
x.validate(11) // should throw error should not be greater than 10
console.log(x.validate(5)) // should return 5
console.log(x.validate('5')) // should return 5