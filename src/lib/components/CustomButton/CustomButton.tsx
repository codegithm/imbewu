"use client";

import React from "react";
import styles from "./CustomButton.module.css";

interface ButtonProps {
  onClick?: () => void;
  bgColor: string;
  textColor: string;
  hoverColor: string;
  text: string;
  show?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  bgColor,
  textColor,
  hoverColor,
  text,
  show,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        display: show ? show : "block",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      {text}
    </button>
  );
};

export default CustomButton;
