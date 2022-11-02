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



function App() {

  const [products, setProducts] = useState({
    featuredProducts: [],
    allProducts: []
  })

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({ ...products, featuredProducts: await result.json() })
    }
    fetchFeaturedProducts()
  }, [setProducts])

  return (
    <BrowserRouter>
      <productContext.Provider value={products}>
        <Routes>
          <Route path='/' element={<HomeView products={products.featuredProducts} />} />
          <Route path='/categories' element={<CategoriesView />} />
          <Route path='/products' element={<ProductsView />} />
          <Route path='/products/:articleNumber' element={<ProductDetailsView products={products.featuredProducts} />} />
          <Route path='/contacts' element={<ContactsView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
