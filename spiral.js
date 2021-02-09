// function spiralTraverse(array) {
//     // Write your code here.
//     const final = []
//     // const traverse = (freshArray)=>{
//     //     if(!freshArray.length) return;
//     //     let reversed = []
//     //     for(let i = 0 ; i<freshArray.length; i++){

//     //         if(i === 0) {     
//     //             for(k = 0; k<freshArray[i].length; k++){
//     //                 final.push(freshArray[i][k])
//     //             }
//     //         }

//     //         if(i != 0 && i!= freshArray.length-1){
//     //             final.push(freshArray[i][freshArray.length-1])
//     //             reversed.push(freshArray[i][0])
//     //             freshArray[i].pop()
//     //             freshArray[i].shift()
//     //         }
//     //         if(i=== freshArray.length-1 && i != 0 ){

//     //             for(j = freshArray[freshArray.length-1].length-1; j>=0; j--){
//     //                final.push(freshArray[i][j])
//     //             }
//     //         }

//     //     }
//     //     reversed.sort((a,b)=>a-b)
//     //     final.push(...reversed)  
//     //     freshArray.pop()
//     //     freshArray.shift()
//     //     traverse(freshArray)
//     // }

//     // traverse(array)

//     if(!array.length || !array[0].length) return [];

//     let rowBegin = 0;
//         rowEnd = array.length-1;
//         colBegin = 0;
//         colEnd = array[0].length-1;

//         while(rowBegin<=rowEnd && colBegin<=colEnd){
//             //Move Right

//             for(let i=colBegin;i<=colEnd;i++){
//                 final.push(array[rowBegin][i])
//             }
//             rowBegin++ //mark row as traversed after moving right

//             //Move Down

//             for(let i=rowBegin;i<=rowEnd;i++){
//                 final.push(array[i][colEnd])
//             }
//             colEnd--  //mark column as traversed after moving down
//             //Move Left

//             if(rowBegin<=rowEnd){
//                 for(let i = colEnd; i>=colBegin; i--){
//                     final.push(array[rowEnd][i])
//                 }
//                 rowEnd-- //mark row as traversed after moving left
//             }
//             //Move UP

//             if(colBegin<=colEnd){
//                  for(let i = rowEnd; i>=rowBegin; i--){
//                      final.push(array[i][colBegin])
//                  }
//                  colBegin++;
//             }
//         }


//     return final
//   }

function spiralTraverse(array) {

    if (!array.length || !array[0].length) return [];
    let result = []

    //decide the boundaries

    let rowBegin = 0
    rowEnd = array.length - 1;
    colBegin = 0;
    colEnd = array[0].length - 1;


    //Iterate the array until rowBegin less then equal to rowEnd AND colBegin less than equal to colEnd

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        //To right

        for (let i = colBegin; i <= colEnd; i++) {
            result.push(array[rowBegin][i])
        }
        rowBegin++  // mark the row as traversed after moving right

        //To Down
        for (let i = rowBegin; i <= rowEnd; i++) {
            result.push(array[i][colEnd])
        }
        colEnd--  //mark the column as traversed after moving down


        //To Left
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result.push(array[rowEnd][i])
            }
            rowEnd--
        }



        //To up

        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result.push(array[i][colBegin])
            }
            colBegin++

        }


    }

    return result;
}


console.log(spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]))