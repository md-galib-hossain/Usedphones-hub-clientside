import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ book, loadedUser }) => {
  console.log(book);
  console.log(loadedUser);
  const devicename = book?.name;
  const deviceprice = book?.resaleprice;
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
          <form className="grid grid-cols-1 gap-3  mt-4">
            <label className="label">Your Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
              value={loadedUser?.name}
              disabled
            />
            <label className="label">Your email</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
              value={loadedUser?.email}
              disabled
            />
            <label className="label">Item name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
              value={devicename}
              disabled
            />
            <label className="label">Item price</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
              value={`BDT ${deviceprice}`}
              disabled
            />
            <label className="label">Phone number</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
            />
            <label className="label">Meeting location</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
            />
            <input
              className="btn btn-error w-full "
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
