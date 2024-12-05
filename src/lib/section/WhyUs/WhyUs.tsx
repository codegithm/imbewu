"use client";

import React from "react";
import styles from "./WhyUs.module.css";
import Image from "next/image";

const WhyUs: React.FC = () => {
  return (
    <div className={styles.whyUsContainer}>
      <h2 className={styles.subHeader}>What We Offer</h2>
      <h1>Why Choose Us</h1>
      <div className={`${styles.flexParent} ${styles.bottomBorder}`}>
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
            while having global appeal. We bring the best of both worlds to the
            table, ensuring that our clients’ brands are positioned for success
            beyond borders.
          </p>
        </div>
      </div>

      <div className={`${styles.flexParentOne} ${styles.bottomBorder}`}>
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
          <h2>Innovative Solutions</h2>
          <p>
            We believe in staying ahead of the curve, constantly pushing
            creative and strategic boundaries. Our team is committed to
            innovation, always seeking new ways to tell your story, connect with
            your audience, and drive your brand forward.
          </p>
        </div>
      </div>

      <div className={`${styles.flexParent} ${styles.bottomBorder}`}>
        <div className={styles.flexChild}>
          <Image
            src="/whyus/image3.png"
            alt="Why Choose Us"
            width={545}
            height={303}
            className={styles.image}
          />
        </div>
        <div className={styles.flexChild}>
          <h2>Client-Centric Approach</h2>
          <p>
            Your brand’s success is our success. We work closely with you,
            tailoring our services to meet your unique needs and objectives,
            providing solutions that not only meet but exceed expectations.
          </p>
        </div>
      </div>

      <div className={styles.flexParentOne}>
        <div className={styles.flexChild}>
          <Image
            src="/whyus/image4.png"
            alt="Why Choose Us"
            width={545}
            height={303}
            className={styles.image}
          />
        </div>
        <div className={styles.flexChild}>
          <h2>A Proven Track Record</h2>
          <p>
            With a portfolio of successful projects across various industries,
            Imbewu Media Group has a track record of delivering tangible
            results. Our approach is rooted in data, creativity, and a passion
            for excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
