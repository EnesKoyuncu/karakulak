import React from "react";
import "../styles/LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container" role="alert" aria-busy="true">
      <div className="loading-spinner"></div>
      <span className="loading-text">Yükleniyor...</span>
    </div>
  );
};

export default LoadingSpinner;
