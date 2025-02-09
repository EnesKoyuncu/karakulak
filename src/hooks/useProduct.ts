import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

// Custom hook
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
