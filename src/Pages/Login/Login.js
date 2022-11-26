import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
