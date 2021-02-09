function cycleInGraph(edges) {
    // Write your code here.
    let visitedNodes = new Array(edges.length).fill(false);
    let stackedNodes = new Array(edges.length).fill(false);

    for (let i = 0; i < edges.length; i++) {
        if (visitedNodes[i]) continue;
        const isCycle = containCycle(edges, i, visitedNodes, stackedNodes)
        if (isCycle) return true
    }
    return false;
}

function containCycle(edges, node, visitedNodes, stackedNodes) {
    visitedNodes[node] = true;
    stackedNodes[node] = true;

    const neigbours = edges[node];
    for (const neighbour of neigbours) {
        if (!visitedNodes[neighbour]) {
            const isCycle = containCycle(edges, neighbour, visitedNodes, stackedNodes)
            if (isCycle) return true
        } else if (stackedNodes[neighbour]) {
            return true;
        }
    }
    stackedNodes[node] = false
    return false

}

console.log(cycleInGraph([[0], [1]])
)