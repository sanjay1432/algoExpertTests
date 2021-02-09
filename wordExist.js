var exist = function (board, word) {
    let wordArray = word.toUpperCase().split('');
    let found = []
    let visitedBoard = board.map((row) => row.map((val) => false));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (visitedBoard[i][j]) continue;
            depthFirstSearch(i, j, board, visitedBoard, wordArray, found)
        }
    }
    let result =  found.join('').toLowerCase()
    let input  =  word.toLowerCase()
    console.log({result, input})
    return result === input;
};

var depthFirstSearch = function (i, j, board, visitedBoard, wordArray, found) {
    const nodeToExplore = [[i, j]];

    while (nodeToExplore.length) {
        const wordToExlore = wordArray[0];
        const currentNode = nodeToExplore.pop();
        i = currentNode[0];
        j = currentNode[1];


        if (visitedBoard[i][j]) continue;
      
        if (wordToExlore === board[i][j].toUpperCase()) {
            wordArray.shift()
            found.push(wordToExlore)
            visitedBoard[i][j] = true;
        }
        if (!nodeToExplore.length) {
            const neighbours = getNeighbours(i, j, board)
            for (const neighbour of neighbours) {
                nodeToExplore.push(neighbour)
            }
        }

    }
}

var getNeighbours = function (i, j, board) {
    let neighbours = [];
    //Left
    if (j > 0) neighbours.push([i, j - 1])
    //top
    if (i > 0) neighbours.push([i - 1, j])
    //right

    if (j < board[0].length - 1) neighbours.push([i, j + 1]);
    //down

    if (i < board.length - 1) neighbours.push([i + 1, j]);
    return neighbours
}
console.log(exist([["a","b"]], "ba"))