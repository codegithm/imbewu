"use client";

import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftChild}>
        <Image
          src="/logo.svg"
          alt="Logo"
          className={styles.logo}
          width={100}
          height={100}
        />
        <p className={styles.description}>
          We nurture brands like seeds, helping them grow into global icons
          enriched by Africa's culture, creativity, and spirit.
        </p>
        <div className={styles.socialMedia}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className={styles.rightChild}>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.additionalDivs}>
          <div className={styles.contact}>
            <h1>Contact</h1>
            <a type="email">admin@imbewumediagroup.co.za</a>
          </div>
          <div className={styles.contact}>
            <h1>Phone</h1>
            <a type="tel">+27 63 967 9796</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
