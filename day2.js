const fs = require('fs');

const input = fs.readFileSync('day2.txt', 'utf8');

const lines = input.split('\n');

let count = 0;

lines.forEach(line => {
  const numbers = line.split(' ').map(Number);
  count += isSafe(numbers);
});

console.log(count);

function isSafe(arr) {
  if (checkSafe(arr)) {
    return 1;
  }

  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    if (checkSafe(newArr)) {
      return 1;
    }
  }

  return 0;
}


function checkSafe(arr){
  if(arr[1]>arr[0]){
    for(let i=1;i<arr.length;i++){
      if(arr[i]<arr[i-1]){
        return 0;
        }
        if(!(Math.abs(arr[i]-arr[i-1])>=1 && (Math.abs(arr[i]-arr[i-1])<=3))){
          return 0;
        }
      }
      
    }else{
    for(let i=1;i<arr.length;i++){
      if(arr[i]>arr[i-1]){
        return 0;
        
      }
      if(!(Math.abs(arr[i]-arr[i-1])>=1 && (Math.abs(arr[i]-arr[i-1])<=3))){
        return 0;
      }
    }

  }

  return 1;
}

