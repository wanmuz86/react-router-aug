import React from 'react'
import { Form, redirect } from 'react-router-dom'

export const createProductAction = async ({request}) => {
    console.log(request)
    const data = await request.formData();

    const submission = {
        title:data.get('title'),
        price:data.get('price'),
        description:data.get('description')
    }

    // API CALL IT S HAPPENING HERE
    console.log(submission)
    return redirect('/')
}

const CreateProduct = () => {
  return (
    <div>
        <h3>Create Product</h3>
        <Form method='post' action="/create-product">
            <input type="text" name='title' placeholder='Enter product name' />
            <input type="number" name='price' placeholder='Enter product price'/>
            <textarea name="description" type="text"></textarea>
            <button type='submit'>Send</button>
        </Form>
    </div>
  )
}

export default CreateProduct