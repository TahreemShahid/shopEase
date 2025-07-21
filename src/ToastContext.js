import React, { createContext, useState, useCallback } from "react";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
}

function Toast({ message, type }) {
  return (
    <div className={`toast toast-${type}`}>{message}</div>
  );
} 