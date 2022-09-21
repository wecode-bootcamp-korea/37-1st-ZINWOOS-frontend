import React from 'react';
import { useState } from 'react';
import './PriceCalculator.scss';

const PriceCalculator = () => {
  const [signPrice, setSignPrice] = useState(0);
  const price = 20;
  const [amount, setAmount] = useState(1);

  const amountHandler = e => {
    e.preventDefault();
    e.currentTarget.name === 'minus'
      ? setAmount(amount > 1 ? amount - 1 : 1)
      : setAmount(amount < 5 ? amount + 1 : amount);
  };

  const addSignHandler = e => {
    e.target.value === '1' ? setSignPrice(30) : setSignPrice(0);
  };

  return (
    <div className="PriceCalculator">
      <div className="product-item-info-option">
        <h2>추가상품</h2>
        <select onChange={addSignHandler}>
          <option value="0">친필사인 추가</option>
          <option value="1">친필사인 추가(+30,000원)</option>
        </select>
      </div>
      <form className="product-item-info-amount">
        <button name="minus" onClick={amountHandler}>
          <i className="fa-solid fa-minus" />
        </button>
        <input value={amount} type="number" />
        <button name="plus" onClick={amountHandler}>
          <i className="fa-solid fa-plus" />
        </button>
      </form>
      <div className="product-item-info-price">
        <h2>총 상품금액</h2>

        <div>{`${price * amount + signPrice},000원`}</div>
      </div>
    </div>
  );
};

export default PriceCalculator;
