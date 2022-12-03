import React, { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setInputs((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="wrapper-login">
      <h2 className="heading">Member Login</h2>
      <div className="login-form-wrapper">
        <form id="login-form" onSubmit={onSubmitHandler}>
          <div className="input-wrapper">
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={onChangeHandler}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={onChangeHandler}
            />
          </div>
          <button htmlFor="login-form" className="btn logBtn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
