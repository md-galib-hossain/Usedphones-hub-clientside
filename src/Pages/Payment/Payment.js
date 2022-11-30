import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const navigation = useNavigation();
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
  if (navigation.state === "loading") {
    <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <h3 className="text-3xl">Payment for : {name}</h3>
      <h3 className="text-2xl">You have to pay : BDT {resaleprice}</h3>
      <div className="w-8/12 mx-auto my-12">
        <Elements stripe={stripePromise}>
          <Checkoutform booked={booked} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
