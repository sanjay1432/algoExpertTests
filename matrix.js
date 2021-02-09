function convertRowToColumn(array) {
    let newArray = []
    //scanning columns
    let innerArraySize = array[0].length;
    let outerArraySize = array.length;
    if (innerArraySize === outerArraySize) {
        for (let i = 0; i < array.length; i++) {
            let temp = [];
            let count = 0
            while (array[i].length > count) {
                temp.push(array[count][i])
                count++;
            }
            newArray.push(temp)
        }
    }
    if (innerArraySize > outerArraySize) {
        for (let i = 0; i < innerArraySize; i++) {
            let temp = [];
            let count = 0
            while (innerArraySize > count) {
                if ((array[count])) {
                    temp.push(array[count][i])
                }
                count++;
            }
            newArray.push(temp)
        }
    }

    if (innerArraySize < outerArraySize) {
        for (let i = 0; i < outerArraySize-(outerArraySize-innerArraySize); i++) {
            let temp = [];
            let count = 0
            while (outerArraySize > count) {
                if ((array[count])) {
                    temp.push(array[count][i])
                }
                count++;
            }
            newArray.push(temp)
        }
    }
    return newArray
}


console.log(convertRowToColumn([[1, 2, 3], [4, 5, 6],[7,8,9],[10,11,12]]))