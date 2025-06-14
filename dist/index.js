'use strict';

var React = require('react');
var reactDom = require('react-dom');

// src/ToastManager.jsx
let addToastHandler;
const toast = (message, {
  type = 'info',
  duration = 3000
} = {}) => {
  if (addToastHandler) {
    addToastHandler({
      id: Date.now(),
      message,
      type,
      duration
    });
  }
};
const ToastManager = () => {
  const [toasts, setToasts] = React.useState([]);
  React.useEffect(() => {
    addToastHandler = toast => {
      setToasts(prev => [...prev, toast]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, toast.duration);
    };
  }, []);
  return /*#__PURE__*/reactDom.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "toast-container"
  }, toasts.map(toast => /*#__PURE__*/React.createElement("div", {
    key: toast.id,
    className: `toast toast-${toast.type}`
  }, toast.message))), document.body);
};

exports.ToastManager = ToastManager;
exports.toast = toast;
