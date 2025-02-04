import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
export const trackPerformance = () => {
  if (typeof window.performance !== "undefined") {
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType("paint");

    const metrics = {
      // Sayfa yükleme metrikleri
      pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domLoadTime:
        navigation.domContentLoadedEventEnd -
        navigation.domContentLoadedEventStart,
      firstPaint: paint.find((entry) => entry.name === "first-paint")
        ?.startTime,
      firstContentfulPaint: paint.find(
        (entry) => entry.name === "first-contentful-paint"
      )?.startTime,

      // Resource metrikleri
      resourceCount: performance.getEntriesByType("resource").length,
      resourceLoadTime: performance
        .getEntriesByType("resource")
        .reduce((total, resource) => {
          return total + (resource.responseEnd - resource.startTime);
        }, 0),
    };

    devLogger.log("Performance Metrics:", metrics);
    return metrics;
  }
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
