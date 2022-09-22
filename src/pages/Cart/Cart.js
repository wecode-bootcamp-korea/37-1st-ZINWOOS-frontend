import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import './Cart.scss';

const Cart = () => {
  const data = [
    { id: 0, title: '사진', quantity: 1, price: 10000, isChecked: true },
    { id: 1, title: '시간', quantity: 2, price: 20000, isChecked: true },
    { id: 2, title: '포옹', quantity: 3, price: 30000, isChecked: true },
    { id: 3, title: '티셔츠', quantity: 1, price: 40000, isChecked: true },
  ];

  const [cartList, setCartList] = useState(data);
  const [selectAll, setSelectAll] = useState(true);

  useEffect(() => {
    let checkedArr = [];

    cartList.forEach(item => checkedArr.push(item.isChecked));

    if (checkedArr.includes(false)) {
      setSelectAll(false);
    } else {
      setSelectAll(true);
    }
  }, [cartList]);

  // 체크박스를 하나씩 검사해서 false가 하나라도 있으면 selectAll 을 false로

  const selectAllCheckbox = () => {
    let copy = [...cartList];
    if (selectAll) {
      copy.forEach(obj => {
        obj.isChecked = false;
      });
    } else {
      copy.forEach(obj => {
        obj.isChecked = true;
      });
    }
    setSelectAll(!selectAll);
  };

  const handleInput = event => {
    const findIndex = cartList.findIndex(e => e.id == event.target.name);

    let copy = [...cartList];
    if (findIndex != -1) {
      copy[findIndex] = {
        ...cartList[findIndex],
        quantity: Number(event.target.value),
      };
    }
    setCartList(copy);
  };

  const removeItem = () => {
    let copy = [...cartList];
    console.log(copy);

    let copy2 = copy.filter(item => {
      return item.isChecked == false;
    });
    console.log(copy2);

    setCartList(copy2);
  };

  const handleCheckbox = event => {
    const findIndex = cartList.findIndex(e => e.id == event.target.name);

    let copy = [...cartList];

    if (findIndex != -1) {
      if (copy[findIndex].isChecked) {
        copy[findIndex] = {
          ...cartList[findIndex],
          isChecked: false,
        };
      } else {
        copy[findIndex] = {
          ...cartList[findIndex],
          isChecked: true,
        };
      }
    }
    setCartList(copy);
  };

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
                        <input
                          type="checkbox"
                          name="select-all"
                          onChange={selectAllCheckbox}
                          checked={selectAll}
                        />
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
                    {cartList.map((item, i) => {
                      const { id, title, quantity, price, isChecked } = item;

                      return (
                        <tr key={id} className="cart-item">
                          <td>
                            <input
                              name={id}
                              className="checkbox"
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckbox}
                            />
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
                            <div>{title}</div>
                          </td>
                          <td>
                            <input
                              name={id}
                              className="number-box"
                              type="number"
                              value={quantity}
                              onChange={handleInput}
                            />
                            <button className="number-modify">수정</button>
                          </td>
                          <td>{price}</td>
                          <td>지누쓰마음</td>
                          <td>무료배송</td>
                          <td>{quantity * price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="remove-box">
                  <button onClick={removeItem} className="remove-btn">
                    선택 상품 삭제
                  </button>
                </div>
                <div className="price-box">
                  <ul>
                    <li>
                      <div>합계금액</div>
                      <div>forEach += 데이터.금액</div>
                    </li>
                    <li>
                      <i className="fa-solid fa-minus" />
                      <div>할인 금액 합계</div>
                      <div>0원</div>
                    </li>
                    <li>
                      <i className="fa-solid fa-plus" />
                      <div>배송비</div>
                      <div>5만이상 ? 무료 : 3천원</div>
                    </li>
                    <li>
                      <i className="fa-solid fa-equals" />
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
