import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductList.scss';
import MainImage from './component/MainImage/MainImage';
import ProductImage from './component/Product/ProductImage';

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [nameorder, setNameOrder] = useState('ASC');
  const params = useParams();
  const mainId = params;

  useEffect(() => {
    fetch(
      `http://172.20.10.5:3000/posts/${mainId.id}?idx=${mainId.id2}&sort=items.name&order=${nameorder}&limit=100&offset=0`
    )
      .then(res => res.json())
      .then(data => {
        setProduct(data.data);
      });
  }, [mainId]);

  return (
    <div className="ProductList">
      <MainImage />
      <div id="tag" />
      <div className="contents">
        <div className="contents-wrapper">
          <div className="move-solt">
            <div className="product-move" />
            <div className="product-sort">
              <div className="sort">
                <Link to="#">이름순</Link> &nbsp;&nbsp;
                <Link to="#">신상품순</Link>
              </div>
            </div>
          </div>
          <div className="product-content">
            <div className="product-list">
              {product.map(e => {
                return <ProductImage product={e} key={e.items_id} />;
              })}
            </div>
          </div>
          <div className="move-btn-wrapper">
            <div className="move-btn">
              <div className="Button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
