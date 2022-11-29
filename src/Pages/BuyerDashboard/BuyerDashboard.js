import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const BuyerDashboard = () => {
  const { user, loading } = useContext(AuthContext);
  //   load booked items by email query
  const url = `http://localhost:5000/bookeditems?bookedemail=${user?.email}`;
  const { data: bookedItems = [], isLoading } = useQuery({
    queryKey: ["booked", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const booked = await res.json();
      console.log(booked);
      return booked;
    },
  });
  console.log(bookedItems);
  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="my-3">
      <button className="btn btn-wide">My Orders</button>
      <div className="grid lg:grid-cols-3 place-items-center my-5 ">
        {bookedItems.map((bookedItem) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={bookedItem?.picture}
                alt="Device"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{bookedItem?.name}</h2>
              <p>Condition : {bookedItem?.condition}</p>
              <p>Used for : {bookedItem?.used}</p>
              <p className="text-lg font-semibold ">
                Orginal Price : BDT{bookedItem?.orginalprice}
              </p>
              <p className="text-lg font-semibold ">
                Resell Price : BDT{bookedItem?.resaleprice}
              </p>
              <p className="text-lg font-semibold ">
                Sellername : {bookedItem?.sellername}
              </p>
              <p className="text-sm font-semibold  ">
                Location {bookedItem?.location}
              </p>
              {/* kon din post kora hoise shei date dite hobe */}
              {/* seller verified ki na dekha jabe */}
              <div className="card-actions  w-full">
                {bookedItem?.ispaid == "no" ? (
                  <Link
                    to={`/dashboard/payment/${bookedItem?._id}`}
                    className="btn w-full btn-error"
                  >
                    Pay Now
                  </Link>
                ) : (
                  <Link className="btn w-full btn-success">Already Paid</Link>
                )}
                <Link className="btn w-full btn-outline ">Report to Admin</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerDashboard;
