import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    const { productId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    //Use effect with [] -> When the component is loaded / Run once
    useEffect(()=>{
        console.log(searchParams.get('q'))
        console.log(searchParams.get('lang'))

    },[])

    //useEffect with state
// UseEffect with state [counter]=> When there is a change on the state value
    // useEffect(()=>{

    // },[counter])


    return (
        <div><h2>Product page</h2>
            <p>Page for product of id {productId}</p>
        </div>
    )
}

export default Product