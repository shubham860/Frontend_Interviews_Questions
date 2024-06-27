import { nanoid } from "nanoid"

export function useTraverseTree() {
    
    function onAddComment(tree, currentParent, parentId, comment) {
        if(currentParent === parentId) {
            const newComment = {
                id: nanoid(),
                comment,
                replies: []
            }

            const clonedTree = structuredClone(tree);
            clonedTree.unshift(newComment);
            return clonedTree;
        }

        for(let i=0; i<tree.length; i++) {
            const childTree = tree[i];
            const newComment = onAddComment(childTree.replies, childTree.id, parentId, comment);
            childTree.replies = newComment;
        }

        return tree
    }

    return {
        onAddComment
    }
}