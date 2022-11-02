import { maxArr, average, copyToOtherArray, reverseElementsArray, multiplyMatrix, isPrime, sqrt, fibonacci, fibonacciRec, hypotenuse, Harmonic, Harmonic1 } from "./book";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let maximum = maxArr(array);
console.log(maximum)

let avg = average(array)
console.log(avg)

let copy = copyToOtherArray(array);
console.log(copy)

const reverted = reverseElementsArray(array);
console.log("reversed: ", reverted)

// matrix multiplication:
//this function only accepts 2x2 matrices:
const A = [[1, 2], [3, 4]]
const B = [[2, 3], [4, 5]]

const C = multiplyMatrix(A, B);
console.log("matrix multiplication: ", C)

//isPrime?
const isPrime17 = isPrime(17)
console.log("isPrime 17: ", isPrime17)

const squareRoot = sqrt(25);
console.log(squareRoot)

//fibonacci:
console.log(fibonacci(1))
console.log(fibonacci(3))
console.log(fibonacci(5))


//con recursividad_
console.log("recursión: ", fibonacciRec(1))
console.log("recursión: ", fibonacciRec(5))
console.log("recursión: ", fibonacciRec(10))

console.time('fibo sin recursion')
console.log(fibonacci(10))
console.timeEnd('fibo sin recursion')

console.time('fibo con recursion')
console.log(fibonacciRec(10))
console.timeEnd('fibo con recursion')

console.log(fibonacciRec(1))

//hypotenuse
console.log("hypo: ", hypotenuse(2, 2))

//Harmonic
console.log("Harmonic: ", Harmonic(5))
console.log("Harmonic1: ", Harmonic1(5))
