import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsView from './views/ContactView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView'
import CompareView from './views/CompareView'
import { productContext } from './contexts/contexts';
import { useEffect, useState } from 'react';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

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
            <Route path='/products/:articleNumber' element={<ProductDetailsView products={products.allProducts} />} />
            <Route path='/contacts' element={<ContactsView />} />
            <Route path='/search' element={<SearchView />} />
            <Route path='/compare' element={<CompareView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </productContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
