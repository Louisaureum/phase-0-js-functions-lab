// tax calculation function
function calculateTax(amount) {
    return amount * 0.15;
}
// convert uppercase to lower case function
function convertToUpperCase(text) {
    return text.toUpperCase();
}
// find maximum number function
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {        
        return num2;
    }
}
// paliandrome function
function isPalindrome (word){
    const reverse = word.split('').reverse().join('');
    return word === reverse;
}
// calculate discounted price function
function calculateDiscountedPrice(originalprice, discountpercentage) {
    const discount = originalprice * (discountpercentage / 100);
    return originalprice - discount;
}
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };