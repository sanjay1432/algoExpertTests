function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort((a,b)=>a-b)
    arrayTwo.sort((a,b)=>a-b)
    let smallestDiffPair = [];
    let IdxOne = 0;
    let IdxTwo = 0;
    let current = Infinity;
    let smallest = Infinity;
    while(IdxOne<arrayOne.length && IdxTwo<arrayTwo.length){
        console.log(arrayOne[IdxOne], arrayTwo[IdxTwo])
        let firstNum =  arrayOne[IdxOne];
        let secondNum  =  arrayTwo[IdxTwo];
        if(firstNum<secondNum){
            current  = secondNum - firstNum;
            IdxOne++;
        } else if(secondNum< firstNum){
            current  = firstNum - secondNum;
            IdxTwo++;
        } else {
           return [firstNum, secondNum]
        }

        // Check if the smallest Difference is greater than the current difference 
       if(smallest>current){
        smallest  = current
        smallestDiffPair = [firstNum, secondNum]
       }
       
    }

	return smallestDiffPair;
}



console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))