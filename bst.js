class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;
        this.newNode = new Node(value);
        //Create a recursive function
        const searchTree = node => {
            // if value  less then the node value go left
            if (value < node.value) {
                //if left node is null
                if (!node.left) {
                    node.left = this.newNode;
                }
                //if left node is not null look again for search Tree
                else {
                    searchTree(node.left)
                }
            }
            // if value  greater then the node value go right
            else if (value > node.value) {
                //if right is null
                if (!node.right) {
                    node.right = this.newNode;
                }
                //if right node is not null look again for search Tree
                else {
                    searchTree(node.right)
                }

            }
        }

        searchTree(this.root)
    }

    contains(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value === value) {
                return true
            }

            if (currentNode.value < value) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return false
    }

    min() {
        let currentNode = this.root;

        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value;
    }
    max() {
        let currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value;
    }


    /* DEPTH FIRST SEARCH */

    /* DFS further divided in 3 search calles inOrdered, preOrdered and postOrderd search */

    /* IN ORDERED DFS*/
    /*LEFT ROOT RIGHT */
    dfsInOrder() {
        let result = []

        const traverse = node => {
            if (node.left) traverse(node.left);
            result.push(node.value)
            if (node.right) traverse(node.right);
        }
        traverse(this.root)

        return result;
    }
    /* PRE ORDERED DFS*/
    /*ROOT LEFT  RIGHT */
    dfsPreOrder() {
        let result = []

        const traverse = node => {
            result.push(node.value)
            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);
        }
        traverse(this.root)

        return result;

    }
    /* IN ORDERED DFS*/
    /*LEFT  RIGHT  ROOT*/
    dfsPostOrder() {
        let result = []

        const traverse = node => {
            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);
            result.push(node.value)
        }
        traverse(this.root)

        return result;
    }


    /* BREADTH FIRST SEARCH - LEVEL BY LEVEL */

    bfs() {
        let results = [];

        let queue = [];
        queue.push(this.root)
        while (queue.length) {
            let currendNode = queue.shift();
            results.push(currendNode.value)
            if (currendNode.left) {
                queue.push(currendNode.left)
            }
            if (currendNode.right) {
                queue.push(currendNode.right)
            }
        }
        return results;
    }

    /*BRANCH SUMS*/
    /*[20,30,79,90] */

    branchSum() {
        let sums = [];

        const traverse = (node, runningSum) => {
            const newRunningSum = runningSum + node.value;
            if (!node) return;
            if (!node.left && !node.right) {
                sums.push(newRunningSum)
            }
            if (node.left) traverse(node.left, newRunningSum);
            if (node.right) traverse(node.right, newRunningSum);
        }

        traverse(this.root, 0);

        return sums
    }

    nodeDepths() {
        let sum = 0;
        const traverse = (node, rsum) => {
            if (!node) return
            sum+=rsum
            if (node.left) traverse(node.left, rsum+1);
            if (node.right) traverse(node.right, rsum+1);
        }
        traverse(this.root, 0)
        return sum;
    }
    validateBstHelper(tree, minValue, maxValue){
        if(tree === null) return true;
        if(tree.value < minValue || tree.value>=maxValue) return false;
        const leftIsValid = this.validateBstHelper(tree.left, minValue, tree.value);
        return leftIsValid && this.validateBstHelper(tree.right,tree.value,maxValue)
    }
    validate(){
     return this.validateBstHelper(this.root, -Infinity, Infinity)
    }
    
   
}
const bst = new BST(15)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
// const bst = new BST()
console.log(bst.validate())