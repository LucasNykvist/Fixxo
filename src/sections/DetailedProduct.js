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
                    <div className="detailed-card" key={index}>
                        <div className="image">
                            <img src={detailed.imageName} alt="" />
                        </div>
                    </div>
                ))
            }
            {
                products.featuredProducts.filter(detailed => detailed.articleNumber === articleNumber).map((detailed, index) => (
                    <div className="detailed-card" key={index}>
                        <div className="image">
                            <img src={detailed.imageName} alt="" />
                        </div>
                    </div>
                ))
            }
            {
                products.saleProducts.filter(detailed => detailed.articleNumber === articleNumber).map((detailed, index) => (
                    <div className="detailed-card" key={index}>
                        <div className="image">
                            <img src={detailed.imageName} alt="" />
                        </div>
                    </div>
                ))
            }
        </>



    )
}

export default DetailedProduct