import React from "react";
import { motion } from "framer-motion";
import "../styles/ErrorBoundary.css";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Burada hata loglama servisi entegre edilebilir
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="error-boundary-container">
            <motion.div
              className="error-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Beklenmeyen Bir Hata Oluştu</h1>
              <p>
                Özür dileriz, bir şeyler yanlış gitti. Lütfen sayfayı yenileyin
                veya daha sonra tekrar deneyin.
              </p>
              <motion.button
                className="refresh-button"
                onClick={() => window.location.reload()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sayfayı Yenile
              </motion.button>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="error-details">
                  <h2>Hata Detayları:</h2>
                  <pre>{this.state.error.toString()}</pre>
                  {this.state.errorInfo && (
                    <pre>{this.state.errorInfo.componentStack}</pre>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
