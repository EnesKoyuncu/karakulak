import { createContext } from "react";

export interface TranslatedText {
  tr: string;
  en: string;
}

export interface TranslatedStringArray {
  tr: string[];
  en: string[];
}

export interface ProductImage {
  url: string;
  alt: TranslatedText;
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
  tr: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
}

export interface Product {
  id: string;
  category: TranslatedText;
  name: TranslatedText;
  seoName: TranslatedText;
  description: TranslatedText;
  seoDescription: TranslatedText;
  images: ProductImage[];
  generalFeatures: TranslatedStringArray;
  technicalSpecifications?: TechnicalSpecifications;
  vehicleSpecifications?: VehicleSpecification[];
  advantages?: ProductAdvantage[];
  keywords: TranslatedStringArray;
  features?: TranslatedStringArray;
  bagajKapagi?: TranslatedStringArray;
  genel?: TranslatedStringArray;
}

export interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  loading: boolean;
  error: string | null;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
