import React from "react";

const Brands = () => {
  return (
    <div className="">
      <h1 className="text-3xl my-12 font-bold">Featured Brands</h1>
      <div className="grid lg:grid-cols-3 place-items-center gap-y-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={"https://i.ibb.co/9nF5KBx/samsung.png"}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">SAMSUNG</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={"https://i.ibb.co/yk9Mtg2/apple.png"}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">APPLE</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={"https://i.ibb.co/LJ0j6VY/sony.png"}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">SONY</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
