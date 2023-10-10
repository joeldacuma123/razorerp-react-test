import React from "react";
import Navbar from "./Navbar";
import NavbarSection from "./NavbarSection";
import styles from "@/styles/Home.module.scss";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavbarSection />
      <div className={styles.main}>
        {children}
      </div>
    </>
  );
}
