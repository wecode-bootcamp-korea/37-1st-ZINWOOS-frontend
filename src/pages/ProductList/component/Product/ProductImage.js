import React from 'react';
import { Link } from 'react-router-dom';
import './ProductImage.scss';

const ProductImage = ({ product }) => {
  const { description, detail_image, items_name, price, tags_name, items_id } =
    product;

  const value = parseInt(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="ProductImage">
      <div className="thumb">
        <Link key={items_name} to={`/product_detail/${items_id}}`}>
          <img src={detail_image} alt={items_name} className="model" />
        </Link>
      </div>
      <div className="product-name">{items_name}</div>
      <div className="shirts-info"> {description}</div>
      <div className="price">{value}원</div>
      <div>
        <div className="option">{tags_name}</div>
      </div>
    </div>
  );
};

export default ProductImage;
