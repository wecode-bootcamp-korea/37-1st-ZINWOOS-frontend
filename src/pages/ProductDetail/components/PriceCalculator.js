import React from 'react';
import { useState } from 'react';
import './PriceCalculator.scss';

const PriceCalculator = ({ price, option_price }) => {
  const PRICE = Number(price);
  const OPTION_PRICE = Number(option_price);
  const [optionPrice, setOptionPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const totalPrice = (PRICE + optionPrice) * amount;

  const amountHandler = e => {
    e.currentTarget.name === 'minus'
      ? setAmount(amount > 1 ? amount - 1 : 1)
      : setAmount(amount < 5 ? amount + 1 : amount);
  };

  const optionHandler = e => {
    e.target.value === '1' ? setOptionPrice(OPTION_PRICE) : setOptionPrice(0);
  };

  return (
    <div className="PriceCalculator">
      <div className="product-item-contents-option">
        <h2 className="product-item-contents-option-title">추가상품</h2>
        <select className="option-selector" onChange={optionHandler}>
          <option value="0">친필사인 추가</option>
          <option value="1">친필사인 추가(+30,000원)</option>
        </select>
      </div>
      <div className="amount">
        <button className="amount-button" name="minus" onClick={amountHandler}>
          <i className="fa-solid fa-minus" />
        </button>
        <input className="amount-input" value={amount} type="number" />
        <button className="amount-button" name="plus" onClick={amountHandler}>
          <i className="fa-solid fa-plus" />
        </button>
      </div>
      <div className="product-item-contents-price">
        <h2 className="product-item-contents-option-title">총 상품금액</h2>
        <div className="total-price">{`${totalPrice.toLocaleString()} 원`}</div>
      </div>
    </div>
  );
};

export default PriceCalculator;
