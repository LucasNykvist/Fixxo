import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsView from './views/ContactView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import { productContext } from './contexts/contexts';
import { useEffect, useState } from 'react';

// MÅL - FIXA DETAILED VIEW
//     - Alla produkter på /products **KLAR**
//     - 4 produkter i flash sales



function App() {

  const [products, setProducts] = useState({
    featuredProducts: [],
    allProducts: [],
    saleProducts: []
  })

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({ ...products, featuredProducts: await result.json() })
    }
    fetchFeaturedProducts()

    const fetchFlashSaleProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({ ...products, saleProducts: await result.json() })
    }
    fetchFlashSaleProducts()

    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({ ...products, allProducts: await result.json() })
    }
    fetchAllProducts()

  }, [setProducts])

  return (
    <BrowserRouter>
      <productContext.Provider value={products}>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/categories' element={<CategoriesView />} />
          <Route path='/products' element={<ProductsView products={products.allProducts} />} />
          <Route path='/products/:articleNumber' element={<ProductDetailsView products={products.allProducts} />} />
          <Route path='/contacts' element={<ContactsView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
