import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [selectAll, setSelectAll] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipFee, setShipFee] = useState(3000);

  // useEffect(() => {
  //   fetch('http://172.20.10.6:3000/carts?limit=50&offset=0', {
  //     headers: { Authorization: localStorage.getItem('token') },
  //   })
  //     .then(response => response.json())
  //     .then(data => setCartList(data.cartList));
  // }, []);
  useEffect(() => {
    fetch('/data/cart.json', {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(response => response.json())
      .then(data => setCartList(data.cartList));
  }, []);

  useEffect(() => {
    let checkedArr = [];

    cartList.forEach(item => checkedArr.push(item.checkbox));

    if (checkedArr.includes(0)) {
      setSelectAll(false);
    } else {
      setSelectAll(true);
    }
  }, []);

  useEffect(() => {
    const copy = [...cartList];
    const buyList = copy.filter(item => Boolean(item.checkbox));

    let price = 0;
    buyList.forEach(item => {
      price += item.quantity * item.price;
    });

    price >= 100000 ? setShipFee(0) : setShipFee(3000);
    price === 0 && setShipFee(0);
    setTotalPrice(price);
  }, [cartList]);

  const submitOrder = async () => {
    console.log('주문하기!');
    const orderList = cartList.filter(item => item.checkbox === 1);
    console.log(...orderList);
    const response = await fetch('#', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
        body: JSON.stringify({
          userId: localStorage.getItem('token'),
          itemId: orderList.id,
          optionId: orderList.optionId,
          quantity: orderList.quantity,
        }),
      },
    });
    const data = await response.json();
    console.log(data);

    // const checkConfirm = window.confirm('주문하시겠?');
    //데이터 메시지가 ~~면 ~~ 하고 실패면 ~~하자 조건문.!@!@#!@#!@#13
  };

  const selectAllCheckbox = () => {
    let copy = [...cartList];
    if (selectAll) {
      copy.forEach(obj => {
        obj.checkbox = 0;
      });
    } else {
      copy.forEach(obj => {
        obj.checkbox = 1;
      });
    }
    setSelectAll(!selectAll);
  };

  const setQuantitiy = event => {
    const findIndex = cartList.findIndex(
      e => (e.id + e.option_name).toString() === event.target.name
    ); //
    let copy = [...cartList];
    if (findIndex > -1 && event.target.innerHTML === '+') {
      copy[findIndex] = {
        ...cartList[findIndex],
        quantity: cartList[findIndex].quantity + 1,
      };
    } else if (
      findIndex > -1 &&
      event.target.innerHTML === '-' &&
      cartList[findIndex].quantity > 1
    ) {
      copy[findIndex] = {
        ...cartList[findIndex],
        quantity: cartList[findIndex].quantity - 1,
      };
    }

    setCartList(copy);
  };

  const handleInput = event => {
    const findIndex = cartList.findIndex(
      e => String(e.id + e.option_name) === event.target.name
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

  async function removeItem() {
    const deleteItemId = cartList
      .filter(ele => {
        return ele.checkbox === 1;
      })
      .map(item => {
        return item.id;
      });
    const result = deleteItemId.map(item => {
      return item.id;
    });
    let optionId = [];
    deleteItemId
      .map(ele => {
        return ele.option_name;
      })
      .forEach(e => {
        if (e === '친필 사인 추가') {
          optionId.push(1);
        } else {
          optionId.push(null);
        }
      });

    const response = await fetch(
      `http://172.20.10.6:3000/carts?itemId=${result.join('&itemId=')}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          optionId: optionId,
        }),
      }
    );

    const data = await response.json();

    if (data.message === 'DELETE_SUCCESS') {
      const response = await fetch(
        'http://172.20.10.6:3000/carts?limit=50&offset=0',
        { headers: { Authorization: localStorage.getItem('token') } }
      );
      const data = await response.json();

      setCartList(data.cartList);
    }
  }
  //데이터 아이디 수정 시작!!!@!@!@@!
  const handleCheckbox = event => {
    const findIndex = cartList.findIndex(
      e => String(e.id + e.option_name) === event.target.name
    );

    let copy = [...cartList];

    if (findIndex !== -1) {
      if (copy[findIndex].checkbox) {
        copy[findIndex] = {
          ...cartList[findIndex],
          checkbox: 0,
        };
      } else {
        copy[findIndex] = {
          ...cartList[findIndex],
          checkbox: 1,
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
                <h1>장바구니</h1>
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
                    {cartList?.map((item, i) => {
                      const {
                        id,
                        name,
                        option_name,
                        quantity,
                        price,
                        checkbox,
                        detail_image,
                      } = item;
                      return (
                        <tr key={id + option_name} className="cart-item">
                          <td>
                            <input
                              name={id + option_name}
                              className="checkbox"
                              type="checkbox"
                              checked={checkbox}
                              onChange={handleCheckbox}
                            />
                          </td>
                          <td className="product-info">
                            <span>
                              <Link to="">
                                <img src={detail_image} alt="제품사진" />
                              </Link>
                            </span>
                            <div>
                              <div>{name}</div>
                              {option_name && (
                                <div>{`옵션: ${option_name}`}</div>
                              )}
                            </div>
                          </td>
                          <td>
                            <button
                              name={id + option_name}
                              onClick={setQuantitiy}
                              className="count-btn"
                            >
                              -
                            </button>
                            <input
                              name={id + option_name}
                              className="number-box"
                              type="number"
                              value={quantity}
                              onChange={handleInput}
                            />
                            <button
                              name={id + option_name}
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
                      <div>{`${totalPrice.toLocaleString()}원`}</div>
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
                        {totalPrice > 100000
                          ? `${totalPrice.toLocaleString()}원`
                          : `${(totalPrice + shipFee).toLocaleString()}원`}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="complete-btn">
                <Link to="/main">
                  <button>쇼핑 계속하기</button>
                </Link>
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
