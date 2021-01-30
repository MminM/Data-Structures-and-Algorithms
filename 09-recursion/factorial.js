// 迭代法
function factorial(n) {
    if(n<0) return undefined;
    let total = 1;
    for(let i = n; i>0; i--){
        total = total * i;
    }
    return total;
}

// 递归法
function factorial(n) {
    if(n<0) return undefined;
    if(n===0 || n===1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5)); // 120