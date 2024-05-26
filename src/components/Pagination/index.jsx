import { useEffect, useState } from 'react';
import './index.css';
import Pagination from './Pagination';

export default function PaginationComponents() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const productsPerPage = 10;

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage * productsPerPage) - productsPerPage}`);
            const productsData = await response.json();
            if (productsData?.products?.length) {
                setProducts(productsData?.products || []);
                const totalPages = Math.ceil(productsData.total / productsPerPage);
                setTotalPages(totalPages);
            } else {
                setProducts([]);
            }
        } catch (e) {
            setError(true);
            setLoading(false);
            console.log(e.message);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [currentPage])

    return <div className='container'>
        <div className='pagination-products'>
            {
                products?.map(product => {
                    const { title, thumbnail } = product
                    return <div className="product" key={title}>
                        <img src={thumbnail} width={70} height={70} alt='product' />
                        <h5>{title}</h5>
                    </div>
                })
            }
        </div>

        <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
        />
    </div>
}   