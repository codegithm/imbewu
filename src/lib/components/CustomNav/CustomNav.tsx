"use client";

import React, { useState } from "react";
import styles from "./CustomNav.module.css";
import Button from "../CustomButton/CustomButton";
import Image from "next/image";
import Container from "../Container/Container";

const CustomNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    alert("Contact us clicked!");
  };

  return (
    <div className={styles.navCont}>
      <Container>
        <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
          <div className={styles.logo}>
            <Image width={114} height={104} src="/logo.png" alt="logo" />
          </div>
          <button className={styles.menuButton} onClick={handleMenuClick}>
            ☰
          </button>
          <div className={styles.links}>
            <div className={styles.linkCont}>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
            </div>
            <Button
              onClick={() => handleContactClick()}
              bgColor="var(--secondary)"
              textColor="var(--background)"
              hoverColor="var(--dark-secondary)"
              text="Contact Us"
            />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default CustomNav;
