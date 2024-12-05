"use client";

import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text }) => {
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc}
        alt="Card Background"
        className={styles.backgroundImage}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>{text}</div>
    </div>
  );
};

export default Card;
