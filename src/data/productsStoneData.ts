export interface ProductsProps {
  title: string;
  description: string;
  images: string[];
  additionalInfo?: string;
}

interface ITranslation {
  zoomHint: string;
  swipeHint: string;
  mainImageAlt: string;
  thumbnailAlt: string;
  prevButton: string;
  nextButton: string;
  productImagesSection: string;
  productInfoSection: string;
}

export interface ITranslationsLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}

export const translations: ITranslationsLanguageSupport = {
  tr: {
    zoomHint: "Büyütmek için tıklayın",
    swipeHint: "← Kaydırarak görüntüleyin →",
    mainImageAlt: "Ana Görsel",
    thumbnailAlt: "Görsel",
    prevButton: "Önceki görseller",
    nextButton: "Sonraki görseller",
    productImagesSection: "Ürün Görselleri",
    productInfoSection: "Ürün Bilgisi",
  },
  en: {
    zoomHint: "Click to enlarge",
    swipeHint: "← Swipe to view →",
    mainImageAlt: "Main Image",
    thumbnailAlt: "Image",
    prevButton: "Previous images",
    nextButton: "Next images",
    productImagesSection: "Product Images",
    productInfoSection: "Product Information",
  },
};
