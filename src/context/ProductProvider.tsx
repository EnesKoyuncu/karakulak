import React, { useEffect, useState, ReactNode } from "react";
import productData from "../data/products.json";
import { useLocalStorageCache } from "../utils/cache";
import { Product, ProductImage, ProductContext } from "./ProductContext";

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
    { expireIn: 24 * 60 * 60 * 1000 }
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cache temizleme effect'i
  useEffect(() => {
    localStorage.clear();
  }, []);

  // Ürünleri yükleme effect'i
  useEffect(() => {
    const initializeProducts = () => {
      try {
        if (products.length === 0) {
          const productsWithValidImages = productData.products.map(
            (product) => ({
              ...product,
              images: product.images.map((img) => ({
                url: img.url.startsWith("/") ? img.url : `/${img.url}`,
                alt: img.alt || product.name,
              })) as ProductImage[],
            })
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
  }, [products.length, setProducts]);

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
