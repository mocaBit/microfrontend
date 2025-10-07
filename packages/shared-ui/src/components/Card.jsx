import React from 'react';

export const Card = ({ children, title, subtitle, padding = '20px' }) => {
  const cardStyles = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease',
  };

  const headerStyles = {
    padding: padding,
    borderBottom: '1px solid #e0e0e0',
  };

  const titleStyles = {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
  };

  const subtitleStyles = {
    margin: '4px 0 0 0',
    fontSize: '14px',
    color: '#666',
  };

  const bodyStyles = {
    padding: padding,
  };

  return (
    <div
      style={cardStyles}
      onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)')}
      onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)')}
    >
      {(title || subtitle) && (
        <div style={headerStyles}>
          {title && <h3 style={titleStyles}>{title}</h3>}
          {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
        </div>
      )}
      <div style={bodyStyles}>{children}</div>
    </div>
  );
};
