import { isPalindromic } from "../src/index";

describe("Project Euler 4 Tests", () => {
    it("should return true if number is palindromic", () => {
        expect(isPalindromic(1)).toBeTruthy();
        expect(isPalindromic(121)).toBeTruthy();
        expect(isPalindromic(1221)).toBeTruthy();
        expect(isPalindromic(9009)).toBeTruthy();
        expect(isPalindromic(114411)).toBeTruthy();
    });

    it("should return false if number is not palindromic", () => {
        expect(isPalindromic(13)).toBeFalsy();
        expect(isPalindromic(521)).toBeFalsy();
        expect(isPalindromic(1251)).toBeFalsy();
        expect(isPalindromic(9109)).toBeFalsy();
        expect(isPalindromic(174411)).toBeFalsy();
    })
})