import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const OrderCard = (props) => {
  const removeItem = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newCart = cart.filter((item) => item.id !== props.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.location.reload();
  };

  return (
    <div className=" rounded-lg p-4 flex space-x-3">
      <div className="flex">
        <img className="w-24 object-contain" src={props.image} alt="" />
      </div>
      <div className="flex flex-col space-y-3 flex-grow">
        <h5 className="text-base poppins text-gray-700">{props.title}</h5>
        <h1 className="font-semibold text-lg text-primary poppins">
          ${props.price.toFixed(2)}
        </h1>
        <p className="text-sm poppins text-gray-400">{props.type}</p>
      </div>

      <div className="flex items-center px-4 py-2 space-x-3">
        <span className="text-lg text-gray-700 poppins select-none">
          {props.quantity} items
        </span>
      </div>

      {/* remove button  */}
      <div className="flex flex-col items-center justify-center">
        <AiOutlineDelete
          className="w-6 h-6 text-gray-600 transform transition hover:scale-105 duration-500 cursor-pointer"
          onClick={removeItem}
        />
      </div>
    </div>
  );
};

export default OrderCard;
