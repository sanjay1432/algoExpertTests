function findThreeLargestNumbers(array) {
  // Write your code here.
  let largestNumbersArray = [null, null, null];
  if (array.length < 3) return;
  for(let i =0; i<array.length; i++){
    let number = array[i];
    //Check if number exist in largestNumberArry
    const third = largestNumbersArray[2]
    const second = largestNumbersArray[1]
    const first = largestNumbersArray[0]
    if(!third|| number > third){
      shiftandupdate(largestNumbersArray, 2)
      largestNumbersArray[2] = number
    }else if(!second || number >second ){
      shiftandupdate(largestNumbersArray, 1)
      largestNumbersArray[1] = number
    }else if(!first || number > first){
      shiftandupdate(largestNumbersArray, 0)
      largestNumbersArray[0] = number
    }

  }
  function shiftandupdate(arr, position){
    if(position ===2){
      largestNumbersArray =  [arr[1],arr[2], null]
    }
    if(position ===1){
      largestNumbersArray =  [arr[1],null, arr[2]]
    }
    if(position ===0){
      largestNumbersArray =  [null, arr[1],arr[2]]
    }
  }
  return largestNumbersArray;
}




console.log(findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]))