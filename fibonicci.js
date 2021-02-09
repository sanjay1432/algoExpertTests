// function getNthFib(n) {
//     // Write your code here.
//     if(n===0) return;
//     if(n===2) return 1;
//     else if(n===1) return 0;
//     else return getNthFib(n-1)+getNthFib(n-2);
//   }
  
//   console.log(getNthFib(50))

  function getNthFibDP(n, memo = {}) {
    // Write your code here.
    if(n in memo){
      return memo[n]
    }
    if(n<=2) return 1;
    else
      memo[n] = getNthFibDP(n-1, memo)+getNthFibDP(n-2, memo)
      return memo[n]
  }
  console.log(getNthFibDP(4))
  console.log(getNthFibDP(5))
  console.log(getNthFibDP(9))  
  console.log(getNthFibDP(500))