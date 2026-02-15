import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      let res = await fetch("https://dummyjson.com/products");
      res = await res.json();
      setProducts(res.products);

      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { isLoading, isError, products };
};

export default useFetch;
