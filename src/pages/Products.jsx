import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useFetch from "../hook/useFetch";

const Products = () => {
  const { isLoading, isError, products } = useFetch();
  const [filteredProduct, setFilteredProduct] = useState([]);
  const { state } = useLocation();
  //   console.log(state);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = products.filter((item) => item.category === state);
    setFilteredProduct(filtered);
  }, [products, state]);

  return (
    <section>
      <h1 className="text-center text-5xl font-bold py-5">
        <span className="text-green-700">Shop</span>{" "}
        <span className="text-orange-600">{state}</span>{" "}
      </h1>
      <div className="flex flex-wrap gap-10 justify-center py-10">
        {filteredProduct.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                navigate("/productDetails", { state: item });
              }}
              className="bg-white  w-80 overflow-hidden  rounded-xl"
            >
              <img className="h-60  " src={item.thumbnail} alt="" />
              <div className="py-2 px-8 space-y-2">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <h2 className="text-2xl font-bold">
                  $ <span className="text-orange-600">{item.price}</span>
                </h2>
                <h2 className="text-xl  font-semibold">{item.rating}</h2>
                <p className="text-blue-600 text-xl font-semibold text-center mb-3">
                  See more ........
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
