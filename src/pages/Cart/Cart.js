import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListTable from './ListTable';

import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipFee, setShipFee] = useState(3000);
  console.log(cartList);
  useEffect(() => {
    fetch('http://172.20.10.5:3000/carts?limit=50&offset=0', {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(response => response.json())
      .then(data => setCartList(data.cartList));
  }, []);
  //위는 백엔드 API 통신 && 아래는 목데이터 사용 테스트용
  // useEffect(() => {
  //   fetch('/data/cart.json', {
  //     headers: { Authorization: localStorage.getItem('token') },
  //   })
  //     .then(response => response.json())
  //     .then(data => setCartList(data.cartList));
  // }, []);

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
    const orderList = cartList
      .filter(item => item.checkbox === 1)
      .map(item => {
        return item.id;
      });

    console.log(orderList);

    const response = await fetch(
      `http://172.20.10.5:3000/orders?cartId=${orderList.join('&cartId=')}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
      }
    );
    const data = await response.json();
    if (response.status === 201) {
      alert('주문성공');
      console.log(data);
      // 메인페이지로 이동
    }
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
                <ListTable cartList={cartList} setCartList={setCartList} />
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
                        <div>{totalPrice >= 100000 ? '무료' : 3000}</div>
                      )}
                    </li>
                    <li>
                      <i className="fa-solid fa-equals" />
                      <div>결제 예정 금액</div>
                      <div>
                        {totalPrice >= 100000
                          ? `${totalPrice.toLocaleString()}원`
                          : `${(totalPrice + shipFee).toLocaleString()}원`}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="complete-btn">
                <Link to="/">
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
