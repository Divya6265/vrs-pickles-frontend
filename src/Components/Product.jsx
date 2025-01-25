import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import "../assets/scss/product.scss"

function Product() {
    const paarams = useParams();
    console.log(paarams.id)
    const [product, setProduct] = useState({});
    const [imageUrl, setImgeUrl] = useState("");
    useEffect(() => {
        axios.get("https://vrs-pickles-backend.onrender.com/products/"+paarams.id)
            .then(response => {
                console.log(response.data, "res");
                setProduct(response.data);
            }).catch(err => {
                console.log("Eror in axios to fetch product by id", err);
            })
    }, []);

    console.log(product)
    useEffect(() => {
        if(product.images?.[0]){
            setImgeUrl("https://vrs-pickles-backend.onrender.com" + product.images[0])
        }
    },[product]);

    return (
        <div>

             <Header/>
            <div className='product__details'>
                <img src={imageUrl} alt="Product Image" className='product__image' />
                <div className="content">
                    <p className='product__title'>{product.title}</p>
                    <p className='product__description'>{product.description}</p>
                    <p className='product__price'>Price : <span>{product.price}</span> </p>

                    <div className="features">
                        <div className="step">
                            Homemade Red Chilly Powder  
                        </div>
                        <div className="step">
                            Customization Available
                            <p> Savor the Flavor: Customize Your Cuisine</p>
                        </div>
                        <div className="step">
                            Our offers 
                           <p> Buy Non veg pickle 1kg get 500g veg pickle for free</p>
                           <p> Buy Sanckz 5kg get 500g veg pickle and 1 kg Sanckz for free</p>

                         </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product