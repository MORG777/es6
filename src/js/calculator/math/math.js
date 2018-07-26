/**
 * Plus
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function plus( firstActor, secondActor ) {
    return firstActor + secondActor;
}

/**
 * Minus
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function minus( firstActor, secondActor ) {
    return firstActor - secondActor;
}

/**
 * Delimiter
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function delimiter( firstActor, secondActor ) {
    return firstActor / secondActor;
}

/**
 * Multiply
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function multiply( firstActor, secondActor ) {
    return firstActor * secondActor;
}
/**
 * Sqrt
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function sqrt (firstActor, secondActor) {
    secondActor = secondActor ? secondActor : 2 ;
    return Math.pow(firstActor, 1/secondActor);
}
/**
 * ln
 * @param {Number} firstActor 
 */
function ln (firstActor) {
    return Math.log(firstActor);
}
/**
 * Factorial
 * @param {Number} firstActor 
 */
function factorial (firstActor) {
    let res = 1;
    for(let i = 1; i <= firstActor; i++) {
        res = res * i;
    }
    return res;
}
/**
 * Pow
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function pow (firstActor, secondActor = 2){
    return Math.pow(firstActor, secondActor);
}
/**
 * UnaryMinus
 * @param {Number} firstActor 
 */
function unaryMinus (firstActor) {
        
    return firstActor * -1; 
}
export {plus, minus, delimiter, multiply, sqrt, ln, factorial, pow, unaryMinus};