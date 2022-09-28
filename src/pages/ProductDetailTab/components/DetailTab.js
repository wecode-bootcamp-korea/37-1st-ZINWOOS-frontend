import React from 'react';
import './DetailTab.scss';

const DetailTab = () => {
  return (
    <section className="DetailTab">
      <div className="detail-main-wrap">
        <div className="detail-main-img-wrap">
          <img className="detail-main-img" src="" alt="메인 상세 사진" />

          <div className="detail-main-contents">
            <div className="detail-tag">tag</div>
            <h1 className="detail-product-name">상품 이름</h1>
            <p className="detail-product-txt">
              간단한 <br />
              상품설명
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailTab;
