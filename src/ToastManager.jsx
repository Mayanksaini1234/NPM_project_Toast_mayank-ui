// src/ToastManager.jsx
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

let addToastHandler;

export const toast = (message, { type = 'info', duration = 3000 } = {}) => {
  if (addToastHandler) {
    addToastHandler({ id: Date.now(), message, type, duration });
  }
};

export const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    addToastHandler = (toast) => {
      setToasts((prev) => [...prev, toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, toast.duration);
    };
  }, []);

  return createPortal(
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      ))}
    </div>,
    document.body
  );
};
