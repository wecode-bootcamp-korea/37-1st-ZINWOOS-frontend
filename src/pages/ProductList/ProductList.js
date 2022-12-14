import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductList.scss';
import MainImage from './component/MainImage/MainImage';
import ProductImage from './component/Product/ProductImage';

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState(true);
  const [sort, setSort] = useState('items_name');
  const params = useParams();
  const mainId = params;

  useEffect(() => {
    if (Number(mainId.id2) !== 0) {
      fetch(
        `http://172.20.10.3:3000/items/${mainId.id}?${
          mainId.id2
        }&sort=${sort}&order=${order ? 'ASC' : 'DESC'}&limit=100&offset=0`
      )
        .then(res => res.json())
        .then(data => {
          setProduct(data.data);
        });
    } else {
      fetch(
        `http://172.20.10.3:3000/items/${mainId.id}?sort=${sort}&order=${
          order ? 'ASC' : 'DESC'
        }&limit=100&offset=0`
      )
        .then(res => res.json())
        .then(data => {
          setProduct(data.data);
        });
    }
  }, [mainId, order, sort]);

  const nameSortHandler = () => {
    setSort('items_name');
    setOrder(!order);
  };

  const priceSortHandler = () => {
    setSort('price');
    setOrder(!order);
  };

  const likesSortHandler = () => {
    setSort('likes');
    setOrder(!order);
  };

  const isData = product.length !== 0;

  if (!isData) return <>loading...</>;

  return (
    <div className="ProductList">
      <MainImage
        mainTitle={product[0].main_cate_name}
        mainText={product[0].main_description}
      />
      <div id="tag" />
      <div className="contents">
        <div className="contents-wrapper">
          <div className="move-solt">
            <div className="product-move" />
            <div className="product-sort">
              <div className="sort">
                <button className="sort-btn" onClick={nameSortHandler}>
                  이름순
                </button>
                &nbsp;&nbsp;
                <button className="sort-btn" onClick={priceSortHandler}>
                  가격순
                </button>
                &nbsp;&nbsp;
                <button className="sort-btn" onClick={likesSortHandler}>
                  인기순
                </button>
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
