import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-red-100">{children}</div>;
};

export default Layout;
