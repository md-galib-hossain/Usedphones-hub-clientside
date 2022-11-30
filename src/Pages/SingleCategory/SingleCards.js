import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SingleCards = ({ product, setBook, setLoadedproducts }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product?.picture} alt="Device" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product?.name}</h2>
        <p>Condition : {product?.condition}</p>
        <p>Used for : {product?.used}</p>
        <p className="text-lg font-semibold ">
          Orginal Price : BDT{product?.orginalprice}
        </p>
        <p className="text-lg font-semibold ">
          Resell Price : BDT{product?.resaleprice}
        </p>
        <p className="text-lg font-semibold ">
          Sellername : {product?.sellername}
        </p>
        <p className="text-sm font-semibold  ">Location {product?.location}</p>
        {/* kon din post kora hoise shei date dite hobe */}
        {/* seller verified ki na dekha jabe */}
        <div className="card-actions  w-full">
          <label
            onClick={() => setBook(product)}
            htmlFor="booking-modal"
            className="btn w-full btn-error"
          >
            Book Now
          </label>
          <Link
            // onClick={() => handlereport(product)}
            className="btn w-full btn-outline "
          >
            Report to Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCards;
