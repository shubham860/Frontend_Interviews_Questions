import { useState } from "react"
import './index.css';
import { commentData } from "./commentData";
import Comment from './Comment';
import { useTraverseTree } from './useTraverseTree';

export default function NestedComments() {
    const [comments, setComments] = useState(commentData);
    const [value, setValue] = useState('');
    const { onAddComment } = useTraverseTree();

    const onInputChange = (event) => {
        const { value } = event.target;
        setValue(value);
    }

    const postComment = (parentId, comment) => {
        const updatedComments = onAddComment(comments, null, parentId, comment);
        setComments(structuredClone(updatedComments));
        setValue('');
    }

    return <div className="nestedComments">
        <div className="commentsBox">
            <input type="text" value={value} onChange={onInputChange} className="commentInput" placeholder="Write your comment"/>
            <button className="commentBtn" onClick={() => postComment(null, value)}>post</button>
        </div>

        <div className="comments">
            {
                comments.map((comment) => {
                   return <Comment 
                            replies={comment.replies}
                            postComment={postComment}
                            comment={comment.comment}
                            id={comment.id}
                            key={comment.id}
                        />
                })
            }
        </div>
    </div>
}