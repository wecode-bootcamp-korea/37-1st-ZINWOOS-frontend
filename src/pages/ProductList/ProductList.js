import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import MainImage from './component/MainImage/MainImage';
import ProductImage from './component/Product/ProductImage';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // fetch('http://172.20.10.5:3000/posts/price?idx=2&limit=100&offset=0')
    fetch('./Mock/Mock.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <div className="ProductList">
      <MainImage />
      <div className="contents">
        <div className="contents-wrapper">
          <div className="move-solt">
            <div className="product-move" />
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
                return (
                  <ProductImage
                    name={e.items_name}
                    detail_image={e.detail_image}
                    detail={e.detail}
                    price={e.price}
                    tags_name={e.tags_name}
                    key={e.price}
                  />
                );
              })}
            </div>
          </div>
          <div className="move-btn-wrapper">
            <div className="move-btn">
              <div>페이지</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
