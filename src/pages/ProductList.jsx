import React from 'react'
import axios from 'axios'
import { useLoaderData, useNavigation } from 'react-router-dom'

export const dataLoader = async () => {
    // With axios you are able to create interceptor to override you request and response
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
}

const ProductList = () => {
    // Retrieve the data from the loader
    const results = useLoaderData()
    // to know the state of the page / loading or done loading
    const navigation = useNavigation()
    if (navigation.state == 'loading'){
        return <h1>Loading!!</h1>
    }
    return (
        <div>
            <h2>Product List</h2>
            <div>
            {
                results.map(val=>
                <div key={val.id}>
                    <h3>{val.title}</h3>
                    <img src={val.image} alt={val.title}  width={100}/>
                    <p>{val.price} - {val.category}</p>
                </div>
                )
            }
            </div>
        </div>
    )
}

export default ProductList