import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCategory = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="grid lg:grid-cols-3 place-items-center my-5 ">
      {products.map((product) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={product?.picture} alt="Device" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product?.name}</h2>
            <p>Condition : {product?.condition}</p>
            <p>Used for : {product?.used}</p>
            <p className="text-lg font-semibold ">
              Orginal Price : {product?.orginalprice}
            </p>
            <p className="text-lg font-semibold ">
              Resell Price : {product?.resaleprice}
            </p>
            <p className="text-sm font-semibold  ">
              Location {product?.location}
            </p>
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full btn-error">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCategory;
