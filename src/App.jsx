import { useEffect, useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Category from './Components/Category'
import Product from './Components/Product'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
     axios.get("https://vrs-pickles-backend.onrender.com/")
    .then(response => {
      setProducts(response.data);
    }).catch(err => {
      console.error("Error while fetching the data from backend", err);
    })
  },[])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home products = {products} />} />
      <Route path='/category' element = {<Category products = {products} />} />
      <Route path='/products/:id' element = {<Product />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
