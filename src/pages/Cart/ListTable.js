import { Link } from 'react-router-dom';

const ListTable = ({
  setSelectAll,
  selectAllCheckbox,
  cartList,
  setQuantitiy,
  handleCheckbox,
  handleInput,
  removeItem,
  selectAll,
}) => {
  return (
    <>
      {' '}
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
                    {option_name && <div>{`옵션: ${option_name}`}</div>}
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
    </>
  );
};

export default ListTable;
