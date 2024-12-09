'use client'

import React from "react";
import ParticlesBackground from "../effect/ParticlesBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      {children}
    </div>
  );
};

export default Layout;
