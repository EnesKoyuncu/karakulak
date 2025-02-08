import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Metric } from "web-vitals";

// Event tipleri için type tanımları
export type EventCategory =
  | "page_view"
  | "product"
  | "gallery"
  | "contact"
  | "download"
  | "navigation";

export type EventAction =
  | "view"
  | "click"
  | "download"
  | "filter"
  | "search"
  | "submit";

interface EventProps {
  category: EventCategory;
  action: EventAction;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

// Development için basit bir logger
const devLogger = {
  log: (eventName: string, data: any) => {
    console.log(
      `%c[Analytics] ${eventName}`,
      "color: #2196F3; font-weight: bold;",
      data
    );
  },
  warn: (message: string) => {
    console.warn(`[Analytics Warning] ${message}`);
  },
  error: (error: any) => {
    console.error("[Analytics Error]", error);
  },
};

// Ana event tracking fonksiyonu
export const trackEvent = ({
  category,
  action,
  label,
  value,
  nonInteraction = false,
}: EventProps) => {
  // Development'ta sadece console'a yazdır
  devLogger.log("Event Tracked:", {
    category,
    action,
    label,
    value,
    nonInteraction,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
  });
};

// Sayfa görüntüleme tracking hook'u
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    devLogger.log("Page View:", {
      path: location.pathname,
      timestamp: new Date().toISOString(),
    });
  }, [location]);
};

// Performans metriklerini ölçme
export const trackPerformance = async () => {
  try {
    const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import("web-vitals");

    onCLS((metric: Metric) => {
      console.log("CLS:", metric.value);
      // Analytics gönderimi
    });

    onFID((metric: Metric) => {
      console.log("FID:", metric.value);
      // Analytics gönderimi
    });

    onLCP((metric: Metric) => {
      console.log("LCP:", metric.value);
      // Analytics gönderimi
    });

    onFCP((metric: Metric) => {
      console.log("FCP:", metric.value);
      // Analytics gönderimi
    });

    onTTFB((metric: Metric) => {
      console.log("TTFB:", metric.value);
      // Analytics gönderimi
    });
  } catch (error) {
    console.error("Web Vitals yüklenirken hata:", error);
  }
};

const calculateResourceTiming = (resources: PerformanceResourceTiming[]) => {
  return resources.reduce((total, resource) => {
    return total + (resource.responseEnd - resource.startTime);
  }, 0);
};

// Kullanıcı etkileşimlerini izleme
export const trackInteraction = (element: string, action: string) => {
  devLogger.log("User Interaction:", {
    element,
    action,
    timestamp: new Date().toISOString(),
  });
};

// Error tracking
export const trackError = (error: Error, componentName: string) => {
  devLogger.error({
    component: componentName,
    error: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
  });
};
