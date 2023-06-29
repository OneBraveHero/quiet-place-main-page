import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  let wrapper = "wrapper";
  let wrapperActive = "wrapper active";

  return (
    <div className="App">
      <h1> Popup TEST </h1>

      <div className={isActive ? wrapperActive : wrapper}>
        {/* Form for Log In***************************************** */}
        <div className="form-box singIn">
          <h2>Log in</h2>
          <form>
            <div className="input-box">
              <input
                className="input"
                label="email"
                type="email"
                name="email"
                required
              ></input>
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                className="input"
                label="password"
                type="password"
                name="password"
                required
              ></input>
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input className="checkbox" type="checkbox" /> Remember Me
              </label>
              <a className="a-forgot-password">Forgot Password?</a>
            </div>
          </form>
          <button type="submit" className="btn">
            {" "}
            Sing in
          </button>
          <button type="button" className="btn">
            {" "}
            Sing in whit Google
          </button>
          <div className="sing-in-register">
            <hr className="separator-line" />
            <p>Don't have a account?</p>

            <a
              className="register-link"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              Register
            </a>
          </div>
        </div>
        {/* Form Registration ***********************************/}
        <div className="form-box register">
          <h2>Registration</h2>
          <form>
            <div className="input-box">
              <input
                className="input"
                label="User Name"
                type="text"
                name="userName"
                required
              ></input>
              <label>User Name</label>
            </div>
            <div className="input-box">
              <input
                className="input"
                label="email"
                type="email"
                name="email"
                required
              ></input>
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                className="input"
                label="password"
                type="password"
                name="password"
                required
              ></input>
              <label>Password</label>
            </div>
            <div className="input-box">
              <input
                className="input"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                required
              ></input>
              <label>Confirm Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input className="checkbox" type="checkbox" /> I agree to the
                terms & conditions
              </label>
            </div>
          </form>
          <button type="submit" className="btn">
            {" "}
            Sing Up
          </button>
          <div className="sing-in-register">
            <p>Already have a account?</p>
            <a
              className="login-link"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              Sing In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
