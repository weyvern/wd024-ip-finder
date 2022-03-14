import React from 'react';

const Layout = ({ children, className }) => {
  return <div className={`vh-100 ${className}`}>{children}</div>;
};

export default Layout;
