// 迭代法
function fibonacci(n) {
    if (n<1) return 0;
    if (n<=2) return 1;
    let F1 = 1;
    let F2 = 1;
    let Fn = n;
    for(let i=2; i<n; i++){
        Fn = F1 + F2;
        F1 = F2;
        F2 = Fn;
    }
    return Fn;
}

// 递归法
function fibonacci(n){
    if (n<1) return 0;
    if(n===1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}

// 记忆法
function fibonacciMemoization(n) {
    const memo = [0,1];
    const fibonacci = (n) =>{
        if(memo[n] != null) return memo[n];
        return memo[n] = fibonacci(n-1,memo) + fibonacci(n-2, memo);
    };
    return fibonacci;
}
console.log(fibonacciMemoization(8))