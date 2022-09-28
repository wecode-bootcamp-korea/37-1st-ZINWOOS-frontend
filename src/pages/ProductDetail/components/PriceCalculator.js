import React from 'react';
import { useState } from 'react';
import './PriceCalculator.scss';

const PriceCalculator = ({
  optionId,
  productId,
  option_name,
  optionHandler,
  optionPrice,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (price * 1 + optionPrice * 1) * quantity;
  const [heartColor, setHeartColor] = useState('fa-regular fa-heart');

  const minusQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const plusQuantity = () => {
    setQuantity(quantity < 5 ? quantity + 1 : quantity);
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
        itemId: productId,
        optionId: optionId,
        quantity: quantity,
      }),
    }).then(result => {
      if (result.status === 201) {
        alert('장바구니에 상품이 담겼습니다!');
      }
    });
  };

  const addWishList = e => {
    e.preventDefault();
    setHeartColor('fa-solid fa-heart');
    fetch('http://172.20.10.3:3000/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjU5MTI2LCJleHAiOjE2NjUwMzY3MjZ9.nzeCZZfKgrppkCSwhrG-ASA2Mat800uRlWjIYYmGz2c',
      },
      body: JSON.stringify({
        itemId: productId,
      }),
    }).then(response => {
      if (response.status === 201) {
        alert('위시리스트에 추가되었습니다!');
      }
    });
  };

  return (
    <div className="PriceCalculator">
      <div className="product-item-contents-option">
        <h2 className="product-item-contents-option-title">추가상품</h2>
        <select className="option-selector" onChange={optionHandler}>
          <option value="">{option_name}</option>
          <option value="1">{option_name}(+30,000원)</option>
        </select>
      </div>
      <div className="quantity">
        <button
          className="quantity-button"
          name="minus"
          onClick={minusQuantity}
        >
          <i className="fa-solid fa-minus" />
        </button>
        <input className="quantity-input" value={quantity} type="number" />
        <button className="quantity-button" name="plus" onClick={plusQuantity}>
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
          <i className={heartColor} />
        </button>
      </form>
    </div>
  );
};
export default PriceCalculator;
