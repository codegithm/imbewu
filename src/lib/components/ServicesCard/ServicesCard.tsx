"use client";

import React from "react";
import styles from "./ServicesCard.module.css";
import Image from "next/image";

interface ServicesCardProps {
  imgSrc: string;
  heading: string;
  text: string;
  borderType: "left" | "right" | "none";
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  imgSrc,
  heading,
  text,
  borderType,
}) => {
  return (
    <div
      className={`${styles.card} ${
        borderType === "left"
          ? styles.leftBorder
          : borderType === "right"
          ? styles.rightBorder
          : ""
      }`}
    >
      <Image
        className={styles.image}
        src={imgSrc}
        alt={`${heading} icon`}
        width={50}
        height={50}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.header}>{heading}</h3>
        <p className={styles.subHeader}>{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
