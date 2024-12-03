"use client";

import React from "react";
import styles from "./WhyUs.module.css";
import Image from "next/image";
import Container from "@/lib/components/Container/Container";

const WhyUs: React.FC = () => {
  return (
    <Container>
      <div className={styles.whyUsContainer}>
        <h2 className={styles.subHeader}>What We Offer</h2>
        <h1>Why Choose Us</h1>
        <div className={styles.flexParent}>
          <div className={styles.flexChild}>
            <Image
              src="/whyus/image1.png"
              alt="Why Choose Us"
              width={545}
              height={303}
              className={styles.image}
            />
          </div>
          <div className={styles.flexChild}>
            <h2>Deep African Roots, Global Expertise</h2>
            <p>
              Our understanding of African markets, combined with our global
              perspective, allows us to craft strategies that resonate locally
              while having global appeal. We bring the best of both worlds to
              the table, ensuring that our clients’ brands are positioned for
              success beyond borders.
            </p>
          </div>
        </div>

        <div className={styles.flexParentOne}>
          <div className={styles.flexChild}>
            <Image
              src="/whyus/image2.png"
              alt="Why Choose Us"
              width={545}
              height={303}
              className={styles.image}
            />
          </div>
          <div className={styles.flexChild}>
            <h2>Deep African Roots, Global Expertise</h2>
            <p>
              Our understanding of African markets, combined with our global
              perspective, allows us to craft strategies that resonate locally
              while having global appeal. We bring the best of both worlds to
              the table, ensuring that our clients’ brands are positioned for
              success beyond borders.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
