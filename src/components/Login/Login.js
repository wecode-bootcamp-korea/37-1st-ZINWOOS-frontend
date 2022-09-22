import React, { useState } from 'react';
import './Login.scss';

const Login = ({ modalLogin, setShowLogin }) => {
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

  const handleLogin = e => {
    e.preventDefault();
    fetch('https://6fbe-211-106-114-186.jp.ngrok.io/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          alert('환영합니다');
          setShowLogin(false);
          localStorage.setItem('token', data.accessToken);
          window.location.reload();
        } else if (data.message === 'INVALID_USER') {
          alert('등록되지 않은 사용자입니다.');
        }
      });
  };

  const handleSignUp = e => {
    e.preventDefault();
    fetch('https://6fbe-211-106-114-186.jp.ngrok.io/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
        name: inputValue.name,
        phoneNumber: inputValue.phoneNumber,
        address: inputValue.address,
      }),
    }).then(() => alert('가입성공'));
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
