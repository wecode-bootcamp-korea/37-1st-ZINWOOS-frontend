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
  max_amount,
}) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (price * 1 + optionPrice * 1) * quantity;
  const [wishList, setWishList] = useState(false);

  const addCartHandler = () => {
    fetch('http://172.20.10.5:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
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
    setWishList(!wishList);
    fetch('http://172.20.10.3:3000/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
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

  const minusQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const plusQuantity = () => {
    setQuantity(quantity < max_amount ? quantity + 1 : quantity);
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
        <button className="quantity-button" onClick={minusQuantity}>
          <i className="fa-solid fa-minus" />
        </button>
        <input className="quantity-input" value={quantity} type="number" />
        <button className="quantity-button" onClick={plusQuantity}>
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
        <button
          disabled={wishList}
          onClick={addWishList}
          className="heart-button"
        >
          <i
            className={!wishList ? 'fa-regular fa-heart' : 'fa-solid fa-heart'}
          />
        </button>
      </form>
    </div>
  );
};
export default PriceCalculator;
