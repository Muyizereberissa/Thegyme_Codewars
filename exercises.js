function Astray(number) {
    number.sort((a, b) => a - b);
  
    return number[0] === number[1] ? number[number.length - 1] : number[0];
   
  };

  function divisibleBy(numbers, divisor) {
    return numbers.filter(number => number % divisor === 0);
    
  }
  
  console.log(divisibleBy([2, 3, 4, 6, 7, 5], 2))
// finding correct answer
  function checkExam(array1, array2) {
    let score = 0
     for (let i =0; i < array1.length; i++){
       if(array2[i] === array1[i]){
         score += 4
       }
       else if(array2[i] === ""){
         score += 0
       }
       else score -= 1
     }
     
     return Math.max(score, 0)
   }
  // returning reversed word
  function spinWords(string) {
    return string
      .split(" ") 
      .map(word => 
        word.length >= 5 ? word.split("").reverse().join("") : 
      word )
      .join(" "); 
  }

  // Two to One : removing duplicates

  function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
  }

  // Sum of two lowest positive integers
  function sumTwoSmallestNumbers(numbers) {
    if (numbers.length >= 4) {
         numbers.sort((a, b) => a - b);
 
    return numbers[0] + numbers[1];;
    }
   else 
     throw error('array must contain atleast 4 numbers')
   
 }

//  Fix string case
function solve(s) {
   
  let x = 0;
  let y = 0;

  for (let i of s) {
      if (i === i.toUpperCase()) {
          x++;
      } else {
          y++;
      }
  }

  return x > y ? s.toUpperCase() : s.toLowerCase();
}

// Count the Digit
function nbDig(n, d) {
  let numCount = 0;
  for (let i = 0; i <= n; i++) {
      const sq = i * i; 
      const sqStr = square.toString();
      
      for (let i of sqStr) {
          if (i === d.toString()) {
              numCount++;
          }
      }
  }
  return numCount;
}
let result = nbDig(10,1)
console.log(result)
  


