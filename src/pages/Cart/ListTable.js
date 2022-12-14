import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

const ListTable = ({ cartList, setCartList }) => {
  const [selectAll, setSelectAll] = useState(true);

  useEffect(() => {
    let checkedArr = [];

    cartList.forEach(item => checkedArr.push(item.checkbox));

    if (checkedArr.includes(0)) {
      setSelectAll(false);
    } else {
      setSelectAll(true);
    }
  }, [cartList]);

  const selectAllCheckbox = () => {
    let copy = [...cartList];
    const filteredList = copy.filter(list => {
      return list.checkbox === 1;
    });
    if (copy.length === filteredList.length) {
      copy = copy.map(item => {
        return { ...item, checkbox: 0 };
      });
    } else {
      copy = copy.map(item => {
        return { ...item, checkbox: 1 };
      });
    }
    setCartList(copy);
    setSelectAll(!selectAll);
  };
  const handleCheckbox = event => {
    const findIndex = cartList.findIndex(
      e => String(e.itemId + e.option_name) === event.target.name
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
  async function removeItem() {
    const deleteItemId = cartList
      .filter(ele => {
        return ele.checkbox === 1;
      })
      .map(item => {
        return item.cartId;
      });
    const response = await fetch(
      `http://172.20.10.3:3000/carts?cartId=${deleteItemId.join('&cartId=')}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();

    if (data.message === 'DELETE_SUCCESS') {
      const response = await fetch(
        'http://172.20.10.3:3000/carts?limit=50&offset=0',
        { headers: { Authorization: localStorage.getItem('token') } }
      );
      const data = await response.json();

      setCartList(data.cartList);
    }
  }

  const setQuantitiy = async event => {
    const findIndex = cartList.findIndex(
      e => (e.itemId + e.option_name).toString() === event.target.name
    );
    let copy = [...cartList];
    if (findIndex > -1 && event.target.innerHTML === '+') {
      copy[findIndex] = {
        ...cartList[findIndex],
        quantity: cartList[findIndex].quantity + 1,
      };

      const response = await fetch('http://172.20.10.3:3000/carts/plus', {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        method: 'PATCH',
        body: JSON.stringify({
          cartId: copy[findIndex].cartId,
        }),
      });
      if (response.status !== 204) {
        alert('???????????? ????????? ???????????? ????????????.');
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
      const response = await fetch('http://172.20.10.3:3000/carts/minus', {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        method: 'PATCH',
        body: JSON.stringify({
          cartId: copy[findIndex].cartId,
        }),
      });
      if (response.status !== 204) {
        alert('???????????? ????????? ???????????? ????????????.');
      }
    }

    setCartList(copy);
  };

  const handleInput = event => {
    const findIndex = cartList.findIndex(
      e => String(e.itemId + e.option_name) === event.target.name
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
  return (
    <>
      <table>
        <caption>???????????? ???????????????</caption>
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
            <th>????????????</th>
            <th>??????</th>
            <th>????????????</th>
            <th>??????</th>
            <th>?????????</th>
            <th>????????????</th>
          </tr>
        </thead>
        <tbody>
          {cartList?.map((item, i) => {
            const {
              itemId,
              name,
              option_name,
              quantity,
              price,
              checkbox,
              detail_image,
            } = item;
            return (
              <tr key={itemId + option_name} className="cart-item">
                <td>
                  <input
                    name={itemId + option_name}
                    className="checkbox"
                    type="checkbox"
                    checked={checkbox}
                    onChange={handleCheckbox}
                  />
                </td>
                <td className="product-info">
                  <span>
                    <Link to="">
                      <img src={detail_image} alt="????????????" />
                    </Link>
                  </span>
                  <div>
                    <div>{name}</div>
                    {option_name && <div>{`??????: ${option_name}`}</div>}
                  </div>
                </td>
                <td>
                  <button
                    name={itemId + option_name}
                    onClick={setQuantitiy}
                    className="count-btn"
                  >
                    -
                  </button>
                  <input
                    name={itemId + option_name}
                    className="number-box"
                    type="number"
                    value={quantity}
                    onChange={handleInput}
                  />
                  <button
                    name={itemId + option_name}
                    onClick={setQuantitiy}
                    className="count-btn"
                  >
                    +
                  </button>
                </td>
                <td>{`${parseInt(price).toLocaleString()}???`}</td>
                <td>???????????????</td>
                <td>????????????</td>
                <td>{`${(quantity * price).toLocaleString()}???`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="remove-box">
        <button onClick={removeItem} className="remove-btn">
          ?????? ?????? ??????
        </button>
      </div>
    </>
  );
};

export default ListTable;
