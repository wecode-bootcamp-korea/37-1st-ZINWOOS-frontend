import React from 'react';
import './AmountHandler.scss';

const AmountHandler = ({ amount, setAmount }) => {
  const amountHandler = e => {
    e.preventDefault();
    e.currentTarget.name === 'minus'
      ? setAmount(amount > 1 ? amount - 1 : 1)
      : setAmount(amount < 5 ? amount + 1 : amount);
  };
  return (
    <div>
      <form className="product-item-info-amount">
        <button name="minus" onClick={amountHandler}>
          <i className="fa-solid fa-minus" />
        </button>
        <input value={amount} type="number" />
        <button name="plus" onClick={amountHandler}>
          <i className="fa-solid fa-plus" />
        </button>
      </form>
    </div>
  );
};

export default AmountHandler;
