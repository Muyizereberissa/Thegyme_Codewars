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
  


