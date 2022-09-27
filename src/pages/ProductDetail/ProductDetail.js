import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PriceCalculator from './components/PriceCalculator';
import ProductImg from './components/ProductImg';
import './ProductDetail.scss';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.itemId;
  const [product, setProduct] = useState({});
  const { name, description, price, image_url, option_price } = product;

  useEffect(() => {
    fetch('/data/item.json')
      .then(response => response.json())
      .then(result => {
        setProduct(result.data[0]);
      });
  }, [productId]);

  // `http://172.20.10.3:3000/items/${productId}`;
  return (
    <div className="ProductDetail">
      <div className="product-wrap">
        <div className="product">
          <article className="product-item">
            {Object.keys(product).length !== 0 && (
              <ProductImg img={image_url} alt={name} />
            )}
            <div className="product-item-contents">
              <h1 className="product-item-contents-title">{name}</h1>
              <p className="product-item-contents-info">{description}</p>
              <ul className="product-item-contents-ship">
                <li>택배배송</li>
                <li>
                  <span>3,000원</span>
                  <span>(주문시 결제)</span>9
                </li>
                <li>100,000원 이상 구매시 무료 / 제주,도서지역 추가 3,000원</li>
              </ul>
              <PriceCalculator
                price={price}
                option_price={option_price}
                productId={productId}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
