// memoization
// js object, keys will be arg to fn, value will the be return value 



const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2 ) return 1;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

console.log(fib(6)); // 8 