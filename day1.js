const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');
var arr1 = [];
var arr2 = [];

lines.forEach(line => {
  const numbers = line.split(' ').map(Number);

  if (numbers.length >= 4 && !numbers.includes(NaN)) {
    arr1.push(numbers[0]);
    arr2.push(numbers[3]);
  }
});

arr1.sort(); 
arr2.sort();

var a = 0;

for (let i = 0; i < arr1.length; i++) {
  a += Math.abs(arr1[i] - arr2[i]);
}

console.log(a);


//part b



function SimilarityScore(List1, List2) {
    const Count = {};

    for (let num of List2) {
        if (Count[num]) {
            Count[num]++;
        } else {
            Count[num] = 1;
        }
    }

    let Score = 0;

    for (let num of List1) {
        Score += num * (Count[num] || 0);
    }

    return Score;
}

console.log(SimilarityScore(arr1,arr2))