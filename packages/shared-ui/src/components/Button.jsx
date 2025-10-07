import React from 'react';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false
}) => {
  const baseStyles = {
    padding: size === 'small' ? '6px 12px' : size === 'large' ? '12px 24px' : '8px 16px',
    fontSize: size === 'small' ? '12px' : size === 'large' ? '18px' : '14px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    fontWeight: '500',
    transition: 'all 0.2s ease',
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
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#007bff',
      border: '2px solid #007bff',
    },
  };

  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <button
      style={styles}
      onClick={onClick}
      disabled={disabled}
      onMouseOver={(e) => !disabled && (e.target.style.opacity = '0.9')}
      onMouseOut={(e) => !disabled && (e.target.style.opacity = '1')}
    >
      {children}
    </button>
  );
};
