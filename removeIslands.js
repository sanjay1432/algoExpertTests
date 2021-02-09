function removeIslands(matrix) {
    // Write your code here.

    let editedMatrix = matrix.map((row) => row.map((val) => val))

    let visitedMatrix =  matrix.map((row) => row.map((val) => false));



   //Traverse First row
    for( let j = 0 ; j< matrix.length; j++){
        if(visitedMatrix[0][j]) continue;
        if(matrix[0][j] === 0) continue;
        visitedMatrix[0][j] =  true;
        
        //Depth first search if neighbours is 1

        depthFirstSearch(0,j,matrix, visitedMatrix)
    }

    //Traverse First column
    for( let j = 0 ; j< matrix.length; j++){
        if(visitedMatrix[j][0]) continue;
        if(matrix[j][0] === 0) continue;
        visitedMatrix[j][0] =  true;
        
        //Depth first search if neighbours is 1

        depthFirstSearch(j,0,matrix, visitedMatrix)
    }


    //Traverse last row
    for( let j = 0 ; j< matrix.length; j++){
        if(visitedMatrix[matrix.length-1][j]) continue;
        if(matrix[matrix.length-1][j] === 0) continue;
        visitedMatrix[matrix.length-1][j] =  true;
        
        //Depth first search if neighbours is 1

        depthFirstSearch(matrix.length-1,j,matrix, visitedMatrix)
    }

    //Traverse last column
    for( let j = 0 ; j< matrix.length; j++){
        if(visitedMatrix[j][matrix[0].length-1]) continue;
        if(matrix[j][matrix[0].length-1] === 0) continue;
        visitedMatrix[j][matrix[0].length-1] =  true;
        
        //Depth first search if neighbours is 1

        depthFirstSearch(j,matrix[0].length-1,matrix, visitedMatrix)
    }
   
  

    // Last iteration

    for(let i = 1; i<matrix.length; i++){
        for(let j = 1; j<matrix[i].length; j++){
            if(visitedMatrix[i][j]) continue
            if(matrix[i][j]  === 1) editedMatrix[i][j] = 0
        }
    }

    return editedMatrix;
}

function depthFirstSearch(i, j, matrix, visitedMatrix) {
    const neighbours = getNeighbours(i, j , matrix)

    while (neighbours.length){
        const node = neighbours.pop();
        i = node[0];
        j = node[1];
        
        if(visitedMatrix[i][j]) continue
        if(matrix[i][j] === 0) continue

        visitedMatrix[i][j] =  true;
        depthFirstSearch(i, j, matrix, visitedMatrix)
    }
}
function getNeighbours(i, j, matrix) {
 let neighbours = [];
 
 //left
 if(j>0) neighbours.push([i, j-1])
 //right
 if(j<matrix[i].length-1) neighbours.push([i, j+1])
 //top
 if(i>0) neighbours.push([i-1, j])
 //down
 if(i<matrix.length-1) neighbours.push([i+1, j])
 return neighbours;
}



console.log(removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
]))