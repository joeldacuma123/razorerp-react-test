import React from "react";
import Navbar from "./Navbar";
import NavbarSection from "./NavbarSection";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavbarSection />
      <div className="container-fluid">{children}</div>
    </>
  );
}
