import axios from 'axios';
import React, { useEffect } from 'react'
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

// In the case of parameter exist, it will be passed as props (params) to the loader
export const detailLoader = async ({ params }) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${params.productId}`)
    return response.data
}

const Product = () => {
    const { productId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const result = useLoaderData();
    const navigation = useNavigation();

    if (productId > 10000) throw new Error('Product not in SUK list')

    //Use effect with [] -> When the component is loaded / Run once
    useEffect(() => {
        console.log(searchParams.get('q'))
        console.log(searchParams.get('lang'))

    }, [])

    //useEffect with state
    // UseEffect with state [counter]=> When there is a change on the state value
    // useEffect(()=>{

    // },[counter])

    const orderPressed = () => {
        console.log('simulate ordress pressed API call')
        navigate('/')
    }

    if (navigation.state === "loading") {
        return <h1>Loading...</h1>
    }


    return (
        <div><h2>{result.title}</h2>
            <p>{result.description}</p>

            <button onClick={orderPressed}>Order now</button>

        </div>
    )
}

export default Product