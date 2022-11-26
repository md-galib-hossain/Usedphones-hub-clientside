import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl">Signup</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          {/* select */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose your account type</span>
            </label>
            <select
              {...register("usertype", { required: true })}
              className="select select-bordered select-error"
            >
              <option selected value="Buyer">
                Buyer
              </option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          {/* Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="input input-bordered w-full max-w-xs input-error"
            />
            {errors.name && (
              <p className="text-left text-red-500" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>

          {/* email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters",
                },
              })}
              className="input input-bordered w-full max-w-xs input-error"
            />
            {errors.password && (
              <p className="text-left text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link to="/login">
                <span className="label-text">Already have an account?</span>
              </Link>
            </label>
          </div>

          <input
            className="btn btn-error w-full"
            value="Signup"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
