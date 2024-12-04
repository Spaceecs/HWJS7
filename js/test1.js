function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    return base * power(base, exponent - 1);
}
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function findMaxDigit(num) {
    num = Math.abs(num).toString();
    if (num.length === 1) {
        return parseInt(num);
    }
    let firstDigit = parseInt(num[0]);
    let maxOfRest = findMaxDigit(num.slice(1));
    return firstDigit > maxOfRest ? firstDigit : maxOfRest;
}
function isPrime(num, divisor = 2) {
    if (num < 2) {
        return false;
    }
    if (divisor > Math.sqrt(num)) {
        return true;
    }
    if (num % divisor === 0) {
        return false;
    }
    return isPrime(num, divisor + 1);
}
function getFactors(num) {
    let factors = [];
    function findFactors(divisor) {
        if (divisor > num) {
            return;
        }
        if (num % divisor === 0) {
            factors.push(divisor);
        }
        findFactors(divisor + 1);
    }
    findFactors(2);
    alert(factors.join(' * '));
}
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let result = power(2,5)
alert(result)
result = gcd(15,12)
alert(result)
result = findMaxDigit(36473)
alert(result)
result = isPrime(11)
alert(result)
getFactors(18)
result=fibonacci(5)
alert(result)