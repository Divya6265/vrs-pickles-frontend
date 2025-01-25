import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../Components/Header"
import Category from '../Components/Category'
import Banner from '../Components/Banner'
import "../assets/scss/home.scss"

function Home({ products }) {

    return (
        <div>
            <Header />
            <Banner/>

            <div className='category__container'>
                <Category name="Our Best Seller" cat="Non veg" products={products} />

                <Link to={{
                    pathname : '/category',
                    search: '?name1=Non veg&&cat1=Non veg'
                }} className='link'>View More</Link>
            </div>


            <div className='category__container'>
                <Category name="Non Veg" cat="Non veg" products={products} />
                <Link to={{
                    pathname : '/category',
                    search: '?name1=Non veg&&cat1=Non veg'
                }} className='link'>View More</Link>
            </div>

            <div className='category__container'>
                <Category name="Veg" cat="veg" products={products} />
                <Link to={{
                    pathname : '/category',
                    search: '?name1=veg&&cat1=veg'
                }} className='link'>View More</Link>
            </div>

            <div className='category__container'>

                <Category name="Powders" cat="Powder" products={products} />
                <Link to={{
                    pathname : '/category',
                    search: '?name1=Powder&&cat1=Powder'
                }} className='link'>View More</Link>
                
            </div >

            <div className='category__container'>
                <Category name="Snackz" cat="Snackz" products={products} />
                <Link to={{
                    pathname : '/category',
                    search: '?name1=Snackz&&cat1=Snackz'
                }} className='link'>View More</Link>
                

            </div>

        </div>
    )
}

export default Home