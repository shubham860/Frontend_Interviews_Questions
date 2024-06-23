const rootElement = document.getRootNode();

function DfsTraversal(element) {
    const childElements = element.children;
    for(let i=0; i<childElement.length; i++) {
        let child = childElements[i];
        console.log(child);
        DFS(child);
    }
}

DfsTraversal(rootElement);

// -------------------------------------------------------------------------------------- //

const childrenQueue = [];
function BfsTraversal(element) {
    const childElement = element.children;
    for(let i=0; i<childElement.length; i++) {
        queue.push(childElement[i]);
    } 

    if(queue.length > 0) {
        const element = queue.shift();
        console.log(element);
        BfsTraversal(element);
    } else {
        return;
    }
}

BfsTraversal(rootElement);