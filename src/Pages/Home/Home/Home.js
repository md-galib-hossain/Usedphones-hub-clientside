import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Brands from "../../Brands/Brands";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <h2 className="text-3xl my-8 font-bold">Categories</h2>
        <div className="grid lg:grid-cols-3 place-items-center gap-4 ">
          {categories.map((category) => (
            <div className="card w-96 bg-error text-primary-content">
              <div className="card-body">
                <h2 className="card-title justify-center my-2">
                  {category.brand}
                </h2>

                <div className="card-actions justify-center">
                  <Link to={`/category/${category.idno}`} className="btn">
                    Watch Phones
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Brands></Brands>
    </div>
  );
};

export default Home;
