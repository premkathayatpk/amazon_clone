import { createContext } from "react";

export const products = createContext();

const ProductProvider = ({ children }) => {
    
  return (
    <ProductProvider.Provider value={products}>
      {children}
    </ProductProvider.Provider>
  );
};
export default ProductProvider;
