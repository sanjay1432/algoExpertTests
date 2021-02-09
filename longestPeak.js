function longestPeak(array) {
  // Write your code here.
  if (!array.length || array.length < 3) return 0;
 let peak = 0
 let availablePeaksLength = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peak = 0
      peak += 1
      let leftIdx = i - 1;
      let rightIdx = i + 1
      let leftPointer = array[i]
      while (array[leftIdx] < leftPointer) {
        peak += 1
        leftPointer = array[leftIdx]
        leftIdx--;
      }
      let rightPointer = array[i]
      while (array[rightIdx] < rightPointer) {
        rightPointer = array[rightIdx]
        peak += 1
        rightIdx++
      }
    }

    availablePeaksLength.push(peak)

  }
  return Math.max(...availablePeaksLength)
}


console.log(longestPeak([
  1,
  1,
  1,
  2,
  3,
  10,
  12,
  -3,
  -3,
  2,
  3,
  45,
  800,
  99,
  98,
  0,
  -1,
  -1,
  2,
  3,
  4,
  5,
  0,
  -1,
  -1
]))