import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ColorProvider from "../context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ColorProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        {/* Middle Content */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ColorProvider>
  );
};

export default Layout;
