import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Advertised from "../../Advertised/Advertised";
import Banner from "../../Banner/Banner";
import Brands from "../../Brands/Brands";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  const categories = useLoaderData();

  //   load advertised
  const url = "http://localhost:5000/advertised";
  const { data: advertiseditems = [], isLoading } = useQuery({
    queryKey: ["advertised", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const advertised = await res.json();

      return advertised;
    },
  });

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <h2 className="text-3xl my-8 font-bold">Categories</h2>
        <div className="grid lg:grid-cols-3 place-items-center gap-4 ">
          {categories?.map((category) => (
            <div className="card w-96 bg-error text-primary-content">
              <div className="card-body">
                <h2 className="card-title justify-center my-2">
                  {category.brand}
                </h2>

                <div className="card-actions justify-center">
                  <Link to={`/category/${category?.idno}`} className="btn">
                    Watch Phones
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Brands></Brands>
      {advertiseditems?.length > 0 && (
        <>
          <h1 className="text-3xl my-12 font-bold">Advertised</h1>
          <div className="grid lg:grid-cols-3 place-items-center  ">
            {advertiseditems?.map((advertiseditem) => (
              <Advertised
                key={advertiseditem?._id}
                advertiseditem={advertiseditem}
              ></Advertised>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
