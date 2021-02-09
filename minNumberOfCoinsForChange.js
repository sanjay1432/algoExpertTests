function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
    const noOfCoins = new Array(n+1).fill(Infinity);
    noOfCoins[0] = 0;
    for(let demon of denoms){
        for(let amount = 0; amount<noOfCoins.length; amount++){
            if(demon<=amount){
              console.log(noOfCoins)
                noOfCoins[amount] = Math.min(noOfCoins[amount], noOfCoins[amount-demon]+1)
            }
        }
    }
    
    return noOfCoins[n] === Infinity?-1: noOfCoins[n]

  }


console.log(minNumberOfCoinsForChange(6, [1, 2, 4]))