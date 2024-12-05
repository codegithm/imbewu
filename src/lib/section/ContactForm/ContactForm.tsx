"use client";

import React from "react";
import styles from "./ContactForm.module.css";
import CustomButton from "@/lib/components/CustomButton/CustomButton";

const ContactForm: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Let’s Cultivate Your Brand Let’s Harvest Success.</h1>
      <p>
        At Imbewu Media Group, we don’t just grow brands; we harvest success.
        Let us partner with you to take your brand from local relevance to
        global prominence.
      </p>
      <form className={styles.formContainer}>
        <div className={styles.row}>
          <label className={styles.label} htmlFor="name">
            Your Name*
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.flexInput}>
            <label className={styles.label} htmlFor="email">
              E-mail Address*
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className={styles.flexInput}>
            <label className={styles.label} htmlFor="phone">
              Phone Number*
            </label>
            <input
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.flexInput}>
            <label className={styles.label} htmlFor="date">
              Date*
            </label>
            <input
              className={styles.input}
              type="date"
              id="date"
              name="date"
              required
            />
          </div>
          <div className={styles.flexInput}>
            <label className={styles.label} htmlFor="time">
              Time*
            </label>
            <input
              className={styles.input}
              type="time"
              id="time"
              name="time"
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <label className={styles.label} htmlFor="message">
            Messages*
          </label>
          <textarea
            className={styles.textArea}
            id="message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className={styles.formButtom}>
          <CustomButton
            text="Make Appoitment"
            bgColor="var(--quaternary)"
            textColor="var(--background)"
            hoverColor="var(--tertiary)"
          />
        </div>
      </form>
      <div className={styles.backdrop}></div>
    </div>
  );
};

export default ContactForm;
