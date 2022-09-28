import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import MainImage from './component/MainImage/MainImage';
import ProductImage from './component/Product/ProductImage';
import SubNav from '../../components/SubNav/SubNav';
import Button from './component/Button/Button';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // fetch('http://172.20.10.5:3000/posts/price?idx=2&limit=100&offset=0')
    fetch('./Mock/Mock.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="ProductList">
      <MainImage />
      <div id="tag" />
      <div className="contents">
        <div className="contents-wrapper">
          <div className="move-solt">
            <div className="product-move">
              <SubNav />
            </div>
            <div className="product-sort">
              <ul className="sort">
                <li>이름순</li>
                <li>신상품순</li>
                <li>가격순</li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="product-list">
              {product.map(e => {
                return <ProductImage product={e} key={e.items_id} />;
              })}
            </div>
          </div>
          <div className="move-btn-wrapper">
            <div className="move-btn">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
