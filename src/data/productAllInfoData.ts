interface ITranslation {
  vehicleSpecifications?: string;
  advantages?: string;
  truckBrand?: string;
  wheelbase?: string;
  garbageBinVolume?: string;
  vehicleSpecsTableLabel: string;
  vehicleSpecsCaption: string;
  generalFeatures: string;
  productPageMain: string;
}

export interface ITranslationsLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}

// Dil bazlı arayüz metinleri (sabit metinler)
export const translations: ITranslationsLanguageSupport = {
  tr: {
    vehicleSpecifications: "Araç Spesifikasyonları",
    generalFeatures: "Genel Özellikler",
    advantages: "Avantajlar",
    truckBrand: "Marka",
    wheelbase: "Dingil Mesafesi",
    garbageBinVolume: "Çöp Kapasitesi",
    vehicleSpecsTableLabel: "Araç Spesifikasyonları Tablosu",
    vehicleSpecsCaption: "Araç Spesifikasyonları",
    productPageMain: "Ürün Detayları",
  },
  en: {
    vehicleSpecifications: "Vehicle Specifications",
    generalFeatures: "General Features",
    advantages: "Advantages",
    truckBrand: "Truck Brand",
    wheelbase: "Wheelbase",
    garbageBinVolume: "Garbage Bin Volume",
    vehicleSpecsTableLabel: "Vehicle Specifications Table",
    vehicleSpecsCaption: "Vehicle Specifications",
    productPageMain: "Product Details",
  },
};
