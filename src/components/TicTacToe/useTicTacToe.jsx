import { useEffect, useState } from "react"


const initialBoard = () => {
    return Array(9).fill(null);
}

export const useTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard());
    const [isXturn, setXturn] = useState(false);

    const WINNING_PATTERNS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const triggerNextRound = () => {
        setTimeout(() => onBoardReset(), 2000);
    }

    const calculateWinner = (currentBoard) => {
        for(let i=0; i<WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i];
            if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                [a, b, c].map(index => {
                    document.getElementById(index).classList.add('activeClass')
                })
                triggerNextRound();
                return currentBoard[a];
            }
        }
        return null;
    }

    const onBlockSelect = (index) => {
        //check winner
        const winner = calculateWinner(board);
        if(winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXturn ? 'X' : 'O';
        setBoard(newBoard);
        setXturn(!isXturn);
    };

    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if (winner) return `Player ${winner} wins!`;
        if (!board.includes(null)) return `It's a draw!`;
        return `Player ${isXturn ? "X" : "O"} turn`;
      };

    const onBoardReset = () => {
        setBoard(initialBoard());
        board.forEach((block, i) => document.getElementById(i).classList.remove('activeClass'));
    };

    return {
        board,
        onBlockSelect,
        onBoardReset,
        getStatusMessage
    }
}