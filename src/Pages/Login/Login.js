import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs input-accent"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className="input input-bordered w-full max-w-xs input-accent"
            />
            <label className="label">
              <span className="label-text">Forget Password!</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
