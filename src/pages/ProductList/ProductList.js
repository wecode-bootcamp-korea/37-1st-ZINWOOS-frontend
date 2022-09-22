import React, { useState, Link } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [headername, setHN] = useState(['Items', 'Goods', 'Time']);
  const [secondheader, setSH] = useState([
    '진우님의 체취가 가득한',
    '보고싶을 때마다 볼 수 있는',
    '진우님과의 오붓한 시간',
  ]);

  return (
    <div className="ProductList">
      <div className="main-image-tag">
        <img
          src="./images/ProductList/zinwoosmain.jpg"
          alt="team-master"
          className="main-image"
        />
        <div className="main-header">
          <div>
            <p className="header-name">{headername[0]}</p>
          </div>
          <div className="second-header">{secondheader[0]}</div>
          <div>
            <a href="#tag1" className="product-move">
              제품 바로보기
            </a>
          </div>
        </div>
      </div>

      <div className="contents" id="tag1">
        <div className="contents-wrapper">
          <div className="move-solt">
            <div className="product-move">
              Home /
              <select>
                <option value="item">Item</option>
                <option value="goods">Goods</option>
                <option value="time">Time</option>
              </select>
            </div>
            <div className="product-sort">
              <ul className="sort">
                <li>이름순</li>
                <li>신상품순</li>
                <li>가격순</li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="product-list">
              <div className="product-image">
                <div class="thumb">
                  <img
                    src="./images/ProductList/nikedunk.jpeg"
                    alt="teamleader"
                    className="model"
                  />
                </div>
                <div className="product-name">
                  ZINWOOS NIKE Dunk Low Polaroid
                </div>
                <div className="shirts-info">
                  무지개처럼 보이는 3중 레이어 스우시가 포인트 <br /> (나이키
                  DRAW에 당첨된 새 상품)
                </div>
                <div className="price">150,000원</div>
                <div>
                  <div className="option">HOT</div>
                  <div className="option2">NEW</div>
                  <div className="option3">SOLD OUT</div>
                  <div></div>
                </div>
              </div>
              <div className="product-image">
                <div class="thumb">
                  <img
                    src="./images/ProductList/smartwatch.jpeg"
                    alt="dunk low"
                    className="model"
                  />
                </div>
                <div className="product-name">
                  ZINWOOS Garmin Forerunner 245
                </div>
                <div className="shirts-info">
                  다양한 운동을 기록할 수 있는 러닝용 스마트워치(2년 사용)
                </div>
                <div className="price">199,000원</div>
                <div className="option">친필 사인 가능</div>
              </div>
              <div className="product-image">
                <div class="thumb">
                  <img
                    src="./images/ProductList/windbreaker.jpeg"
                    alt="smart watch"
                    className="model"
                  />
                </div>
                <div className="product-name">ZINWOOS NIKE windbreaker</div>
                <div className="shirts-info">
                  체취가 묻어있는 10년 된 바람막이
                </div>
                <div className="price">99,000원</div>
                <div className="option">친필 사인 가능</div>
              </div>
            </div>
          </div>
          <div className="move-btn-wrapper">
            <div className="move-btn">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
