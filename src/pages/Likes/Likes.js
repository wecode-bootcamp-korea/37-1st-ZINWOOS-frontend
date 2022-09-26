import React from 'react';
import './Likes.scss';

const Likes = () => {
  // const mouseOverImg = e => {
  //   console.log(e.currentTarget.getAttribute('name'));
  // };

  return (
    <div className="Likes">
      <div className="title-container">
        <h1 className="likes-title">관심상품</h1>
        <p className="count-likes">나의 관심상품 93</p>
      </div>

      <div className="likes-item-container">
        {LIKE_DATA.map(likeItem => {
          const { id, name, price, detail_image } = likeItem;
          const PRICE = Number(price);
          return (
            <div
              key={id}
              name={name}
              className="likes-item"
              // onMouseOver={mouseOverImg}
            >
              <div className="img-container">
                <img src={detail_image} alt="관심상품 이미지" />

                <div className="like-out-btn">x</div>
              </div>

              <h2 className="likes-item-name">{name}</h2>
              <p className="likes-item-price">{PRICE.toLocaleString()}원</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Likes;

const LIKE_DATA = [
  {
    id: 1,
    name: 'NikeDunkLowPolaroid',
    price: '150000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/main)nikedunk1.png?raw=true ',
    quantity: 1,
    checkbox: 1,
  },
  {
    id: 2,
    name: 'NIKEwindbreaker',
    price: '99000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/main)windbreaker1.png?raw=true',
    quantity: 6,
    checkbox: 1,
  },
  {
    id: 3,
    name: 'GarminForerunner245',
    price: '199000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/main)garminwatch1.png?raw=true',
    quantity: 1,
    checkbox: 1,
  },
  {
    id: 4,
    name: 'Gram',
    price: '150000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/sub)gram3.png?raw=true ',
    quantity: 1,
    checkbox: 1,
  },
  {
    id: 5,
    name: 'NikeDunkLowPolaroid',
    price: '150000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/main)nikedunk1.png?raw=true ',
    quantity: 1,
    checkbox: 1,
  },
  {
    id: 6,
    name: 'NIKEwindbreaker',
    price: '99000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/main)windbreaker1.png?raw=true',
    quantity: 6,
    checkbox: 1,
  },
  {
    id: 7,
    name: 'GarminForerunner245',
    price: '199000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/main)garminwatch1.png?raw=true',
    quantity: 1,
    checkbox: 1,
  },
  {
    id: 8,
    name: 'Gram',
    price: '150000.0',
    detail_image:
      'https://github.com/ChoiRamsey/zinwoos/blob/main/MODIFY-ZINWOOS-PHOTO/sub)gram3.png?raw=true ',
    quantity: 1,
    checkbox: 1,
  },
];
