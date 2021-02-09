function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    const ways = new Array(n+1).fill(0);
    console.log({ways})
    ways[0] = 1;
    for(let denom of denoms){
        console.log({denom})
        for(let amount = 1; amount<n+1; amount++){
           if(denom<=amount){
               ways[amount]+=ways[amount-denom] 
           }
        }
    }
    console.log({ways})
    return ways[n]
  }

  console.log(numberOfWaysToMakeChange(6,[1, 5]))