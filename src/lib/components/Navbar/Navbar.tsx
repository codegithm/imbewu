"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Button from "../CustomButton/CustomButton";
import Image from "next/image";
import Container from "../Container/Container";

const Navbar: React.FC = () => {
  const handleContactClick = () => {
    alert("Contact us clicked!");
  };

  return (
    <div className={styles.navCont}>
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Image width={114} height={104} src="/logo.png" alt="logo" />
          </div>
          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <Button
            onClick={() => handleContactClick()}
            bgColor="var(--secondary)"
            textColor="var(--background)"
            hoverColor="var(--dark-secondary)"
            text="Contact Us"
          />
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
