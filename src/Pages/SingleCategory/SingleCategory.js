import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import BookingModal from "./BookingModal";
import SingleCards from "./SingleCards";

const SingleCategory = () => {
  const products = useLoaderData();
  const [loadedproducts, setLoadedproducts] = useState(products);
  const { loadedUser, user } = useContext(AuthContext);
  const [book, setBook] = useState(null);

  //   load booked items by email query
  const url = `https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/bookeditems?bookedemail=${user?.email}`;
  const { data: bookedItems = [], isLoading } = useQuery({
    queryKey: ["addbooked", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const booked = await res.json();
      // console.log(booked);
      return booked;
    },
  });

  // report

  return (
    <div className="grid lg:grid-cols-3 place-items-center my-5 ">
      {loadedproducts.map((product) => (
        <SingleCards
          key={product._id}
          product={product}
          setBook={setBook}
          setLoadedproducts={setLoadedproducts}
        ></SingleCards>
      ))}
      {book && (
        <BookingModal
          setBook={setBook}
          loadedUser={loadedUser}
          book={book}
        ></BookingModal>
      )}
    </div>
  );
};

export default SingleCategory;
