/**
 * Project Euler #4
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two two-digit numbers is 9009 = 91 x 99.
 * 
 * Find the largest palindrome made from the product of two three-digit numbers.
 */

export const isPalindromic = (n: number): boolean => {
    if (n < 10 && n > -1) return true;
    const stringifiedArray = Array.from(`${n}`);
    const midPoint = Math.floor(stringifiedArray.length / 2);
    let start = 0;
    let end = stringifiedArray.length - 1;
    let result = true;
    while (result && start <= midPoint) {
        result = stringifiedArray[start] === stringifiedArray[end];
        if (result) {
            start++;
            end--;
        }
    }
    return result;
}

const maxFactorFromDigits = (numDigits: number) => 
    Array.from({ length: numDigits })
        .map(() => 9)
        .reduceRight((prev, curr, currIndex) => 
            (Math.pow(10, currIndex) * curr) + prev, 0);

export const findLargestPalindrome = (numDigitsFactor: number): number => {
    const factor1 = maxFactorFromDigits(numDigitsFactor);
    const lowerBound = maxFactorFromDigits(numDigitsFactor - 1)
    let max = 0;
    for (let i = factor1; i > lowerBound; i--) {
        for (let j = factor1; j > lowerBound; j--) {
            const candidate = j * i;
            if (isPalindromic(candidate) && candidate > max) { max = candidate; }
        }
    }
    return max;
}

const numOfDigitsCommand = process.argv[2];
const numOfDigits = parseInt(numOfDigitsCommand, 10);
console.log(findLargestPalindrome(numOfDigits));