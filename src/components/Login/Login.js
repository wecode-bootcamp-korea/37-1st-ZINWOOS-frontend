import React, { useEffect, useState } from 'react';
import './Login.scss';

const Login = ({ modalLogin }) => {
  const [typeOfForm, setTypeOfForm] = useState('로그인');
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    address: '',
  });

  const isLoginValid =
    inputValue.email.includes('@') && inputValue.password.length > 4;

  const isSignupVaild =
    inputValue.email.includes('@') &&
    inputValue.password.length > 4 &&
    inputValue.name.length > 1 &&
    inputValue.phoneNumber.length >= 10;

  const handleInput = event => {
    const { name, value } = event.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleLogin = () => {
    /*로그인 성공 -> modalLogin 실행 아니면 다시입력 alert */
    /*nav에서는 토큰 true면 로그인 메뉴가 로그아웃으로 변환 */
  };

  const handleSignUp = () => {
    /*회원가입 성공 -> handleForm실행 ->로그인절차 ㄱㄱ */
    //패치 정보 다 보냄 -> then Json변환 -> then 리스폰스 출력
  };

  const handleForm = () => {
    if (typeOfForm === '로그인') {
      setTypeOfForm('회원가입');
    } else {
      setTypeOfForm('로그인');
    }
  };

  const submitValue = e => {
    e.preventDefault();
    // 나중에 로그인 성공해서 토큰 받으면?
    // setShowLogin(false); 조건식
  };

  return (
    <div className="Login">
      <div className="login-box">
        <div className="close-btn">
          <button onClick={modalLogin}>
            <i className="fa-solid fa-x" />
          </button>
        </div>
        <h1>ZINWOOS</h1>
        <p>지누스 회원이라면 계정으로 로그인 하세요</p>
        <form onSubmit={submitValue}>
          <div className="input-container">
            <input
              name="email"
              type="text"
              placeholder="이메일"
              onChange={handleInput}
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleInput}
            />
            {typeOfForm === '회원가입' && (
              <>
                <input
                  name="name"
                  type="text"
                  placeholder="이름"
                  onChange={handleInput}
                />
                <input
                  id="phone-input"
                  name="phoneNumber"
                  type="number"
                  placeholder="전화번호"
                  onChange={handleInput}
                />
                <input
                  name="address"
                  type="text"
                  placeholder="주소"
                  onChange={handleInput}
                />
              </>
            )}
          </div>
          <div>
            {typeOfForm === '로그인' ? (
              <button disabled={!isLoginValid} onClick={handleLogin}>
                로그인
              </button>
            ) : (
              <button disabled={!isSignupVaild} onClick={handleSignUp}>
                회원가입
              </button>
            )}
          </div>
        </form>
        {typeOfForm === '로그인' ? (
          <div className="change-input-type">
            계정이 없으신가요? <span onClick={handleForm}>회원가입</span>
          </div>
        ) : (
          <div className="change-input-type">
            이미 가입하셨나요? <span onClick={handleForm}>로그인</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
