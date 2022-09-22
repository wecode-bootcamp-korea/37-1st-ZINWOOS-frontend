import React from 'react';
import './NewItem.scss';

const NewItem = () => {
  return (
    <section className="NewItem">
      <h1 className="New-sub-title">ZINWOOS New Product</h1>
      <h2 className="New-sub-content">진우스가 추천하는 새로운 상품!</h2>

      <div className="New-product-wrap">
        {MAIN_NEW_ITEM.map(item => {
          return (
            <div key={item.id} className="New-product">
              <div className="New-product-image">
                <img
                  className="product-image"
                  src="/images/Main/ZINWOOS BEST SHOUSE.png"
                  alt={item.description}
                />
              </div>
              <h2 className="New-product-title">{item.name}</h2>
              <p className="New-product-content">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewItem;

const MAIN_NEW_ITEM = [
  {
    id: 1,
    name: '스티커1',
    description: '진우님 파이팅 힘내요!',
    price: 5000,
  },
  {
    id: 2,
    name: '스티커2',
    description: '진우님 파이팅 힘내요!',
    price: 5000,
  },
  {
    id: 3,
    name: '스티커3',
    description: '진우님 파이팅 힘내요!',
    price: 5000,
  },
  {
    id: 4,
    name: '포토카드1',
    description: '지갑에 넣고 다니세요!',
    price: 10000,
  },
  {
    id: 5,
    name: '포토카드2',
    description: '지갑에 넣고 다니세요!',
    price: 10000,
  },
  {
    id: 6,
    name: '포토카드3',
    description: '지갑에 넣고 다니세요!',
    price: 10000,
  },
];
