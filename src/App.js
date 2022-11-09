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
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

// MÅL - FIXA DETAILED VIEW **Produktinfo går in!**

function App() {
  const [products, setProducts] = useState({
    featuredProducts: [],
    allProducts: [],
    saleProducts: []
  })

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({ ...products, allProducts: await result.json() })
    }
    fetchAllProducts()

  }, [])

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <productContext.Provider value={products}>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/categories' element={<CategoriesView />} />
            <Route path='/products' element={<ProductsView products={products.allProducts} />} />
            <Route path='/products/:articleNumber' element={<ProductDetailsView />} />
            <Route path='/contacts' element={<ContactsView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </productContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
