import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SingleCategory = () => {
  const products = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(products, user);
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
              Orginal Price : ${product?.orginalprice}
            </p>
            <p className="text-lg font-semibold ">
              Resell Price : ${product?.resaleprice}
            </p>
            <p className="text-lg font-semibold ">
              Sellername : {product?.sellername}
            </p>
            <p className="text-sm font-semibold  ">
              Location {product?.location}
            </p>
            {/* kon din post kora hoise shei date dite hobe */}
            {/* seller verified ki na dekha jabe */}
            <div className="card-actions  w-full">
              <Link className="btn w-full btn-error">Book Now</Link>
              <Link className="btn w-full btn-outline ">Report to Admin</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCategory;
