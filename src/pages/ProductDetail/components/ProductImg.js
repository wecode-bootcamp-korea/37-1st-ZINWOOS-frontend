import React from 'react';
import { useState } from 'react';
import './ProductImg.scss';

const ProductImg = () => {
  const [mainImg, setMainImg] = useState(
    'https://raw.githubusercontent.com/ChoiRamsey/zinwoos/0cba83c762bdb9b0596baa6db7f069fc29b692d7/3472392085766132785_20220920151059967.jpg'
  );
  const MainImgHandler = e => setMainImg(e.target.src);

  return (
    <div className="ProductImg">
      <div className="product-img-container">
        <img className="product-img" alt="진우님의 시간" src={mainImg} />
      </div>
      <div className="product-sub-img-container">
        <div onMouseEnter={MainImgHandler} className="sub-img-wrap">
          <img
            className="product-sub-img"
            alt="진우님의 시간"
            src="https://raw.githubusercontent.com/ChoiRamsey/zinwoos/0cba83c762bdb9b0596baa6db7f069fc29b692d7/3472392085766132785_20220920151059967.jpg"
          />
        </div>
        <div onMouseEnter={MainImgHandler} className="sub-img-wrap">
          <img
            className="product-sub-img"
            alt="진우님의 시간"
            src="https://github.com/ChoiRamsey/zinwoos/blob/main/IMG_5588.jpg?raw=true"
          />
        </div>
        <div onMouseEnter={MainImgHandler} className="sub-img-wrap">
          <img
            className="product-sub-img"
            alt="진우님의 시간"
            src="https://github.com/ChoiRamsey/zinwoos/blob/main/IMG_5104.jpg?raw=true"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImg;
