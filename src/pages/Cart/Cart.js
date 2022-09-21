import React from 'react';
import { Link } from 'react-router-dom';

import './Cart.scss';

const Cart = () => {
  return (
    <div className="Cart">
      <div className="container">
        <div className="content">
          <div className="contents">
            <div className="order-page">
              <div className="title">
                <h2>장바구니</h2>
              </div>
              <div className="cart-list">
                <table>
                  <caption>장바구니 상품리스트</caption>
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>상품정보</th>
                      <th>수량</th>
                      <th>상품금액</th>
                      <th>혜택</th>
                      <th>배송비</th>
                      <th>합계금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input className="checkbox" type="checkbox" />
                      </td>
                      <td className="product-info">
                        <span>
                          <Link to="">
                            <img
                              src="https://github.com/ChoiRamsey/zinwoos/blob/main/3472392085746366512_20220920151059973.jpg?raw=true"
                              alt="제품사진"
                            />
                          </Link>
                        </span>
                        <div>
                          클라우드 럭스sadfdasfadsfddd
                          <button>옵션/수량변경</button>
                        </div>
                      </td>
                      <td>
                        <input className="number-box" type="number" />{' '}
                        <button className="number-modify">수정</button>
                      </td>
                      <td>금액</td>
                      <td>포옹</td>
                      <td>무료배송</td>
                      <td>60000</td>
                    </tr>
                    <tr>
                      <td>
                        <input className="checkbox" type="checkbox" />
                      </td>
                      <td className="product-info">
                        <span>
                          <Link to="">
                            <img
                              src="https://github.com/ChoiRamsey/zinwoos/blob/main/3472392085746366512_20220920151059973.jpg?raw=true"
                              alt="제품사진"
                            />
                          </Link>
                        </span>
                        <div>
                          클라우드 럭스sadfdasfadsfddd
                          <button>옵션/수량변경</button>
                        </div>
                      </td>
                      <td>
                        <input className="number-box" type="number" />{' '}
                        <button className="number-modify">수정</button>
                      </td>
                      <td>금액</td>
                      <td>포옹</td>
                      <td>무료배송</td>
                      <td>60000</td>
                    </tr>
                  </tbody>
                </table>
                <div className="remove-box">
                  <button className="remove-btn">선택 상품 삭제</button>
                </div>
                <div className="price-box">
                  <ul>
                    <li>
                      <div>합계금액</div>
                      <div>forEach += 데이터.금액</div>
                    </li>
                    <li>
                      <i class="fa-solid fa-minus" />
                      <div>할인 금액 합계</div>
                      <div>0원</div>
                    </li>
                    <li>
                      <i class="fa-solid fa-plus" />
                      <div>배송비</div>
                      <div>5만이상 ? 무료 : 3천원</div>
                    </li>
                    <li>
                      <i class="fa-solid fa-equals" />
                      <div>결제 예정 금액</div>
                      <div>(합계 + 배송비)원</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="complete-btn">
                <button>쇼핑 계속하기</button>
                <button>주문하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
