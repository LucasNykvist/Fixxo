import React from 'react'
import { useParams } from 'react-router-dom';

const DetailedProduct = ({ products }) => {

    const { articleNumber } = useParams();

    return (

        products.filter(detailed => detailed.articleNumber === articleNumber).map((detailed, index) => (
            <div className="detailed-card" key={index}>
                <div className="image">
                    <img src={detailed.imageName} alt="" />
                </div>
            </div>
        ))
    )
}

export default DetailedProduct