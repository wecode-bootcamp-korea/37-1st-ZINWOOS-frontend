import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  return (
    <div className="Detail">
      <div>
        <div className="tab-contents">
          <Link to="#">상세정보</Link>
          <Link to="#">리뷰(0)</Link>
          <Link to="#">Q&A(8)</Link>
          <Link to="#">배송/반품/설치</Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
