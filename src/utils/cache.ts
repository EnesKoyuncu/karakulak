import { useState, useEffect } from "react";

interface CacheOptions {
  expireIn?: number; // milisaniye cinsinden
}

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

// LocalStorage cache yönetimi için util
export const useLocalStorageCache = <T>(
  key: string,
  initialData: T,
  options: CacheOptions = {}
) => {
  const [data, setData] = useState<T>(() => {
    try {
      const cached = localStorage.getItem(key);
      if (cached) {
        const { data, timestamp }: CacheItem<T> = JSON.parse(cached);

        // Cache süresi kontrolü
        if (options.expireIn && Date.now() - timestamp > options.expireIn) {
          localStorage.removeItem(key);
          return initialData;
        }

        return data;
      }
    } catch (error) {
      console.error("Cache reading error:", error);
    }
    return initialData;
  });

  useEffect(() => {
    try {
      const cacheItem: CacheItem<T> = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(key, JSON.stringify(cacheItem));
    } catch (error) {
      console.error("Cache writing error:", error);
    }
  }, [key, data]);

  return [data, setData] as const;
};

// SessionStorage cache yönetimi için util
export const useSessionStorageCache = <T>(key: string, initialData: T) => {
  const [data, setData] = useState<T>(() => {
    try {
      const cached = sessionStorage.getItem(key);
      return cached ? JSON.parse(cached) : initialData;
    } catch (error) {
      console.error("Session cache reading error:", error);
      return initialData;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Session cache writing error:", error);
    }
  }, [key, data]);

  return [data, setData] as const;
};

// Memory cache için basit bir util
const memoryCache = new Map<string, CacheItem<any>>();

export const useMemoryCache = <T>(
  key: string,
  initialData: T,
  options: CacheOptions = {}
) => {
  const [data, setData] = useState<T>(() => {
    const cached = memoryCache.get(key);
    if (cached) {
      if (
        options.expireIn &&
        Date.now() - cached.timestamp > options.expireIn
      ) {
        memoryCache.delete(key);
        return initialData;
      }
      return cached.data;
    }
    return initialData;
  });

  useEffect(() => {
    memoryCache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }, [key, data]);

  return [data, setData] as const;
};

// Cache temizleme util'i
export const clearCache = (type: "all" | "local" | "session" | "memory") => {
  switch (type) {
    case "all":
      localStorage.clear();
      sessionStorage.clear();
      memoryCache.clear();
      break;
    case "local":
      localStorage.clear();
      break;
    case "session":
      sessionStorage.clear();
      break;
    case "memory":
      memoryCache.clear();
      break;
  }
};
