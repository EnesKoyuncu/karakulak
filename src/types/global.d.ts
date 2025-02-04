interface Window {
  gtag: (
    command: string,
    action: any,
    params?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      non_interaction?: boolean;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}
