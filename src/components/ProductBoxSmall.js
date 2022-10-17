import React from 'react'

const ProductBoxSmall = () => {
    return (
        <div className='product-box-small'>
            <div className='product-box-small-card'></div>
            <div className='product-box-small-info'>
                <p className='category-sm'>Category</p>
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
        </div>
    )
}

export default ProductBoxSmall