import { createContext } from "react";

// Ürün tipi tanımlaması
export interface ProductImage {
  url: string;
  alt: string;
}

export interface TechnicalSpecifications {
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

export interface VehicleSpecification {
  model: string;
  wheelbase: string;
  garbageBinVolume: string;
}

export interface ProductAdvantage {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  images: ProductImage[];
  generalFeatures: string[];
  technicalSpecifications?: TechnicalSpecifications;
  vehicleSpecifications?: VehicleSpecification[];
  advantages?: ProductAdvantage[];
  keywords?: string[];
}

// Context için tip tanımlaması
export interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  loading: boolean;
  error: string | null;
}

// Context oluşturma
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
