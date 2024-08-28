import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product, { detailLoader } from './pages/Product.jsx'
import Error from './pages/Error.jsx'
import ProductError from './pages/ProductError.jsx'
import ProductList, { dataLoader } from './pages/ProductList.jsx'
import CreateProduct, { createProductAction } from './pages/CreateProduct.jsx'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path:"/products",
          element:<ProductList/>,
          loader:dataLoader
        },
    
        {
          path:"/products/:productId",
          errorElement:<ProductError/>,
          element:<Product/>,
          loader:detailLoader
        },
        {
          path:"/create-product",
          element:<CreateProduct/>,
          action:createProductAction
        }
      ]
    }
    ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
