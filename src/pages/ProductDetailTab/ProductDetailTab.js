import React, { useState } from 'react';
import DetailTab from './components/DetailTab';
import ReviewTab from './components/ReviewTab';
import QaTab from './components/QaTab';
import RefundTab from './components/RefundTab';
import './ProductDetailTab.scss';

const ProductDetailTab = () => {
  const [currentId, setCurrentId] = useState(1);

  const tabHandler = e => {
    setCurrentId(e);
  };

  return (
    <div className="ProductDetailTab">
      <div className="detail-menu-bar">
        <ul className="tabs">
          {TAB_TITLE.map((title, index) => {
            return (
              <li
                key={title + index}
                className="tab"
                onClick={() => tabHandler(index + 1)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>

      {TAB_OBJ[currentId]}
    </div>
  );
};

export default ProductDetailTab;

const TAB_TITLE = ['상세정보', '리뷰', 'Q&A', '배송/환불'];

const TAB_OBJ = {
  1: <DetailTab />,
  2: <ReviewTab />,
  3: <QaTab />,
  4: <RefundTab />,
};
