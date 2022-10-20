import React from 'react'
import MainButton from './MainButton'
import image from '../assets/images/card-img.jpg'

const ProductBox = (item) => {
    return (
        <div className="product-box">
            <div className="product-card">
                <img src={item.img} alt={item.name} />
                <div className="card-menu">
                    <button className='nav-icon'><i class="fa-light fa-heart"></i></button>
                    <button className='nav-icon'><i class="fa-light fa-code-compare"></i></button>
                    <button className='nav-icon'><i class="fa-light fa-bag-shopping"></i></button>
                </div>

                <div className='quick-view'>
                    <MainButton link="/products" text="QUICK VIEW" />
                </div>

            </div>

            <div className="product-info">
                <p className="category">{item.category}</p>
                <h4>{item.name}</h4>
                <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
                <p class="price">{item.price}</p>
            </div>

        </div >
    )
}

export default ProductBox