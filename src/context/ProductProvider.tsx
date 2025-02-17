import React, { useEffect, useState, ReactNode } from "react";
import productData from "../data/products.json";
import { useLocalStorageCache } from "../utils/cache";
import {
  Product,
  ProductImage,
  ProductContext,
  TechnicalSpecifications,
} from "./ProductContext";

// JSON'dan gelen ham ürün verilerinin tipi

interface RawVehicleSpecification {
  model: string;
  wheelbase: string;
  garbageBinVolume: string;
}

interface RawAdvantageItem {
  title: string;
  description: string;
}

interface RawProduct {
  id: string;
  category: string;
  name: { tr: string; en: string };
  seoName: { tr: string; en: string };
  description: { tr: string; en: string };
  seoDescription: { tr: string; en: string };
  vehicleSpecifications?: RawVehicleSpecification[];
  generalFeatures: { tr: string[]; en: string[] };
  // Avantajlar artık ayrı "tr" ve "en" dizileri olarak geliyor
  advantages?: {
    tr: RawAdvantageItem[];
    en: RawAdvantageItem[];
  };
  keywords: { tr: string[]; en: string[] };
  images: {
    url: string;
    alt: { tr: string; en: string };
  }[];
  features?: { tr: string[]; en: string[] };
  bagajKapagi?: { tr: string[]; en: string[] };
  genel?: { tr: string[]; en: string[] };
  technicalSpecifications?: TechnicalSpecifications;
}

interface ProductProviderProps {
  children: ReactNode;
}

// Ham verileri çok dilli yapıya dönüştüren yardımcı fonksiyon
const transformProduct = (product: RawProduct): Product => {
  return {
    ...product,
    // "name", "description", "generalFeatures", "keywords", "features", "bagajKapagi", "genel" alanları
    // zaten çok dilli geliyorsa aynen bırakıyoruz.
    // Avantajlar için: Eğer advantages tanımlıysa, "tr" dizisini mapleyerek her indekste "en" dizisindeki ilgili elemanı eşleştiriyoruz.
    advantages: product.advantages
      ? product.advantages.tr.map((item, i) => ({
          tr: { title: item.title, description: item.description },
          en: {
            title: product.advantages!.en[i].title,
            description: product.advantages!.en[i].description,
          },
        }))
      : undefined,
    // Resimlerin URL'lerini normalize ediyoruz.
    images: product.images.map(
      (img): ProductImage => ({
        url: img.url.startsWith("/") ? img.url : `/${img.url}`,
        alt: img.alt,
      })
    ),
  };
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useLocalStorageCache<Product[]>(
    "karakulak_products",
    [],
    { expireIn: 24 * 60 * 60 * 1000 }
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cache temizleme effect'i (gerektiğinde)
  useEffect(() => {
    localStorage.clear();
  }, []);

  // Ürünleri yükleme effect'i: Bu effect yalnızca component mount edildiğinde çalışır.
  useEffect(() => {
    const initializeProducts = () => {
      try {
        if (products.length === 0) {
          const rawData = productData as { products: RawProduct[] };
          const productsWithValidImages: Product[] = rawData.products.map(
            (prod: RawProduct) => transformProduct(prod)
          );
          setProducts(productsWithValidImages);
        }
        setLoading(false);
      } catch (err) {
        console.error("Ürünler yüklenirken hata:", err);
        setError(err instanceof Error ? err.message : "Bir hata oluştu");
        setLoading(false);
      }
    };

    initializeProducts();
  }, []); // Boş dependency array: yalnızca mount sırasında çalışır.

  const contextValue = {
    products,
    selectedProduct,
    setSelectedProduct,
    loading,
    error,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
