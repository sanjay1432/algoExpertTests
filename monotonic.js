function isMonotonic(array) {
    // Write your code here.
    let isMonotonic = true;
    if(!array.length || array.length === 1) return true;

    // let first = array[0];
    // let second = array[1];
    // let third = array[2];
    // if((first>second && second > third) || (first<second && second < third)){
    //   isMonotonic = true;
    // }
    let prevOrder = undefined
    for(let i =0; i<array.length; i++){
        if(array[i] > array[i+1]){
            if(prevOrder && prevOrder!=='inc') return false 
            if(!prevOrder || prevOrder){
                prevOrder = 'inc'     
            }
        }
        if(array[i] < array[i+1]){
            if(prevOrder && prevOrder!=='dec') return false 
            if(!prevOrder || prevOrder){
                prevOrder = 'dec'     
            }
        }
    }
    return isMonotonic
  }

  console.log(isMonotonic([3,2,2,4]))