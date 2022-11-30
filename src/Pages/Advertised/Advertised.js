import React from "react";
import { Link } from "react-router-dom";

const Advertised = ({ advertiseditem }) => {
  console.log(advertiseditem);
  return (
    <Link
      to={`/category/${advertiseditem?.idno}`}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={advertiseditem?.picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{advertiseditem?.name}</h2>
        <h2 className="card-title">BDT {advertiseditem?.resaleprice}</h2>
      </div>
    </Link>
  );
};

export default Advertised;
