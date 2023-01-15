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
  const url =
    "https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/advertised";
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
      <div>
        <h1 className="text-3xl my-12 font-bold">Buy Your Gadget in 3 Steps</h1>
        <div className="grid lg:grid-cols-3 place-items-center">
          {/* card1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/RzzkDf7/price-tag.png"
                alt="Shoes"
                className="rounded-xl h-20 w-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Check price</h2>
              <p>Select your device</p>
            </div>
          </div>
          {/* card2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/SsJtQzC/location.png"
                alt="Shoes"
                className="rounded-xl h-20 w-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Schedule Pickup</h2>
              <p>Book product with your location</p>
            </div>
          </div>
          {/* card3 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/my293MT/credit-card.png"
                alt="Shoes"
                className="rounded-xl h-20 w-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Payment</h2>
              <p>Last step Easy online payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
