import React from 'react';
import PriceCalculator from './components/PriceCalculator';
import ProductNav from './components/ProductNav';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="ProductDetail">
      <div className="product">
        <ProductNav />
        <article className="product-item">
          <div className="product-item-img-container">
            <img
              alt="운동화"
              src="https://raw.githubusercontent.com/ChoiRamsey/zinwoos/0cba83c762bdb9b0596baa6db7f069fc29b692d7/3472392085766132785_20220920151059967.jpg"
            />
          </div>
          <div className="product-item-info">
            <h1 className="product-item-info-title">진우님과의 '1시간'</h1>
            <p>
              7중 레이어 구성으로 더욱 풍성해진 코어, 쿨링 터치 기능이 있는 퀼팅
              패턴의 커버와 푹신한 솜이 구름 위에 누운듯한 사용감을 선사
            </p>
            <ul className="product-item-info-ship">
              <li>택배배송</li>
              <li>
                <span>3,000원</span>
                <span>(주문시 결제)</span>
              </li>
              <li>50,000원 이상 구매시 무료 / 제주,도서지역 추가 3,000원</li>
            </ul>
            <PriceCalculator />
            <form className="product-item-info-buttons">
              <input type="button" value="결제하기" />
              <input type="button" value="장바구니" />
              <button className="heart-button">
                <i className="fa-regular fa-heart" />
              </button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetail;
