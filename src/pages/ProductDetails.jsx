import React from "react";
import { useLocation } from "react-router";

const ProductDetails = () => {
  const { state } = useLocation();
  //   console.log(state);
  return (
    <div className="bg-white rounded-2xl p-2  w-50">
      <img className="h-30" src={state.thumbnail} alt="" />
      <h1>{state.title}</h1>
      <h1>${state.price}</h1>
      <h1>{state.rating}</h1>

      <div className="flex justify-evenly mb-4">
        <button className=" bg-green-500 text-white font-semibold py-2 px-8 rounded-xl ">
          Buy Now
        </button>
        <button className=" bg-orange-600 text-white font-semibold py-2 px-5 rounded-xl ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
