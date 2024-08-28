import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { productId } = useParams();
    return (
        <div><h2>Product page</h2>
            <p>Page for product of id {productId}</p>
        </div>
    )
}

export default Product