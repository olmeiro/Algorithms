// Whitelisting page 48
// www.youtube.com/watch?v=5xlIPT1FRcA

import * as fs from 'fs';
import * as path from 'path';

// https://stackoverflow.com/questions/33643107/read-and-write-a-text-file-in-typescript

class BynarySearch {
  // private fs = require('fs');
  // private join = require('path');

  constructor() {}

  createFile(dataToSave: string) {
    fs.writeFile('file.txt', `${dataToSave}`, function (err: any) {
      if (err) {
        return console.error(err);
      }
      console.log('File Created');
    });
  }

  showFile(filename: string) {
    const data = fs.readFileSync(path.join(__dirname, filename), 'utf-8');

    const arrayData = data.split('\n');
    arrayData.pop();
    let result: number[] = [];

    arrayData.forEach((num) => result.push(parseInt(num)));

    //Array must be sorted:
    return result.sort();
  }

  Rank(key: number, whiteList: number[]) {
    //Array must be sorted.
    let lo = 0;
    let hi = whiteList.length - 1;

    while (lo <= hi) {
      //Key is in a[lo..hi] or not present.
      let mid = lo + (hi - lo) / 2;
      if (key < whiteList[mid]) {
        hi = mid - 1;
        return hi;
      } else if (key > whiteList[mid]) {
        lo = mid + 1;
        return lo;
      }
      return mid;
    }
    return -1;
  }

  // https://the-algorithms.com/algorithm/binary-search?lang=javascript
  binarySearchMethod(
    arr: number[],
    searchValue: number,
    low = 0,
    high = arr.length - 1
  ): number {
    //base case
    if (high < low || arr.length === 0) return -1;

    const mid = low + Math.floor((high - low) / 2);

    //if the element is present at the middle:
    if (arr[mid] === searchValue) {
      return mid;
    }

    //if element is smaller thatn mid, then
    // it can only be present in left subarray:
    if (arr[mid] > searchValue) {
      return this.binarySearchMethod(arr, searchValue, low, mid - 1);
    }

    //else the element can only be present in right subarray:
    return this.binarySearchMethod(arr, searchValue, mid + 1, high);
  }
}

// var obj = new BynarySearch();
// obj.createFile('Im cool!');
// obj.showFile('file.txt');
// obj.showFile('tinyText.txt');

const obj = new BynarySearch();
const whiteList = obj.showFile('tinyText.txt');
// console.log('lista', whiteList);

//Read key, print if not in whiteList:
const provingRank = obj.Rank(13, whiteList);
console.log(provingRank);
// if ( provingRank< 0) {
//   console.log(key);
// } else {
//   console.log('OMG');
// }

// lista[(10, 10, 11, 13, 18, 23, 23, 48, 50, 54, 68, 77, 77, 77, 84, 98, 98, 99)];

// pass key to find:
// console.log(obj.binarySearchMethod(whiteList, 99));
