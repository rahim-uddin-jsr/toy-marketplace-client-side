import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  const { sellerName, productName, subCategory, price, quantity, _id } = toy;
  return (
    <tr className="text-center">
      <td>
        <div className="font-bold">{sellerName}</div>
      </td>
      <td className="">
        <span>{productName}</span>
      </td>
      <td>
        <div className="font-bold">{subCategory}</div>
      </td>
      <td>
        <div className="font-bold">{price}</div>
      </td>
      <td>
        <div className="font-bold">{quantity}</div>
      </td>

      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyRow;
