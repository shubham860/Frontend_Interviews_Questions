import { useEffect, useRef, useState } from "react"
import './index.css'

export default function InfiniteScrollIOPattern() {
    const [productsData, setProductsData] = useState({});
    const [page, setPage] = useState(1)
    const loadingRef = useRef();
    const containerRef = useRef();

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${page * 10}`)
            const productData = await response.json();
            if (Object.keys(productData).length) {
                setProductsData(productData);
            }

        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage(prev => prev + 1);
            }
        }, { threshold: 1 });
        if (loadingRef.current) {
            observer.observe(loadingRef.current)
        }

        return () => observer.unobserve(loadingRef.current)
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
            <div ref={loadingRef}>loading...</div>
        </div>
    </div>
}