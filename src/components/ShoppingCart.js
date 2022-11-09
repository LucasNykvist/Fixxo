import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ShoppingCart = () => {

    const { cartItems } = useShoppingCart()

    return (
        <div className="shoppingcart offcanvas offcanvas-end" tabindex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
            <div className="offcanvas-header">
                <h4 className="offcanvas-title" id="shoppingCartLabel"><i className='fa-light fa-bag-shopping me-3'></i>Your Shopping Cart</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {
                    cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
                }
            </div>
        </div>
    )
}

export default ShoppingCart