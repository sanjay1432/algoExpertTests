function moveElementToEnd(array, toMove) {
    // Write your code here.
    // let matched = [];
    // let nonmatched = [];
    // for(let i = 0; i<array.length; i++){
    //     if(array[i]=== toMove){
    //         matched.push(array[i])
    //     }
    //     if(array[i]!== toMove){
    //         nonmatched.push(array[i])
    //     }
    // }
    // return nonmatched.concat(matched)


    let i = 0;
    let j = array.length-1;
    while(i<j){
        while(i<j && array[j] === toMove) j--;
        if(array[i] === toMove){
            //swap
            const temp = array[j];
            array[j] = array[i];
            array[i] = temp
        }
        i++;
    }
    return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))