import React from "react";
import "../styles/LoadingSpinner.css";
import { useLanguage } from "@/hooks/useLanguage";

const LoadingSpinner: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="loading-container" role="alert" aria-busy="true">
      <div className="loading-spinner"></div>
      <span className="loading-text">
        {language === "tr" ? "Yükleniyor..." : "Loading..."}
      </span>
    </div>
  );
};

export default LoadingSpinner;
