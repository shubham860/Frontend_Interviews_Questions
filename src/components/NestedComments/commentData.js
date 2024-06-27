import { nanoid } from 'nanoid'

export const commentData = [
    {
        id: nanoid(),
        comment: 'First Comment',
        replies: [
            {
                id: nanoid(),
                comment: 'First Comment Reply',
                replies: []
            }
        ]
    }, 
    {
        id: nanoid(),
        comment: 'SecondComment',
        replies: []
    }
]