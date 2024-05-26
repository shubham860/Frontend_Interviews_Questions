import { useEffect, useRef, useState } from "react"
import './index.css'

function debounce(fn, limit) {
    let timeout;
    return function (...args) {
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, limit)
    }
}

export default function InfiniteScrollComponent() {
    const [productsData, setProductsData] = useState({});
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const containerRef = useRef();

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=${page * 10}`)
            const productData = await response.json();
            if (Object.keys(productData).length) {
                setProductsData(productData);
                setLoading(false);
            }

        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    const handleScroll = debounce(() => {
        const containerElement = containerRef.current;
        const scrollTop = containerElement.scrollTop;
        const height = containerElement.offsetHeight;
        const scrollHeight = containerElement.scrollHeight;
        if (scrollTop + height + 200 > scrollHeight && !loading) {
            setPage(prev => prev + 1);
        } 
    }, 100)

    useEffect(() => {
        if(containerRef?.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
            return () => containerRef.current.removeEventListener('scroll', handleScroll);
        }
    }, [])


    useEffect(() => {
        fetchProducts();
    }, [page])


    return <div className="componentContainer">
        <div className="scrollContainer" ref={containerRef}>
            {
                productsData?.products?.map(product => {
                    const { title, thumbnail } = product
                    return <div className="product" key={title}>
                        <img src={thumbnail} width={70} height={70} alt='product' />
                        <h5>{title}</h5>
                    </div>
                })
            }
            {
                loading && <div>loading...</div>
            }
        </div>
    </div>
}