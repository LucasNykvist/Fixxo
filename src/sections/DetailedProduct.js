import React from 'react'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
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
                            <div className="top">
                                <div className="sale-offer">Get 25% OFF at the Fixxo Selection - Shop Now!</div>
                                <Breadcrumb className="breadcrumb" where={`Products/${detailed.name}`} icon="fa-solid fa-house" />
                            </div>

                            <div className="product">
                                <div className="product-images">
                                    <div className="main-image">
                                        <img src={detailed.imageName} alt="" />
                                    </div>

                                    <div className="small-images">
                                        <div className="small-image"></div>
                                        <div className="small-image"></div>
                                        <div className="small-image"></div>
                                    </div>

                                </div>

                                <div className="product-info">
                                    <h1>{detailed.name}</h1>
                                    <p className='sku-brand'>SKU: 12345670 BRAND: The Northland</p>
                                    <ul className="rating">
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                    </ul>
                                    <h3 className='price'>${detailed.price}</h3>
                                    <p className='description'>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<Link to={"/read-more"}>read more</Link >) </p>
                                    <div className="size">
                                        <p>Size:</p>
                                        <div className="sizes">
                                            <div className="size-box">S</div>
                                            <div className="size-box">M</div>
                                            <div className="size-box">L</div>
                                            <div className="size-box">X</div>
                                        </div>
                                    </div>
                                    <div className="color">
                                        <p>Color:</p>
                                        <div className="options">
                                            Choose an Option <i class="fa-regular fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <p>Qty:</p>
                                        <div className="amount">
                                            <button className="decrement">-</button>
                                            <div className="current">1</div>
                                            <button className="increment">+</button>
                                        </div>
                                        <button>ADD TO CART</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </>



    )
}

export default DetailedProduct