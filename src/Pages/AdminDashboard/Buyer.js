import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const Buyer = ({ buyer, i, updatedbuyers, setUpdatedbuyers }) => {
  const { loadedUser } = useContext(AuthContext);
  // Deleting user
  const handleDelete = (buyer) => {
    const agree = window.confirm(`are you confirm to delete: ${buyer?.name}`);
    if (agree) {
      // sending data to server
      fetch(
        `https://b612-used-products-resale-server-side-mdgalibhossain1.vercel.app/deletebuyer/${buyer?._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingbuyers = updatedbuyers.filter(
              (bk) => bk._id != buyer?._id
            );
            setUpdatedbuyers(remainingbuyers);
            toast("Buyer deleted");
          }
        });
    }
  };
  return (
    <tr>
      <th>{i}</th>
      <td>{buyer?.name}</td>
      <td>{buyer?.email}</td>

      <td>
        <button
          onClick={() => handleDelete(buyer)}
          disabled={loadedUser?.usertype !== "Admin" && true}
          className="btn btn-warning"
        >
          Delete user
        </button>
      </td>
    </tr>
  );
};

export default Buyer;
