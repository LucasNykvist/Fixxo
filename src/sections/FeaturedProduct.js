import { useContext } from 'react'
import ProductBox from '../components/ProductBox'
import { productContext } from '../contexts/contexts'
import ProductsView from '../views/ProductsView'

const FeaturedProduct = ({ title, products }) => {


    return (
        <div className='featured-product'>
            <div className='container'>
                <div className='product-header'>
                    <h1>{title}</h1>
                </div>


                <div className='product-boxes'>
                    {
                        products.map((products, index) => <ProductBox key={index} product={products} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct