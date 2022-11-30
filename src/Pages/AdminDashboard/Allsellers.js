import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const Allsellers = ({ user, i, setDbusers, dbusers }) => {
  const { loadedUser } = useContext(AuthContext);
  const [verify, setVerify] = useState(user?.isverified);

  // handle verify
  const handleVerify = (user) => {
    fetch(
      `https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/userverify/${user?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setVerify("Yes");
        if (data.modifiedCount > 0) {
          toast("User got verified");
        }
      });
  };

  //   admin role state for no load update

  const [adminrole, setAdminrole] = useState(user?.usertype);

  // handle admin
  const handleAdmin = (user) => {
    fetch(
      `https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/makeadmin/${user?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAdminrole("Admin");
        if (data.modifiedCount > 0) {
          toast("User got admin access");
        }
      });
  };

  // Deleting user
  const handleDelete = (user) => {
    const agree = window.confirm(`are you confirm to delete: ${user?.name}`);
    if (agree) {
      // sending data to server
      fetch(
        `https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/deleteuser/${user?._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingusers = dbusers.filter((bk) => bk._id != user._id);
            setDbusers(remainingusers);
            toast("User deleted");
          }
        });
    }
  };

  return (
    <tr>
      <th>{i}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        <button
          onClick={() => handleVerify(user)}
          disabled={
            user?.usertype == "Admin" ||
            verify == "Yes" ||
            loadedUser?.usertype !== "Admin"
              ? true
              : false
          }
          className="btn btn-outline btn-accent"
        >
          {user?.usertype == "Admin" || verify == "Yes"
            ? "Verified"
            : "Verify Now"}
        </button>
      </td>
      <td>
        <button
          onClick={() => handleAdmin(user)}
          disabled={
            adminrole == "Admin" || loadedUser?.usertype !== "Admin"
              ? true
              : false
          }
          className="btn btn-outline btn-accent"
        >
          {adminrole == "Admin" ? "Admin" : "Make Admin"}
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(user)}
          disabled={
            adminrole == "Admin" || loadedUser?.usertype !== "Admin"
              ? true
              : false
          }
          className="btn btn-warning"
        >
          Delete user
        </button>
      </td>
    </tr>
  );
};

export default Allsellers;
