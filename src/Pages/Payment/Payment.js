import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booked = useLoaderData();
  const {
    bookedemail,
    bookedlocation,
    bookedname,
    bookednumber,
    brand,
    condition,
    location,
    picture,
    name,
    resaleprice,
    sellername,
    used,
  } = booked;
  console.log(booked);
  return <div></div>;
};

export default Payment;
