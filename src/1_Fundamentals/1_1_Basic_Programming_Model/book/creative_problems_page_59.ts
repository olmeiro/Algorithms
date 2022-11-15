/**
 * * Binomial distribution
 */

var ss = require('simple-statistics');

export function BinomialDistribution(N: number, k: number, p: number) {
  if (N == 0 || k < 0) return 1.0;
  return (
    (1.0 - p) * ss.binomialDistribution(N - 1, k) +
    p * ss.binomialDistribution(N - 1, k - 1)
  );
}

// const intennto = BinomialDistribution(100, 0.5, 4);
// console.log(intennto);

// const arrayBinomail = ss.binomialDistribution(100, 0.5);
// console.log(arrayBinomail);

// const array = [0, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(ss.min(array));
// console.log(ss.max(array));

// const fact = ss.factorial(15);
// console.log(fact);

// **************************************************************
// page 61

// Dice simulation
function DiceSimulation() {
  const SIDES = 6;
  let dist = [2 * SIDES + 1];
  for (let row = 0; row <= SIDES; row++) {
    for (let col = 0; col <= SIDES; col++) {
      dist[row + col] += 1.0;
    }
  }

  for (let index = 0; index < 2 * SIDES; index++) {
    dist[index] /= 36.0;
  }

  return dist;
}

console.log(DiceSimulation());
