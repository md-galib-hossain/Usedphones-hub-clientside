import moment from "moment/moment";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Addproduct = () => {
  const navigate = useNavigate();
  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   imgbb api key
  const imagehostkey = process.env.REACT_APP_imgbb_key;

  const [data, setData] = useState({});
  const { loadedUser } = useContext(AuthContext);
  const date = moment().format(" Do MMMM  YYYY,");

  const handlemyform = (data) => {
    setData(data);
    const product = {
      idno: parseInt(data?.productid),
      brand: data?.brandname,
      name: data?.devicename,
      picture: data.imagelink,
      location: data?.productlocation,
      resaleprice: data?.askprice,
      orginalprice: data?.newprice,
      used: data?.usedperiod,
      condition: data?.productcondition,
      sellername: loadedUser?.name,
      email: loadedUser?.email,
      isbooked: "no",
      ispaid: "no",
      date: date,
      status: "available",
      isadvertised: "no",
      isreported: "no",
    };
    fetch(
      "https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/addproduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          navigate("/sellerdashboard");
          toast("You books have been added");
        }
      })

      .catch((er) => console.error(er));
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="w-8/12 p-7 ">
        <h2 className="text-2xl font-bold">Add Book</h2>
        <form onSubmit={handleSubmit(handlemyform)}>
          {/* select category */}
          <div className="grid lg:grid-cols-2 gap-2 justify-items-center ">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose category</span>
              </label>
              <select
                {...register("productid", { required: true })}
                className="select select-bordered select-error"
              >
                <option value="1">Samsung</option>
                <option value="2">Iphone</option>
                <option value="3">Oneplus</option>
              </select>
            </div>
            {/*Brand Name */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                {...register("brandname", { required: true })}
                className="input input-bordered w-full max-w-xs input-error"
              />
            </div>

            {/* device name */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Device name</span>
              </label>
              <input
                type="text"
                {...register("devicename", { required: true })}
                className="input input-bordered w-full max-w-xs input-error"
              />
            </div>
            {/* image link */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image link</span>
              </label>
              <input
                type="text"
                {...register("imagelink")}
                className="file-input file-input-bordered file-input-error w-full max-w-xs input-error"
              />
            </div>
            {/* productlocation */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your location</span>
              </label>
              <input
                type="text"
                {...register("productlocation", { required: true })}
                className="input input-bordered w-full max-w-xs input-error"
              />
            </div>
            {/* askprice */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Resale price</span>
              </label>
              <input
                type="text"
                {...register("askprice", { required: true })}
                className="input input-bordered w-full max-w-xs input-error"
              />
            </div>
            {/* newprice */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Orginal Price</span>
              </label>
              <input
                type="text"
                {...register("newprice", { required: true })}
                className="input input-bordered w-full max-w-xs input-error"
              />
            </div>
            {/* usedperiod */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Used time</span>
              </label>
              <input
                type="text"
                {...register("usedperiod", { required: true })}
                className="input input-bordered w-full max-w-xs input-error"
              />
            </div>
            {/* productcondition */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose condition</span>
              </label>
              <select
                {...register("productcondition", { required: true })}
                className="select select-bordered select-error"
              >
                <option value="Good">Good</option>
                <option value="Nod bad">Not Bad</option>
              </select>
            </div>
          </div>
          <input
            className="btn btn-error btn-wide mt-4"
            value="Upload"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
