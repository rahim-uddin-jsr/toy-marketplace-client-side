import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToys = () => {
  const allToys = useLoaderData();
  const [toys, setToys] = useState([]);
  const [searchTex, setSearchText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/toys?search=${searchTex}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [searchTex]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.searchTextElement.value);
  };
  return (
    <div>
      <div className="form-control my-10">
        <form onSubmit={handleSearch} className="input-group justify-center">
          <input
            name="searchTextElement"
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button type="submit" className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => (
              <ToyRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
