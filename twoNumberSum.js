function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b); //Sort the array in ASC order
    let left = 0; // mark left pointer to 0th index of array 
    let right = array.length - 1;// mark right pointer to the last index of array 
    while (left < right) { //Run the loop until left pointer is less than to right pointer
        const currentSum = array[left] + array[right];// total the left & right pointer value
        if (currentSum === targetSum) {
            return [array[left], array[right]]
        } else if (currentSum < targetSum) { //If sum is less then target then increase the left pointer by 1 value
            left++
        } else if (currentSum > targetSum) {//If sum is greater then target then decrease the right pointer by 1 value
            right--
        }
    }
    return []
}

console.log(twoNumberSum([3, 5, -1, 6, 11], 10))
