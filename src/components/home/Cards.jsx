import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hook/useFetch";

const Cards = () => {
  const { isLoading, isError, products } = useFetch();
  const navigate = useNavigate();
  // console.log(products);

  const groupProducts = useMemo(() => {
    return products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);

      return acc;
    }, {});
  }, [products]);

  if (!isError && isLoading) {
    return (
      <div>
        <h1>Loding......</h1>
      </div>
    );
  }
  return (
    <section className="flex flex-wrap gap-6 justify-between p-10">
      {Object.entries(groupProducts).map(([category, items]) => (
        <div
          key={category}
          className="  h-auto rounded-xl bg-white  w-85 pb-3 "
          onClick={() => {
            navigate("/products", { state: category });
          }}
        >
          <h2 className="text-xl font-bold px-5 py-3">Shop {category}</h2>
          <div className=" flex flex-wrap justify-evenly items-center gap-y-2 ">
            {items.slice(0, 4).map((product) => (
              <div key={product.id} className=" w-35 h-55 ">
                <img
                  className="w-[100%] h-35 bg-gray-300"
                  src={product.thumbnail}
                  alt=""
                />
                <p className="py-2 text-sm text-gray-600 font-semibold">
                  {product.title}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center font-semibold text-blue-500  ">More.....</p>
        </div>
      ))}
    </section>
  );
};

export default Cards;
