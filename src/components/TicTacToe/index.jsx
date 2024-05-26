import {useTicTacToe} from './useTicTacToe';
import './index.css';

export default function TicTacToe() {
    const { board, onBlockSelect, onBoardReset, getStatusMessage } = useTicTacToe();
    return <div className='tic-wrapper'>
        <div className='tic-container'>
        <div className='header'>
            <h3>{getStatusMessage()}</h3>
            <button onClick={onBoardReset} className='reset'>Reset</button>
        </div>
        <div className='board'>
            {
                board.map((b, index) => {
                    return <button onClick={(e) => onBlockSelect(index)} id={index} className='block' key={index}>{b}</button>
                })
            }
        </div>
    </div>
    </div>
}