import { useState } from "react"
import './index.css';

export default function StartRating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [value, setValue] = useState(5);

    const onInputChange = (event) => {
        const inputValue = event.target.value
        if (inputValue) {
            const intValue = Math.floor(parseInt(inputValue, 10))
            setValue(intValue)
        }
    }

    return <div className="rating-container">
        <div className="stars">
            {
                [...Array(parseInt(value, 10))].map((_, index) => {
                    const currentRating = index + 1;
                    const starClasses = currentRating <= (hover || rating) ? 'star activeStar' : 'star';
                    return <span
                        className={starClasses}
                        key={index}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setRating(currentRating)}
                        onBlur={()=> {
                            setRating(null);
                            setHover(null);
                        }}
                        tabIndex="1"
                    >&#9733;</span>
                })
            }
        </div>
        <h4>Your Rating is {rating || 0}</h4>
        <input type='number' min={1} value={value.toString()} onChange={onInputChange} placeholder="Enter stars" className="starInput" />
    </div>
}