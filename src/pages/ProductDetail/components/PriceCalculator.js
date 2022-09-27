import React from 'react';
import { useState } from 'react';
import './PriceCalculator.scss';

const PriceCalculator = ({ price, option_price, productId }) => {
  const PRICE = Number(price);
  const OPTION_PRICE = Number(option_price);
  const [optionPrice, setOptionPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const totalPrice = (PRICE + optionPrice) * amount;
  const [optionId, setOptionId] = useState(null);
  const PRODUCT_ID = Number(productId);
  const [heartColor, setHeartColor] = useState(true);

  const amountHandler = e => {
    e.currentTarget.name === 'minus'
      ? setAmount(amount > 1 ? amount - 1 : 1)
      : setAmount(amount < 5 ? amount + 1 : amount);
  };

  const optionHandler = e => {
    e.target.value === '1' ? setOptionPrice(OPTION_PRICE) : setOptionPrice(0);
    e.target.value === '1'
      ? setOptionId(Number(e.target.value))
      : setOptionId(null);
  };

  const addCartHandler = () => {
    fetch('http://172.20.10.6:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY0MTc5Mzg2LCJleHAiOjE2NjQ5NTY5ODZ9.C8WWs5-EhQTk7Dx1IIt_152J5IDTmCrZ8dvJdlcCsJk',
      },
      body: JSON.stringify({
        itemId: PRODUCT_ID,
        optionId: optionId,
        quantity: amount,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Item added successfully') {
          alert('장바구니에 상품이 담겼습니다!');
        }
      });
  };

  const addWishList = e => {
    e.preventDefault();
    setHeartColor(!heartColor);
    if (heartColor === true) {
      fetch('http://172.20.10.3:3000/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjU5MTI2LCJleHAiOjE2NjUwMzY3MjZ9.nzeCZZfKgrppkCSwhrG-ASA2Mat800uRlWjIYYmGz2c',
        },
        body: JSON.stringify({
          itemId: PRODUCT_ID,
        }),
      })
        .then(response => response.json())
        .then(result => console.log(result));
    } else {
      fetch('http://172.20.10.3:3000/likes', {
        method: 'DELETE',
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjU5MTI2LCJleHAiOjE2NjUwMzY3MjZ9.nzeCZZfKgrppkCSwhrG-ASA2Mat800uRlWjIYYmGz2c',
        },
        body: JSON.stringify({
          itemId: PRODUCT_ID,
        }),
      })
        .then(response => response.json())
        .then(result => console.log(result));
    }
  };

  return (
    <div className="PriceCalculator">
      <div className="product-item-contents-option">
        <h2 className="product-item-contents-option-title">추가상품</h2>
        <select className="option-selector" onChange={optionHandler}>
          <option value="null">친필사인 추가</option>
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
      <form className="product-item-contents-buttons">
        <input className="payment-button" type="button" value="결제하기" />
        <input
          className="cart-button"
          type="button"
          value="장바구니"
          onClick={addCartHandler}
        />
        <button onClick={addWishList} className="heart-button">
          <i
            className={heartColor ? 'fa-regular fa-heart' : 'fa-solid fa-heart'}
          />
        </button>
      </form>
    </div>
  );
};

export default PriceCalculator;
