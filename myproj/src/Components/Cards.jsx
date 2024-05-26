import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div>
      <div
        to={`/menu/${item._id}`}
        className="card w-64 bg-[#ede8e9] shadow-xl gap-5"
      >
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 rounded-full  ${
            isHeartFilled ? "text-rose-500" : "text-white"
          }`}
          onClick={handleHeartClick}
        >
          <FaHeart className="h-5 w-5 cursor-pointer" />
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              src={item.image}
              alt=""
              className="hover:scale-105 transition-all duration-200 md:h-72"
            />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>descrition of the item</p>
          <div className="card-actions justify-between mt-4">
            <h5 className="font-semibold mt-4">
              <span className="text-sm text-[#d61327]">$</span>
              {item.price}
            </h5>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
