import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, providerLogin, user } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  // login er por kothay jaite hobe ta set kora
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // login with google
  const googleProvider = new GoogleAuthProvider();
  //   Get user information by google signin

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
      // user object
      const userinfo = {
        name: user.displayName,
        email: user.email,
        usertype: "Buyer",
      };
      // sending user details to backend
      fetch(
        "https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userinfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        })
        .catch((error) => console.log(error));
    });
  };
  // email and pass login
  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs input-error"
            />
            {errors.email && (
              <p className="text-left text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          {/* password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full max-w-xs input-error"
            />
            {errors.password && (
              <p className="text-left text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link to="/signup">
                <span className="label-text">Don't have an account?</span>
              </Link>
            </label>
          </div>

          <input className="btn btn-error w-full" value="Login" type="submit" />
          <input
            onClick={handleGoogleSignIn}
            className="btn mt-3 btn-outline  w-full"
            value="Login with Google"
          />
          <div>{loginError && <p>{loginError}</p>}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
