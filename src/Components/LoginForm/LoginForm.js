import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "../../Assets/Images/login.png";
import { FcGoogle } from "react-icons/fc";

import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { IS_SIGNEDIN } from "../../Redux/Reducers/AuthReducer";

function LoginForm() {
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="LoginForm-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginImage">
          <img
            src={Login}
            className="LoginLogo"
            alt=""
            style={{ width: "8rem" }}
          />
        </div>

        <h1 className="formH1">Hello!</h1>
        <p className="formPara">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </p>
        <div>
          <label htmlFor="email"></label>
          <input
            placeholder="Enter Your Email Address"
            type="email"
            ref={register}
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            className="input"
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            placeholder="Enter Your Password"
            type="password"
            ref={register}
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            className="input"
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
        </div>
        <div className="remember-recoverContainer">
          <div className="rememberContainer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rememberCheckbox"
            />
            <label htmlFor="rememberMe" style={{ marginLeft: ".5rem" }}>
              Remember Me
            </label>
          </div>
          <div className="recovery">
            <NavLink
              to="/recoveryPassword"
              className="recoverPass"
            >
              Recovery Password
            </NavLink>
          </div>
        </div>
        <button
          type="submit"
          // className={isValid ? "valid" : "invalid"}
          className="loginBtn"
          onClick={() => {
            dispatch({ type: IS_SIGNEDIN, payload: true });
            localStorage.setItem("loginState", JSON.stringify(true));
          }}
        >
          Log In
        </button>
        <button className="googleLogin">
          <FcGoogle style={{ marginRight: ".5rem" }} />
          Google
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
