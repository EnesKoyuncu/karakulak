import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { errorTranslations } from "@/data/errorData";
import "../styles/ErrorBoundary.css";

interface Props {
  children: React.ReactNode;
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const { language } = useLanguage();
  const texts = errorTranslations[language as keyof typeof errorTranslations];

  return (
    <div className="error-boundary-container">
      <motion.div
        className="error-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{texts.title}</h1>
        <p>{texts.message}</p>
        <motion.button
          className="refresh-button"
          onClick={resetErrorBoundary}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {texts.refreshButton}
        </motion.button>
        {process.env.NODE_ENV === "development" && (
          <div className="error-details">
            <h2>{texts.errorDetails}</h2>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const ErrorBoundary: React.FC<Props> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Hata sınırını sıfırla (örneğin, sayfayı yenile)
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};
