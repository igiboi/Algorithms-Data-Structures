const canSum = (targetSum, numbers,  memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 ) return true;
    if (targetSum < 0 ) return false; 
    
    for (let num of numbers) {  // this just goes through the array
       const remainder = targetSum - num; 
       if (canSum(remainder, numbers, memo) === true) {
           memo[targetSum] = true;
           return true; 
       }
    }
    // Placed false to make sure it goes through the possibilites of the array
    memo[targetSum] = false;
    return false; 
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));