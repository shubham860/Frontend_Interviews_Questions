import {useEffect, useState} from 'react';
import Carousel from './carousel';

export default function CarouselComponent() {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);


    const fetchImages = async (limit) => {
        try {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`);
            const imagesData = await response.json();
            if(imagesData.length) {
                setImages(imagesData);
                setLoading(false);
            }
        } catch(e) {
            console.log(e?.messsage || e)
        }
    }

    useEffect(() => {
        fetchImages(10)
    }, [])

    return <Carousel 
                images={images}
            />
}