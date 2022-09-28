import React from 'react';
import './LikeItem.scss';

const LikeItem = ({ deleteBtn, likeData }) => {
  const { item_id, name, price, detail_image } = likeData;
  const PRICE = Number(price).toLocaleString();

  return (
    <div className="LikeItem">
      <div className="img-container">
        <img src={detail_image} alt="관심상품 이미지" />
        <div
          className="like-out-btn"
          id={item_id}
          onClick={() => deleteBtn(item_id)}
        >
          x
        </div>
      </div>

      <h2 className="likes-item-name">{name}</h2>
      <p className="likes-item-price">{PRICE}원</p>
    </div>
  );
};

export default LikeItem;
