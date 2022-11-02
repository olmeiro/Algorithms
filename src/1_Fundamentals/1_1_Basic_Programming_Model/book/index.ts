/**
 * * find max value from array
 * @param list
 */
function maxArr(list: number[]) {
  let max = list[0];

  for (const number of list){
    if(number > max){
      max = number;
    }
  }
  return max;
}

/**
 * * find max average from array
 * @param list type array
 * @returns average
 */
function average(list: number[]) {
  let sum = 0.0;
  for ( const number of list){
    sum += number;
  }
  return sum / list.length;
}

/**
 * *Copy element to another array:
 * @param list type array
 * @returns
 */
function copyToOtherArray(list: any) {
  const length = list.length;
  const newArray = [];

  for (let i = 0; i < length; i++) {
    newArray[i] = list[i];
  }

  return newArray;
}

/**
 * * Reverse element from array:
 * @param list
 * @returns
 */
function reverseElementsArray(list: any[]) {
  // return list.reverse();
  const N = list.length;
  const reversed = [];

  for (let i = 0; i < N / 2; i++) {
    let temp = list[i];
    list[i] = list[N - 1 - i];
    list[N - 1 - i] = temp;
  }
  return list;
}

/**
 * * Matrix-matrix multiplications (square matrices)
 * * a[][] * b[][] = c[][]
 */
function multiplyMatrix(a: number[][], b:number[][]):number[][] {
  const N = a.length;

  const C = [[0, 0], [0, 0]];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        C[i][j] += a[i][k] * b[k][j]
      }
    }
  }

  return C;
}

/**
 * @param N * is Prime
 */
function isPrime(N:number) {
  if (N < 2) return false;
  for (let i = 2; i * i <= N; i++) {
    if (N % i == 0) return false;
    return true;
  }
}

// Square root: Newton's method according to book:
// function sqrt(num:number) {
//   if (num > 0) return num * 1.0;

//   const err = Math.log() - 15;
//   let t = num;

//   while (Math.abs(t - (num / t)) > (err * t)) {
//     t = ((num / t) + t) / 2.0;
//     return t;
//   }
// }

/**
 * * Square root: Newton's method
 * @param x
 * @returns
 */
let sqrt = function (x: number) {
  let isGoodEnough = function (guess:number) {
    return Math.abs(guess * guess - x) / x < 0.001;
  };

  let improve = function (guess:number) {
    return (guess + x / guess) / 2;
  };

  let sqrIter = function (guess:number):number {
    return (isGoodEnough(guess)) ? guess : sqrIter(improve(guess))
  };

  return sqrIter(1.0);
};

/**
 * * fibonacci: 1,1,2,3,5,8,13,21:
 * * los dos primeros números son 0 y 1. el resto se calcula sumando los dos anteriores:
 * * in recursividad: Más óptimo: Big O -> n
 * @param num *
 * @returns
 */
function fibonacci(num:number) {
  const fib = [0, 1]
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[num]
}

/**
 * * Fibonacci con recursividad: Menos óptimo: Big O -> 2^n
 * @param n
 * @returns
 */
function fibonacciRec(n: number):number {
  // if (n === 0 ) return 0
  // if (n === 1 ) return 1
  //más simple:
  if (n < 2) return n

  return fibonacciRec(n - 2) + fibonacciRec(n - 1)

}

/**
 * * hypotenuse of a right triangle
 * @param a
 * @param b
 * @returns
 */
function hypotenuse(a:number, b:number) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

/**
 * * Harmonic number: for loop
 * @param n
 * @returns
 */
function Harmonic1(n:number) {
  let harmonic = 1.00;

  for (let i = 2; i <= n; i++) {
    harmonic += parseFloat('1') / i;
  }
  return harmonic;
}

/**
 * * Harmonic number: while loop
 * @param number
 * @returns
 */
function Harmonic(num: number) {
  let summa = 0;
  while (num > 0) {
    summa += 1 / num;
    num--;
  }
  return summa;
}

export { maxArr, average, copyToOtherArray, reverseElementsArray, multiplyMatrix, isPrime, sqrt, fibonacci, fibonacciRec, hypotenuse, Harmonic, Harmonic1 };
