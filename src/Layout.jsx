import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
