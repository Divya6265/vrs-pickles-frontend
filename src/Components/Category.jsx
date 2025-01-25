import React from 'react'
import Card from '../Components/Card'
import Header from './Header';
// import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
function Category({name, cat, products}) {
    // const location = useLocation();
    // const searchParams= new URLSearchParams(location.search);

    const [searchParams] = useSearchParams();
    if(searchParams.size>0)
    {
        {name = searchParams.get('name1')}
        {cat = searchParams.get('cat1')}
    }
    return (
        <>
        {
             searchParams.size>0 ? (
                
                <Header/>
             ) : null
        }
        <div className="square1">
            <div className="square2">
            </div>
            <div className="square3">
            </div>
            <p>{ name}</p>
        </div>

        <div className="products__container">
            {products.map(product => {
                if (product.category == cat) {
                    return <Card key={product._id} product={product} />
                }
            })}
        </div>
        
        </>
    )
}

export default Category