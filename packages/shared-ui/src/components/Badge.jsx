import React from 'react';

export const Badge = ({ children, variant = 'primary', size = 'medium' }) => {
  const baseStyles = {
    display: 'inline-block',
    padding: size === 'small' ? '2px 6px' : size === 'large' ? '6px 12px' : '4px 8px',
    fontSize: size === 'small' ? '10px' : size === 'large' ? '14px' : '12px',
    fontWeight: '600',
    borderRadius: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
    },
    success: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    warning: {
      backgroundColor: '#ffc107',
      color: '#333',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
    info: {
      backgroundColor: '#17a2b8',
      color: 'white',
    },
  };

  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return <span style={styles}>{children}</span>;
};
