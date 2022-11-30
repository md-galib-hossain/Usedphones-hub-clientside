import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Buyer from "./Buyer";

const Allbuyers = () => {
  const buyers = useLoaderData();
  const [updatedbuyers, setUpdatedbuyers] = useState(buyers);
  console.log(buyers);

  return (
    <div className="my-3">
      <h1 className="mt-3 text-2xl font-bold">All Buyers</h1>
      <div className=" mt-5 w-11/12 mx-auto overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>

              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {updatedbuyers.map((buyer, i) => (
              <Buyer
                buyer={buyer}
                i={i}
                setUpdatedbuyers={setUpdatedbuyers}
                updatedbuyers={updatedbuyers}
              ></Buyer>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbuyers;
