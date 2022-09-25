import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Cart.scss';

const Cart = () => {
  const data = [
    {
      id: 0,
      url: 'https://github.com/ChoiRamsey/zinwoos/blob/main/3472392085746366512_20220920151059973.jpg?raw=true',
      title: '사진',
      option: '친필 사인 추가',
      quantity: 1,
      price: 10000,
      isChecked: 1,
    },
    {
      id: 1,
      url: 'https://github.com/ChoiRamsey/zinwoos/blob/main/3472392085746366512_20220920151059973.jpg?raw=true',
      title: '시간',
      option: '친필 사인 추가',
      quantity: 2,
      price: 20000,
      isChecked: 1,
    },
    {
      id: 2,
      url: 'https://github.com/ChoiRamsey/zinwoos/blob/main/3472392085746366512_20220920151059973.jpg?raw=true',
      title: '포옹',
      option: '친필 사인 추가',
      quantity: 3,
      price: 30000,
      isChecked: 1,
    },
    {
      id: 3,
      url: 'https://github.com/ChoiRamsey/zinwoos/blob/main/3472392085746366512_20220920151059973.jpg?raw=true',
      title: '티셔츠',
      option: '친필 사인 추가',
      quantity: 1,
      price: 40000,
      isChecked: 1,
    },
  ];
  // isChecked : 1  수정 시작!
  const [cartList, setCartList] = useState(data);
  const [selectAll, setSelectAll] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipFee, setShipFee] = useState(3000);
  const orderPrice = totalPrice + shipFee;

  const navigate = useNavigate();

  useEffect(() => {
    let checkedArr = [];

    cartList.forEach(item => checkedArr.push(item.isChecked));

    if (checkedArr.includes(0)) {
      setSelectAll(false);
    } else {
      setSelectAll(true);
    }
  }, [cartList]);

  useEffect(() => {
    const buyList = cartList.filter(item => Boolean(item.isChecked));
    let price = 0;
    buyList.forEach(item => {
      price += item.quantity * item.price;
    });
    price > 50000 ? setShipFee(0) : setShipFee(3000);

    setTotalPrice(price);
  }, [cartList]);

  const submitOrder = () => {
    const orderList = cartList.filter(item => item.isChecked === 1);
    //서브밋할 때는 orderList와 orderPrice 보내주면 됨
    // console.log(cartList);
    // console.log(orderPrice);
    // console.log(orderList);
    //백엔드 통신 대비용 메모입니다.
    const checkConfirm = window.confirm('주문하시겠?');
    console.log(checkConfirm);
  };

  const selectAllCheckbox = () => {
    let copy = [...cartList];
    if (selectAll) {
      //true
      copy.forEach(obj => {
        obj.isChecked = 0;
      });
    } else {
      copy.forEach(obj => {
        obj.isChecked = 1;
      });
    }
    setSelectAll(!selectAll); //false
  };

  const setQuantitiy = event => {
    const findIndex = cartList.findIndex(
      e => e.id === Number(event.target.name)
    );
    let copy = [...cartList];
    if (findIndex > -1 && event.target.innerHTML === '+') {
      copy[findIndex] = {
        ...cartList[findIndex],
        quantity: cartList[findIndex].quantity + 1,
      };
      if (copy[findIndex].quantity !== 0) {
        copy[findIndex].isChecked = 1;
      }
    } else if (
      findIndex > -1 &&
      event.target.innerHTML === '-' &&
      cartList[findIndex].quantity > 1
    ) {
      copy[findIndex] = {
        ...cartList[findIndex],
        quantity: cartList[findIndex].quantity - 1,
      };
      if (copy[findIndex].quantity === 0) {
        copy[findIndex].isChecked = 0;
      }
    }

    setCartList(copy);
  };

  const handleInput = event => {
    const findIndex = cartList.findIndex(
      e => e.id === Number(event.target.name)
    );
    let copy = [...cartList];
    if (findIndex !== -1) {
      copy[findIndex] = {
        ...cartList[findIndex],
        quantity: Number(event.target.value),
      };
    }
    setCartList(copy);
  };

  const removeItem = () => {
    let copy = [...cartList];

    let copy2 = copy.filter(item => {
      return Number(item.isChecked) === 0;
    });

    setCartList(copy2);
  };

  const handleCheckbox = event => {
    const findIndex = cartList.findIndex(
      e => e.id === Number(event.target.name)
    );

    let copy = [...cartList];

    if (findIndex !== -1) {
      if (copy[findIndex].isChecked) {
        copy[findIndex] = {
          ...cartList[findIndex],
          isChecked: 0,
        };
      } else {
        copy[findIndex] = {
          ...cartList[findIndex],
          isChecked: 1,
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
                      const { id, title, option, quantity, price, isChecked } =
                        item;
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
                            <div>
                              <div>{title}</div>
                              {option && <div>{`옵션: ${option}`}</div>}
                            </div>
                          </td>
                          <td>
                            <button
                              name={id}
                              onClick={setQuantitiy}
                              className="count-btn"
                            >
                              -
                            </button>
                            <input
                              name={id}
                              className="number-box"
                              type="number"
                              value={quantity}
                              onChange={handleInput}
                            />
                            <button
                              name={id}
                              onClick={setQuantitiy}
                              className="count-btn"
                            >
                              +
                            </button>
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
                      <div>{totalPrice}</div>
                    </li>
                    <li>
                      <i className="fa-solid fa-minus" />
                      <div>할인 금액 합계</div>
                      <div>0원</div>
                    </li>
                    <li>
                      <i className="fa-solid fa-plus" />
                      <div>배송비</div>
                      {totalPrice === 0 ? (
                        <div>상품을 추가 시 결정</div>
                      ) : (
                        <div>{shipFee === 0 ? '무료' : shipFee}</div>
                      )}
                    </li>
                    <li>
                      <i className="fa-solid fa-equals" />
                      <div>결제 예정 금액</div>
                      <div>
                        {totalPrice > 50000
                          ? `${totalPrice}원`
                          : `${totalPrice + shipFee}원`}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="complete-btn">
                <button
                  onClick={() => {
                    navigate('/main');
                  }}
                >
                  쇼핑 계속하기
                </button>
                <button onClick={submitOrder}>주문하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
