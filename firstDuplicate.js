function firstDuplicateValue(array) {
    // Write your code here.
    // let firstDup = -1;
    // let lastIndex = null
    // for (let i = 0; i < array.length; i++) {
    //     let int = array[i]
    //     let currentIndex = i + 1
    //     while (currentIndex < array.length) {
    //         if (int === array[currentIndex]) {
    //             if (!lastIndex || lastIndex > currentIndex) {
    //                 firstDup = array[currentIndex]
    //                 lastIndex = currentIndex
    //             }
    //             console.log({lastIndex, currentIndex})
              
    //         }
            
    //         currentIndex++
    //     }
    // }
    // return firstDup;
  for(const value of array){
      const absValue =  Math.abs(value);

      if(array[absValue-1]<0) return absValue;
      array[absValue-1]*= -1;
  }
  return -1
    
}

console.log(firstDuplicateValue([3,4,5, 1, 2, 3, 3, 2, 2]))