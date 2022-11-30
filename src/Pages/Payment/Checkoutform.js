import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const Checkoutform = ({ booked }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { resaleprice, bookedemail, _id, name } = booked;
  console.log(booked);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookedemail }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data?.clientSecret));
  }, [resaleprice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: bookedemail,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess("Congrats! your payment completed");
      setTransactionId(paymentIntent.id);

      const payment = {
        resaleprice,
        transactionId: paymentIntent?.id,
        bookedemail,
        bookingId: _id,
        name,
      };

      fetch(
        "https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/payments",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.insertedId) {
          }
        });
    }
    setProcessing(false);
  };
  console.log(bookedemail);
  return (
    <>
      <div>
        {" "}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-wide mt-4 btn-error"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </form>
      </div>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success} </p>
          <p>
            your transaction id:
            <span className="font-bold">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default Checkoutform;
