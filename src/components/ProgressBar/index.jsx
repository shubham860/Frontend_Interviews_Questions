import { useEffect, useState } from 'react';
import './index.css';

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    const onScroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollPosition / windowHeight) * 100;
        setProgress(scrollPercent);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    })


    return <div className="progress-bar-container">
        <div className="progress-bar">
            <div className="progress" style={{ transform: `translate(${progress - 100}%)` }} />
        </div>
    </div>
}