import { useEffect, useState, DependencyList } from "react";

// -- Tip Tanımlamaları --

// Web Vitals metriklerinin tipini tanımlıyoruz.
export interface Metric {
  name: string;
  value: number;
  delta: number;
  id: string;
  entries?: PerformanceEntry[];
}

// ReportHandler, metrik bilgisini alan callback fonksiyonu için tip tanımıdır.
export type ReportHandler = (metric: Metric) => void;

// -- Hook ve Fonksiyonlar --

// Görsel önbelleğe alma hook'u
export const useImagePreload = (imagePaths: string[]): boolean => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Yükleme hatası: ${src}`));
      });
    };

    Promise.all(imagePaths.map((path) => preloadImage(path)))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Image preloading failed:", error);
        // Hata durumunda da devam etmek isteyebilirsiniz.
        setImagesLoaded(true);
      });

    return () => {
      // Cleanup: Component unmount olurken state sıfırlanır.
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
  dependencies: DependencyList = []
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
    // Bağımlılık dizisine importFn ve gelen diğer bağımlılıkları ekliyoruz.
  }, [importFn, ...dependencies]);

  return { component, error, loading };
};

// Web Vitals ölçümünü başlatan fonksiyon
export const measureWebVitals = async (): Promise<void> => {
  try {
    // web-vitals modülünü dinamik içe aktarın.
    // Burada, modülü tip olarak Partial bir obje şeklinde kabul ediyoruz.
    const webVitalsModule = (await import("web-vitals")) as unknown as Partial<{
      getCLS: (onReport: ReportHandler) => void;
      getFID: (onReport: ReportHandler) => void;
      getLCP: (onReport: ReportHandler) => void;
      onCLS: (onReport: ReportHandler) => void;
      onFID: (onReport: ReportHandler) => void;
      onLCP: (onReport: ReportHandler) => void;
    }>;

    // Ortak raporlama fonksiyonu
    const reportHandler: ReportHandler = (metric) => {
      console.log(`${metric.name}:`, metric.value);
    };

    if (
      webVitalsModule.getCLS &&
      webVitalsModule.getFID &&
      webVitalsModule.getLCP
    ) {
      // Eğer getXXX API'leri mevcutsa, bunları kullanıyoruz.
      webVitalsModule.getCLS(reportHandler);
      webVitalsModule.getFID(reportHandler);
      webVitalsModule.getLCP(reportHandler);
    } else if (
      webVitalsModule.onCLS &&
      webVitalsModule.onFID &&
      webVitalsModule.onLCP
    ) {
      // Aksi halde fallback olarak onXXX API'lerini kullanıyoruz.
      webVitalsModule.onCLS(reportHandler);
      webVitalsModule.onFID(reportHandler);
      webVitalsModule.onLCP(reportHandler);
    } else {
      console.error("Web Vitals API bulunamadı.");
    }
  } catch (error) {
    console.error("Web Vitals ölçümü başlatılamadı:", error);
  }
};

// Web Vitals raporlaması için fonksiyon
export async function reportWebVitals(): Promise<void> {
  try {
    const webVitalsModule = (await import("web-vitals")) as unknown as Partial<{
      getCLS: (onReport: ReportHandler) => void;
      getFID: (onReport: ReportHandler) => void;
      getLCP: (onReport: ReportHandler) => void;
      onCLS: (onReport: ReportHandler) => void;
      onFID: (onReport: ReportHandler) => void;
      onLCP: (onReport: ReportHandler) => void;
    }>;

    if (
      webVitalsModule.getCLS &&
      webVitalsModule.getFID &&
      webVitalsModule.getLCP
    ) {
      webVitalsModule.getCLS(console.log);
      webVitalsModule.getFID(console.log);
      webVitalsModule.getLCP(console.log);
    } else if (
      webVitalsModule.onCLS &&
      webVitalsModule.onFID &&
      webVitalsModule.onLCP
    ) {
      webVitalsModule.onCLS(console.log);
      webVitalsModule.onFID(console.log);
      webVitalsModule.onLCP(console.log);
    } else {
      console.error("Web Vitals API bulunamadı.");
    }
  } catch (error) {
    console.error("Web Vitals raporlama hatası:", error);
  }
}

// Navigation Timing ölçümünü yapan fonksiyon
export function measureTiming(): void {
  if (performance && performance.getEntriesByType) {
    const timing = performance.getEntriesByType("navigation")[0];
    console.log("Navigation Timing:", timing);
  }
}
