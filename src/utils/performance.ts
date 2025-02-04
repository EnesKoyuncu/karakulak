import { useEffect, useState } from "react";

// Görsel önbelleğe alma hook'u
export const useImagePreload = (imagePaths: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagePaths.length;

    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(imagePaths.map((path) => preloadImage(path)))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Image preloading failed:", error);
        setImagesLoaded(true); // Hata durumunda da devam et
      });

    return () => {
      // Cleanup
      setImagesLoaded(false);
    };
  }, [imagePaths]);

  return imagesLoaded;
};

// Intersection Observer hook'u
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isIntersecting] as const;
};

// Dinamik import için lazy loading hook'u
export const useDynamicImport = <T>(
  importFn: () => Promise<{ default: T }>,
  dependencies: any[] = []
) => {
  const [component, setComponent] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    importFn()
      .then((module) => {
        setComponent(module.default);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, dependencies);

  return { component, error, loading };
};

// Performans metrikleri için util
export const measurePerformance = (metricName: string) => {
  const start = performance.now();
  return {
    end: () => {
      const duration = performance.now() - start;
      console.log(`${metricName} took ${duration}ms`);
      // Burada analytics servisi entegre edilebilir
      return duration;
    },
  };
};
