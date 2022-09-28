import React from 'react';
import './MainImage.scss';

const MainImage = () => {
  return (
    <div className="MainImage">
      <img
        src="./images/ProductList/zinwoosmain.jpg"
        alt="team-master"
        className="main-model"
      />
      <div className="main-header">
        <div>
          <p className="header-name">Items</p>
        </div>
        <div className="second-header">진우님의 체취가 가득한</div>
        <div>
          <a href="#tag" className="scroll-move">
            제품 바로보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
