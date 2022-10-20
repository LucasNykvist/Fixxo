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
                        products.map(product => <ProductBox key={product.id} name={product.name} category={product.category} price={product.price} img={product.img} id={product.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct