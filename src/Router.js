import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Likes from './pages/Likes/Likes';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product_detail/:itemId" element={<ProductDetail />} />
        <Route path="/product_list/:id/:id2" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
