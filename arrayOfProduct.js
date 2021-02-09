function arrayOfProducts(array) {
    // Write your code here.
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let excludedNumberIdx = i;
        let count = 0
        let product = 1;
        while (count < array.length) {
            if (count != excludedNumberIdx) {
                product = product * array[count]
            }
            count++;

        }
        result.push(product)
    }
    return result;
}

console.log(arrayOfProducts([5, 1, 4, 2]))