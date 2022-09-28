import React, { useEffect, useState } from 'react';
import LikeItem from './components/LikeItem';
import LikeNull from './components/LikeNull';
import './Likes.scss';

const Likes = () => {
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    fetch('/data/likeData.json', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
      },
    })
      .then(res => res.json())
      .then(result => setLikeList(result.data));
  }, []);

  // 삭제 버튼
  const deleteBtn = async id => {
    const response = await fetch(`http://172.20.10.5:3000/likes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
      },
    });

    if (response.status === 204) {
      alert('관심상품에서 삭제했습니다');
      fetch(`http://172.20.10.5:3000/likes/`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
        },
      })
        .then(res => res.json())
        .then(result => setLikeList(result.data));
    }
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
                key={product.item_id}
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
