import React from 'react'
import { useRouteError } from 'react-router-dom'

const ProductError = () => {
    const error = useRouteError()
    return (
        <div>
            <h2>Oops! Product Error happens</h2>
            <p>{error.statusText || error.message}</p>
            <button>Continue browsing</button>
        </div>
    )
}

export default ProductError