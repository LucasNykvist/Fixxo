import React from 'react'
import Button from './Buttons/Button'
import NavIcon from './Icons/NavIcon'
import MainButton from './MainButton'

const ProductBox = () => {
    return (
        <div className="product-box">
            <div className="product-card">
                <div className="card-menu">
                    <NavIcon icon="fa-light fa-heart position-relative" link="/wishlist" />
                    <NavIcon icon="fa-light fa-code-compare position-relative" link="/compare" />
                    <NavIcon icon="fa-light fa-bag-shopping position-relative" link="/shoppingcart" />
                </div>

                <div className='quick-view'>
                    <MainButton link="/search" text="QUICK VIEW" />
                </div>

            </div>

            <div className="product-info">
                <p className="category">Category</p>
                <h4>Modern Black Blouse</h4>
                <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
                <p class="price">$35.00</p>
            </div>

        </div >
    )
}

export default ProductBox