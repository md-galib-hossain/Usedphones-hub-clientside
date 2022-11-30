import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SellerDashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [loadedproducts, SetLoadedproducts] = useState([]);
  //   load my products by email query
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products?email=${user?.email}`)
      .then((data) => {
        const products = data.data;

        SetLoadedproducts(products);
        console.log(loadedproducts);
      });
  }, [user?.email]);

  // Deleting product
  const handleDelete = (loadedproduct) => {
    const agree = window.confirm(
      `are you confirm to delete: ${loadedproduct?.name}`
    );
    if (agree) {
      // sending data to server
      fetch(`http://localhost:5000/delete/${loadedproduct?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Product deleted successfuly");
            const remainingproducts = loadedproducts.filter(
              (bk) => bk._id != loadedproduct._id
            );
            SetLoadedproducts(remainingproducts);
          }
        });
    }
  };
  // handle advertise
  const handleadvertise = (loadedproduct) => {
    fetch(`http://localhost:5000/advertise/${loadedproduct?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loadedproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Product advertised successfuly");
        }
      });
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="my-3">
      <Link to="/addproduct" className="btn btn-outline btn-wide  ">
        Add Product
      </Link>
      <h1 className="text-2xl font-bold">My Products</h1>
      <div className="grid lg:grid-cols-3 place-items-center my-5 ">
        {loadedproducts.map((loadedproduct) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={loadedproduct?.picture}
                alt="Device"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{loadedproduct?.name}</h2>
              <p>Condition : {loadedproduct?.condition}</p>
              <p>Used for : {loadedproduct?.used}</p>
              <p className="text-lg font-semibold ">
                Orginal Price : BDT{loadedproduct?.orginalprice}
              </p>
              <p className="text-lg font-semibold ">
                Resell Price : BDT{loadedproduct?.resaleprice}
              </p>
              <p className="text-lg font-semibold ">
                Sellername : {loadedproduct?.sellername}
              </p>
              <p className="text-sm font-semibold  ">
                Location {loadedproduct?.location}
              </p>
              {/* kon din post kora hoise shei date dite hobe */}
              {/* seller verified ki na dekha jabe */}
              <div className="card-actions  w-full">
                <Link
                  onClick={() => handleDelete(loadedproduct)}
                  className="btn w-full btn-error"
                >
                  Delete Product
                </Link>

                <Link
                  onClick={() => handleadvertise(loadedproduct)}
                  className="btn w-full btn-outline "
                >
                  Advertise
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerDashboard;
