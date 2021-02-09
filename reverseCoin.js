function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let minReversedCoins = 0

    for(let i = 0; i<A.length-1; i++){
        if((A[i]===1 && A[i+1] !=0) || (A[i]===0 && A[i+1] !=1)){
            minReversedCoins+=2
        } 
    }
    return minReversedCoins;
}

console.log(solution([0, 1, 0]))