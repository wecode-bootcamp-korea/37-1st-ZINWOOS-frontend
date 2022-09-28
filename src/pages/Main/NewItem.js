import React from 'react';
import './NewItem.scss';

const NewItem = ({ itemData }) => {
  // console.log(itemData);
  return (
    <section className="NewItem">
      <h1 className="New-sub-title">ZINWOOS New Product</h1>
      <h2 className="New-sub-content">진우스가 추천하는 새로운 상품!</h2>

      <div className="New-product-wrap">
        {itemData.map(item => {
          return (
            <div key={item.id} className="New-product">
              <div className="New-product-image">
                <img
                  className="product-image"
                  src={item.image_URL}
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
