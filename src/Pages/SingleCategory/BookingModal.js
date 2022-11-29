import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ book, loadedUser, setBook }) => {
  const devicename = book?.name;
  const {} = useContext(AuthContext);
  const deviceprice = book?.resaleprice;
  // getting form  details
  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookedname = form.username.value;
    const bookedemail = form.bookedemail.value;
    const name = form.name.value;
    const resaleprice = form.resaleprice.value;
    const bookednumber = form.bookednumber.value;
    const bookedlocation = form.bookedlocation.value;
    const booked = {
      bookedname,
      bookedemail,
      name,
      resaleprice,
      bookednumber,
      bookedlocation,
      idno: book?.idno,
      brand: book?.brand,
      picture: book?.picture,
      condition: book?.condition,
      used: book?.used,
      orginalprice: book?.orginalprice,
      sellername: book?.sellername,
      condition: book?.condition,
      location: book?.location,
    };
    // send book item to backend

    fetch("http://localhost:5000/addbooked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booked),
    })
      .then((res) => res.json())
      .then((data) => {
        // setBookeditemname(booked?.name);

        if (data.acknowledged) {
          toast("You have successfully booked the item");
          form.reset();
        }
      })

      .catch((er) => console.error(er));

    setBook(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <h3 className="text-lg font-bold"></h3> */}
          <form
            onSubmit={handlesubmit}
            className="grid grid-cols-1 gap-1  mt-4"
          >
            <label className="label">Your Name</label>
            <input
              name="username"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={loadedUser?.name}
              disabled
            />
            <label className="label">Your email</label>
            <input
              name="bookedemail"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={loadedUser?.email}
              disabled
            />
            <label className="label">Item name</label>
            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={devicename}
              disabled
            />
            <label className="label">Item price</label>
            <input
              name="resaleprice"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={`BDT ${deviceprice}`}
              disabled
            />
            <label className="label">Phone number</label>
            <input
              name="bookednumber"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <label className="label">Meeting location</label>
            <input
              name="bookedlocation"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              className="btn btn-error w-full mt-2"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
