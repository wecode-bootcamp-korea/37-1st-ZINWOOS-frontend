import React, { useState } from 'react';
import './ProductList.scss';
import MainImage from './component/MainImage/MainImage';
import ProductImage from './component/Product/ProductImage';

const ProductList = () => {
  return (
    <div className="ProductList">
      <MainImage />
      <div className="contents" id="tag1">
        <div className="contents-wrapper">
          <div className="move-solt">
            <div className="product-move">
              <ul>
                {/* <li>1</li>
                <li>2</li>
                <li>3</li> */}
              </ul>
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
              <ProductImage />
            </div>
          </div>
          <div className="move-btn-wrapper">
            <div className="move-btn">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
