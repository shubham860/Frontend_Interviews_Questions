import { useState } from 'react';

export default function Comment({ comment, id, replies, postComment }) {
    const [showReplies, setShowReplies] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [replyValue, setReplyValue] = useState('');

    const onReplyInputChnage = (event) => {
        setReplyValue(event.target.value);
    }

    const onReplyClick = () => {
        setShowReplies(!showReplies);
        setShowInput(true);
    }

    const onReplyPost = () => {
        postComment(id, replyValue);
        setReplyValue('');
        setShowInput(false);
    }

    return <div className='comment-container'>
        {comment}
        <button className='replyBtn' onClick={onReplyClick}>Reply</button>
        <div className='comment-replies'>
                {showInput ? <div>
                    <input type='text' placeholder='reply..' onChange={onReplyInputChnage} />
                    <button onClick={onReplyPost}>post</button>
                </div> : ''}
                {
                    replies.map((reply) => {
                        return <Comment
                            comment={reply.comment}
                            replies={reply.replies}
                            id={reply.id}
                            key={reply.id}
                            postComment={postComment}
                        />
                    })
                }
            </div>
    </div>
}