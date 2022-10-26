import React from 'react'
import MainButton from './MainButton'

const ProductBox = (item) => {

    const addToWishlist = (e) => {
        console.log(`${e} added to wish list`)
    }

    const addToCompare = (e) => {
        console.log("added to compare")
    }

    const addToCart = (e) => {
        console.log("added to shopping cart")
    }

    return (
        <div className="product-box">
            <div className="product-card">
                <img src={item.img} alt={item.name} />
                <div className="card-menu">
                    <button onClick={addToWishlist} className='nav-icon'><i className="fa-light fa-heart"></i></button>
                    <button onClick={addToCompare} className='nav-icon'><i className="fa-light fa-code-compare"></i></button>
                    <button onClick={addToCart} className='nav-icon'><i className="fa-light fa-bag-shopping"></i></button>
                </div>

                <div className='quick-view'>
                    <MainButton link={`/products/${item.id}`} text="QUICK VIEW" />
                </div>

            </div>

            <div className="product-info">
                <p className="category">{item.category}</p>
                <h4>{item.name}</h4>
                <ul>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                </ul>
                <p className="price">{item.price}</p>
            </div>

        </div >
    )
}

export default ProductBox