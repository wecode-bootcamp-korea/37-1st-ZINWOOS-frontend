import React, { useEffect, useState } from 'react';
import LikeItem from './components/LikeItem';
import LikeNull from './components/LikeNull';
import './Likes.scss';

const Likes = () => {
  const [likeList, setLikeList] = useState([]);

  // http://172.20.10.3:3000/likes/\

  useEffect(() => {
    fetch('http://172.20.10.5:3000/likes', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
      },
    })
      .then(res => res.json())
      .then(result => setLikeList(result.data));
  }, []);

  // async function delLikeItem(id) {
  //   const response = await fetch(`http://172.20.10.5:3000/likes/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
  //     },
  //   });

  //   const result = await response.json();
  //   console.log(result);
  // }

  const deleteBtn = async id => {
    console.log(id);
    const response = await fetch(`http://172.20.10.5:3000/likes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
      },
    });
    // const data = response.json();

    console.log(response.status);
    if (response.status === 204) {
      alert('삭제 굳');
      fetch(`http://172.20.10.5:3000/likes/`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
        },
      })
        .then(res => res.json())
        .then(result => setLikeList(result.data));
    }

    // .then(res => {
    //   if (res.message === 'ITEM_DISLIKED') {
    //     alert('삭제되었습니다.');
    //     fetch(`http://172.20.10.5:3000/likes/`, {
    //       headers: {
    //         Authorization:
    //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0MjcyNjY0LCJleHAiOjE2NjUwNTAyNjR9.Z8MgO6TAj5_DekBvSv8Fz7vWN3qYU0qNZRerBRVPq2U',
    //       },
    //     })
    //       .then(res => res.json())
    //       .then(data => setLikeList(data));
    //   }
    // });
  };

  // let copy = [...likeList];
  // let copy2 = copy.filter(item => item.id !== parseInt(e.target.id));
  // setLikeList(copy2);

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
