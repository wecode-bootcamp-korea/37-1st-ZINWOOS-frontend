import React from 'react';
import './ProductImage.scss';

const ProductImage = props => {
  console.log(props.name);
  const { detail, detail_image, name, price, tags_name } = props;
  return (
    <div className="ProductImage">
      <div className="thumb">
        <img src={detail_image} alt={name} className="model" />
      </div>
      <div className="product-name">{name}</div>
      <div className="shirts-info"> {detail}</div>
      <div className="price">{price}</div>
      <div>
        <div className="option">{tags_name[0]}</div>
        <div className="option2">{tags_name[1]}</div>
      </div>
    </div>
  );
};

export default ProductImage;
