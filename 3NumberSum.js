function threeNumberSum(array, targetSum) {
  // Write your code here.
  const triplets = []
  if (array.length < 3) return;
  array.sort((a, b) => a - b)
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      if (array[i] + array[left] + array[right] === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++;
        right--;
      } else if (array[i] + array[left] + array[right] < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))