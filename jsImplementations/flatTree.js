const root = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 5,
          },
        ],
      },
      {
        value: 3,
      },
      {
        value: 4,
        children: [
          {
            value: 6,
          },
        ],
      },
    ],
};

function flatTree(node) {
    const flat = [];
    flat.push(node.value);
    if(node.children && Array.isArray(node.children)) {
        for(let i=0; i<node.children.length; i++) {
            const childNode = node.children[i];
            const firstChild = flatTree(childNode);
            flat.push.apply(flat, firstChild);
        }
    }
    return flat;
}

console.log(flatTree(root));