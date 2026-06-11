import React, { useEffect } from 'react'

export const Alert = ({ alert, onClose }) => {
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert, onClose]);

  if (!alert) return null;

  return (
    <div className="container mt-3">
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.msg}
        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
      </div>
    </div>
  )
}
