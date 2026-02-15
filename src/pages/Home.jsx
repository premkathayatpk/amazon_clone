import React, { useContext, useEffect } from "react";
import useFetch from "../hook/useFetch";

const Home = () => {
  const { isLoading, isError, products } = useFetch();
  console.log(products);
  // useEffect(() => {
  //   console.log(products);
  // }, []);

  if (!isError && isLoading) {
    return (
      <div>
        <h1>Loding......</h1>
      </div>
    );
  }
  return (
    <div>
      {products?.map((item) => {
        return (
          <div key={item.id}>
            <img className="h-30" src={item.thumbnail} alt="" />
            <h1>{item.title}</h1>
            <h1>${item.price}</h1>
            <h1>{item.rating}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
