import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsView from './views/ContactView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import ShoppingcartView from './views/ShoppingcartView';
import WishlistView from './views/WishlistView';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/categories' element={<CategoriesView />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path='/products/:name' element={<ProductDetailsView />} />
        <Route path='/contacts' element={<ContactsView />} />
        <Route path='/search' element={<SearchView />} />
        <Route path='/compare' element={<CompareView />} />
        <Route path='/wishlist' element={<WishlistView />} />
        <Route path='/shoppingcart' element={<ShoppingcartView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
