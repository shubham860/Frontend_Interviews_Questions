import { useReducer } from "react"
const initialCount = 0;

const countReducer = (state, action) => {
    switch(action.type) {
        case 'increment': return state += 1;
        case 'decrement': return state > 0 ? state -= 1 : 0;
        case 'reset': return initialCount;
        default: return state;
    }
}

export default function Counter() {
    const [count, dispatch] = useReducer(countReducer, initialCount);
    return <div style={{display:'flex', justifyContent: 'center', height: '60px', alignItems: 'center', background: 'black', color: 'white', width: '80px', margin: '0 auto', borderRadius: '20px'}}>
        <button style={{background: 'black', color: 'white', border: 'none', fontSize: '30px'}} onClick={() => dispatch({type: 'increment'})}>+</button>
        <h2>{count}</h2>
        <button style={{background: 'black', color: 'white', border: 'none', fontSize: '30px'}} onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
}