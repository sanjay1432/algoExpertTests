// function factorial(num){
//     console.log({num})
//     if(num === 1) return 1;
//     return num * factorial(num-1)
// }

// console.log(factorial(5))

function sum(n){
    console.log(n)
    if(n<=1) return;
    let g = sum(n-1)
    let h = sum(n-1)
    console.log(g)
    return 3
}

sum(2)