import React from "react";
import Image from "next/image";
import styles from "./Cultivating.module.css";
import Container from "@/lib/components/Container/Container";

const Cultivating: React.FC = () => {
  return (
    <Container>
      <div className={styles.cultivating}>
        <h2 className={`${styles.textAlign} ${styles.subHeader}`}>
          Imbewu Media Group
        </h2>
        <h1 className={styles.textAlign}>
          Cultivating Africa's Brands into Global Icons
        </h1>
        <p className={styles.textAlign}>
          At Imbewu Media Group, we are more than a strategic brand and
          communications agency—we are the soil where brands grow and flourish.
          Drawing inspiration from the rich African concept of "Imbewu," meaning
          "seed," we cultivate brands with deep care and precision, nurturing
          them from their core to realize their full potential. Our mission is
          to grow African brands into global icons, leveraging the cultural
          wealth, creativity, and entrepreneurial spirit of the continent.
        </p>
        <div className={styles.flexContainer}>
          <ul className={styles.customList}>
            <li>Strategic Brand Consulting</li>
            <li>Integrated Communications</li>
            <li>Digital & Social Media Strategy</li>
            <li>Creative Design & Development</li>
            <li>Events & More</li>
          </ul>
          <div className={styles.imageContainer}>
            <Image
              src="/cultivate.png" // Ensure the image is placed in the public directory
              alt="Description of image"
              width={630} // Adjust based on your image dimensions
              height={406} // Adjust based on your image dimensions
              className={styles.plantImage}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cultivating;
