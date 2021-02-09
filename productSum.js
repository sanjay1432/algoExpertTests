function productSum(array, depth = 1 ) {
    // Write your code here.
    let sum = 0;

    for(let element of array){

        if(Array.isArray(element)){
            sum+= productSum(element, depth + 1)
        }else {
            sum+= parseInt(element)
        }
    }
   
    return sum*depth
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))