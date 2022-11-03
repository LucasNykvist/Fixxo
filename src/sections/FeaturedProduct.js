import ProductBox from '../components/ProductBox'


const FeaturedProduct = ({ title, products }) => {


    return (
        <div className='featured-product'>
            <div className='container'>
                <div className='product-header'>
                    <h1>{title}</h1>
                </div>


                <div className='product-boxes'>
                    {
                        products.filter((products, index) => index < 8).map((products, index) => <ProductBox key={index} product={products} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct