// function factorial(num){
//     let total = 1;
//     for(let i = num; i > 0; i--){
//         total *= i
//     }
//     return total;
// }

// factorial(4)

// Recursive factorial
function factorial(num){
    if(num === 1) return 1; // Base case
    return num * factorial(num-1) // different results

}

factorial(3)
