/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} the product of `num1` and `num2`
 * @returns `NaN` if either argument is not a number
 */
export function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 * num2;
}

/**
 * @param {number} age
 * @returns {string} "Age not valid." if `age` is not a number
 * @returns {string} "You must be 18 or older to vote." if `age` is less than 18
 * @returns {string} "Who would you like to vote for?" if `age` is 18 or older
 */
export function vote(age) {
  if (age >= 18){
    return ("Who would you like to vote for?")
  } else if (age < 18){
    return ("You must be 18 or older to vote")
  } else {
    return ("Age not valid")
  }
}
/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string} the concatenation of `str1` and `str2`
 * @returns `undefined` if either argument is not a string
 */
export function concatenateStrings(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") { //if one of them is not a string it is undefined
    //typeof to check type (number, string, ect)
    return (undefined)
  }
  return (str1 + str2)
}
