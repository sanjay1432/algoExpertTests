// function kadanesAlgorithm(array) {
//     // Write your code here.
//     let subsets = []
//     const recursive = (array, index = 0)=>{
//         if(index>array.length) return
//         for (let i = 0; i < array.length; i++) {
//             let total = 0
//             for (let j = index; j < i + 1; j++) {
//                 total += array[j]
//             }
//             if(index<=i){
//                 subsets.push(total)
//             }
            
//         }
//         recursive(array, index+1)
//     }
//     recursive(array)
   

//     // console.log(subsets)
//     subsets.sort((a,b)=>b-a);

//     console.log(subsets[0])


//     return subsets[0];
// }

//O(n) time | O(1) space
function kadanesAlgorithm(array){
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
     for(let i = 1 ; i<array.length; i++){
         const num =  array[i];
         maxEndingHere = Math.max(maxEndingHere+num, num);
         maxSoFar = Math.max(maxSoFar,maxEndingHere)
     }
    return maxSoFar;
}
//[1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]
console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))