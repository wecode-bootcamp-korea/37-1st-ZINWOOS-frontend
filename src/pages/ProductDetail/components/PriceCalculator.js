import React from 'react';
import { useState } from 'react';
import './PriceCalculator.scss';

const PriceCalculator = () => {
  const [signPrice, setSignPrice] = useState(0);
  const [timePrice, setTimePrice] = useState(0);
  const price = 20;
  const [amount, setAmount] = useState(1);

  const amountHandler = e => {
    e.preventDefault();
    e.currentTarget.name === 'minus'
      ? setAmount(amount > 1 ? amount - 1 : 1)
      : setAmount(amount < 10 ? amount + 1 : amount);
  };

  const addSignHandler = e => {
    e.target.value === '1' ? setSignPrice(30) : setSignPrice(0);
  };

  const addTimeHandler = e => {
    if (e.target.value === '0') {
      setTimePrice(0);
    } else if (e.target.value === '1') {
      setTimePrice(10);
    } else if (e.target.value === '2') {
      setTimePrice(20);
    } else if (e.target.value === '3') {
      setTimePrice(30);
    } else if (e.target.value === '4') {
      setTimePrice(40);
    } else if (e.target.value === '5') {
      setTimePrice(50);
    }
  };

  return (
    <div>
      <div className="product-item-info-option">
        <h2>추가상품</h2>
        <select onChange={addSignHandler}>
          <option value="0">친필사인 추가</option>
          <option value="1">친필사인 추가(+30,000원)</option>
        </select>
        <select onChange={addTimeHandler}>
          <option value="0">시간 추가</option>
          <option value="1">1시간(+10,000원)</option>
          <option value="2">2시간(+20,000원)</option>
          <option value="3">3시간(+30,000원)</option>
          <option value="4">4시간(+40,000원)</option>
          <option value="5">5시간(+50,000원)</option>
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
        <div>{`${price + signPrice + timePrice},000원`}</div>
      </div>
    </div>
  );
};

export default PriceCalculator;
