import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  return (
    <tr className="text-center">
      <td>
        <div className="font-bold">{toy.sellerName}</div>
      </td>
      <td className="">
        <span>{toy.productName}</span>
      </td>
      <td>
        <div className="font-bold">{toy.subCategory}</div>
      </td>
      <td>
        <div className="font-bold">{toy.price}</div>
      </td>
      <td>
        <div className="font-bold">{toy.quantity}</div>
      </td>

      <th>
        <Link to={`/toy/${toy._id}`}>
          <button className="btn">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyRow;
