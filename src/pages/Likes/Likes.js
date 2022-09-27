import React, { useEffect, useState } from 'react';
import LikeItem from './components/LikeItem';
import LikeNull from './components/LikeNull';
import './Likes.scss';

const Likes = () => {
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    fetch('http://172.20.10.3:3000/likes/', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjU5MTI2LCJleHAiOjE2NjUwMzY3MjZ9.nzeCZZfKgrppkCSwhrG-ASA2Mat800uRlWjIYYmGz2c',
      },
    })
      .then(res => res.json())
      .then(result => setLikeList(result.data));
  }, []);

  const deleteBtn = e => {
    console.log(e.target.id);

    // let clickId = e.target.id;
    // fetch(`http://172.20.10.3:3000/likes/${clickId}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     Authorization:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjU3ODIzLCJleHAiOjE2NjUwMzU0MjN9.6fw1xbUgtID8JMtzDYlYN1AgqKkADMIsep3zwNKPrXw',
    //   },
    //   body: JSON.stringify({
    //     itemId: clickId,
    //   }),
    // })
    // .then(
    //   fetch('http://172.20.10.3:3000/likes/', {
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     Authorization:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjU3ODIzLCJleHAiOjE2NjUwMzU0MjN9.6fw1xbUgtID8JMtzDYlYN1AgqKkADMIsep3zwNKPrXw',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(result => console.log(result.data));
    // )
  };

  // let copy = [...likeList];
  // let copy2 = copy.filter(item => item.id !== parseInt(e.target.id));
  // setLikeList(copy2);

  // setLikeList(
  //   likeList.filter(item => item.id !== parseInt(e.target.id))
  // );

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
                id={product.item_id}
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
