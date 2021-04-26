//Write a function howSum(targetSum, numbers) that takes in a targetSum and array of numbers as arguments.
//The function should return an array containing any combination of elements that add upto exactly the targetSum.
//If there is no combination that adds up to the targetSum, the return null

//  const howSum = (targetSum, numbers) => {
//      if (targetSum === 0) return [];
//      //if targetSum returns a negative quantity return null
//      if (targetSum < 0) return null;

//      for (let num of numbers) {
//          const remainder = targetSum - num;
//          const remainderResult = howSum(remainder, numbers);
//          if (remainderResult !== null) {
//              return [...remainderResult, num];
//          }
//      }

//      return null;
//  };
// m = targetSum
// n = numbers.length
//
// Brute Force
// time: O(n^m * m )
// space: O(m)


// Memoization
 const howSum = (targetSum, numbers, memo={}) => {
     if (targetSum in memo) return memo[targetSum];
     if (targetSum === 0) return [];
          //if targetSum returns a negative quantity return null
     if (targetSum < 0) return null;

     for (let num of numbers) {
         const remainder = targetSum - num;
         const remainderResult = howSum(remainder, numbers, memo);
         if (remainderResult !== null) {
             memo[targetSum] = [...remaidnerResult, num]
             return memo[targetSum];
         }
     }
     memo[targetSum] = null
     return null;
 };

//Memoized
// time: O(n*m^2)
// space: O(m^2)
