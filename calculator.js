class Calculator {
    add(a,b){
        return a + b;
    }

    subtract(a,b){
        return a-b;
    }
    multiply(a,b){
        return a * b;
    }
    divide(a,b){
        return a / b;
    }
}

const calc = new Calculator();

module.exports = calc;