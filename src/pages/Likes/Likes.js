import React, { useEffect, useState } from 'react';
import LikeItem from './components/LikeItem';
import LikeNull from './components/LikeNull';
import './Likes.scss';

const Likes = () => {
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    fetch('/data/likeData.json')
      .then(res => res.json())
      .then(result => setLikeList(result.data));
  }, []);

  const deleteBtn = e => {
    let copy = [...likeList];
    let copy2 = copy.filter(item => item.id !== parseInt(e.target.id));
    setLikeList(copy2);
  };

  return (
    <div className="Likes">
      <div className="title-container">
        <h1 className="likes-title">관심상품</h1>
        <p className="count-likes">나의 관심상품 {likeList.length}</p>
      </div>

      <div className="like-line" />
      <div className="likes-item-container">
        {likeList.length === 0 ? (
          <LikeNull />
        ) : (
          likeList.map(product => {
            return (
              <LikeItem
                key={product.id}
                id={product.id}
                likeData={product}
                deleteBtn={deleteBtn}
              />
            );
          })
        )}
      </div>
      <div className="like-line" />
    </div>
  );
};

export default Likes;
