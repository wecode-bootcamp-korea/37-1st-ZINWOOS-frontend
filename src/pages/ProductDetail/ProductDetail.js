import React from 'react';
import PriceCalculator from './components/PriceCalculator';
import ProductImg from './components/ProductImg';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="ProductDetail">
      <div className="product-wrap">
        <div className="product">
          <article className="product-item">
            <ProductImg />
            <div className="product-item-contents">
              <h1 className="product-item-contents-title">
                진우님과의 '1시간'
              </h1>
              <p className="product-item-contents-info">
                7중 레이어 구성으로 더욱 풍성해진 코어, 쿨링 터치 기능이 있는
                퀼팅 패턴의 커버와 푹신한 솜이 구름 위에 누운듯한 사용감을 선사
              </p>
              <ul className="product-item-contents-ship">
                <li>택배배송</li>
                <li>
                  <span>3,000원</span>
                  <span>(주문시 결제)</span>
                </li>
                <li>50,000원 이상 구매시 무료 / 제주,도서지역 추가 3,000원</li>
              </ul>
              <PriceCalculator />
              <form className="product-item-contents-buttons">
                <input
                  className="payment-button"
                  type="button"
                  value="결제하기"
                />
                <input className="cart-button" type="button" value="장바구니" />
                <button className="heart-button">
                  <i className="fa-regular fa-heart" />
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
