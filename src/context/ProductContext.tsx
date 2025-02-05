import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import productData from "../data/products.json";
import { useLocalStorageCache } from "../utils/cache";

// Ürün tipi tanımlaması
interface ProductImage {
  url: string;
  alt: string;
}

// ProductFeature interface'ini kaldırdık çünkü kullanılmıyor
// interface ProductFeature {
//   title: string;
//   description: string;
// }

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

interface VehicleSpecification {
  model: string;
  wheelbase: string;
  garbageBinVolume: string;
}

interface ProductAdvantage {
  title: string;
  description: string;
}

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  images: ProductImage[];
  // features özelliğini kaldırdık çünkü kullanılmıyor
  // features: ProductFeature[];
  generalFeatures: string[];
  technicalSpecifications?: TechnicalSpecifications;
  vehicleSpecifications?: VehicleSpecification[];
  advantages?: ProductAdvantage[];
  keywords?: string[];
}

// Context için tip tanımlaması
interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  loading: boolean;
  error: string | null;
}

// Context oluşturma
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider component
interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useLocalStorageCache<Product[]>(
    "ayalka_products",
    [],
    { expireIn: 24 * 60 * 60 * 1000 } // 24 saat
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const initializeProducts = () => {
      try {
        if (products.length === 0) {
          // JSON dosyasından ürünleri al
          setProducts(productData.products);
        }
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bir hata oluştu");
        setLoading(false);
      }
    };

    initializeProducts();
  }, [products.length, setProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        loading,
        error,
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

// Gerekli export'ları ekleyelim
export type { Product, ProductContextType };
