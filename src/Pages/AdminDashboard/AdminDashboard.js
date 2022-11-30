import React, { useContext, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Allbuyers from "./Allbuyers";
import Allsellers from "./Allsellers";

const AdminDashboard = () => {
  const users = useLoaderData();
  const [dbusers, setDbusers] = useState(users);
  const { loadedUser, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="my-3">
      <Link to="/allbuyers" className="btn btn-outline btn-wide  ">
        All Buyers
      </Link>
      <h1 className="mt-3 text-2xl font-bold">All sellers</h1>
      <div className=" mt-5 w-11/12 mx-auto overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>VERIFY</th>
              <th>ROLE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {dbusers.map((user, i) => (
              <Allsellers
                i={i}
                setDbusers={setDbusers}
                dbusers={dbusers}
                key={user?._id}
                user={user}
              ></Allsellers>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
