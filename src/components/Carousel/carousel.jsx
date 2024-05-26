import { useRef, useState, useEffect } from 'react';
import './index.css';

export default function Carousel({ images }) {
    const imageRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);

    const goToPrev = () => {
        const lastImage = images.length - 1;
        setCurrentImageIndex((prev) => {
            const prevImg = prev - 1;
            if (prevImg < 0) return lastImage;
            return prevImg;
        });
    }

    const goToNext = () => {
        const lastImage = images.length - 1;
        setCurrentImageIndex((prev) => {
            const nextImage = prev + 1;
            if(nextImage > lastImage) return 0;
            return nextImage;
        })
    }


    useEffect(() => {
        const carouselInterval = setInterval(() => {
            goToNext();
        }, 2000);
        return () => clearInterval(carouselInterval);
    }, [currentImageIndex]);

 
    return images.length ? <div className="carouselContainer"  style={{ width: imageWidth  }}>
        <div className="carousel">
            {
                images.map(image => {
                    const { url, id, title } = image;
                    return <img
                        onLoad={() => setImageWidth(imageRef.current.offsetWidth)}
                        src={url}
                        alt={title}
                        className="carousel-item"
                        key={id}
                        ref={imageRef}
                        style={{ transform: `translateX(-${currentImageIndex * imageWidth}px)` }}
                    />
                })
            }
        </div>

        <div className="carouselControl">
            <button className="prev" onClick={goToPrev}>{'<'}</button>
            <button className="next" onClick={goToNext}>{'>'}</button>
        </div>
    </div> : <div>Loading..</div>
}