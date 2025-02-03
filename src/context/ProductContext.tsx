import React, { createContext, useContext } from "react";
import productData from "../data/products.json";

// Ürün tipi tanımlaması
interface ProductImage {
  url: string;
  alt: string;
}

interface ProductFeature {
  title: string;
  description: string;
}

interface TechnicalSpecifications {
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  capacity: {
    volume: string;
    weight: string;
  };
  materials: string[];
  hydraulicSystem: {
    pressure: string;
    flowRate: string;
    tankCapacity: string;
  };
}

export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  images: ProductImage[];
  features: ProductFeature[];
  generalFeatures: string[];
  technicalSpecifications: TechnicalSpecifications;
}

// Context için tip tanımlaması
interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

// Context oluşturma
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider component
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  return (
    <ProductContext.Provider
      value={{
        products: productData.products,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
