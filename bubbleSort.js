function bubbleSort(array) {
    // Write your code here.
    let isSorted = false;
    let count = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - count; i++) {
            if (array[i] > array[i + 1]) {
                //swap
                let temp =  array[i + 1]
                array[i + 1] =  array[i] ;
                array[i] = temp;               
                isSorted = false
            }
        }
        count += 1
    }
    return array;
}


console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))