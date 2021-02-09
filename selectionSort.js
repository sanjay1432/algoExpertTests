function selectionSort(array) {
    // Write your code here.
    let startIndex = 0;

    while(startIndex<array.length-1){
      let smallestIndex = startIndex;
      
      for(let i = startIndex+1; i<array.length; i++){
        if(array[smallestIndex]>array[i]){
            smallestIndex = i
        }  
      }

      //perform swap
      let temp = array[smallestIndex];
      array[smallestIndex] = array[startIndex];
      array[startIndex] = temp;
      startIndex++;
    }

    return array
}
console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))