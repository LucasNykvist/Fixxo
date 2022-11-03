import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../contexts/contexts';

const DetailedProduct = () => {


    const products = useContext(productContext)
    const { articleNumber } = useParams();

    return (

        <>

            {
                products.allProducts.filter(detailed => detailed.articleNumber === articleNumber).map((detailed, index) => (
                    <div className="detailed-product" key={index}>
                        <div className="container">
                            <div className="image">
                                <img src={detailed.imageName} alt="" />
                                <h1>{detailed.name}</h1>
                                <h1>{detailed.price}$</h1>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>



    )
}

export default DetailedProduct