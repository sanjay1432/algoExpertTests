function hasSingleCycle(array) {
    // Write your code here.
    let noOfVisits = 0;
    let currentIdx =  0;
    while(noOfVisits<array.length){
        if(noOfVisits>0 && currentIdx === 0) return false;
        noOfVisits++;
        currentIdx =  getNextindex(currentIdx, array)
    }
    return currentIdx === 0;
}

function getNextindex(currentIdx, array) {
    let jump = array[currentIdx];
    const nextidx = (currentIdx+jump)%array.length;
    return nextidx>=0?nextidx:nextidx+array.length;
}


console.log(hasSingleCycle([2, 3, 1, -4, 1, 2]))