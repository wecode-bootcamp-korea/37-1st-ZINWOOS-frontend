// import { useEffect, useState } from 'react';
import React from 'react';
import './ProductImage.scss';

const ProductImage = () => {
  //   const [zinwoo, setZinsoo] = useState([]);

  //   useEffect(() => {
  //     fetch('api 주소')
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(data => {
  //         setZinwoo(data);
  //       });
  //   },[]);

  return (
    <div className="ProductImage">
      <div class="thumb">
        <img
          src="./images/ProductList/nikedunk.jpeg"
          alt="teamleader"
          className="model"
        />
      </div>
      <div>
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className="product-name">ZINWOOS NIKE Dunk Low Polaroid</div>
      <div className="shirts-info">
        무지개처럼 보이는 3중 레이어 스우시가 포인트 <br /> (나이키 DRAW에
        당첨된 새 상품)
      </div>
      <div className="price">150,000원</div>
      <div>
        <div className="option">HOT</div>
        <div className="option2">NEW</div>
        <div className="option3">SOLD OUT</div>
      </div>
    </div>
  );
};

export default ProductImage;
