import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const unmodified = toys.filter((toy) => toy._id !== id);
              setToys(unmodified);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Toy Picture</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys?.map((toy) => (
              <MyToyRow key={toy?._id} toy={toy} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
