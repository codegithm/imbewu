import React from "react";
import Image from "next/image";
import styles from "./Mission.module.css";
import Container from "@/lib/components/Container/Container";

const Mission: React.FC = () => {
  return (
    <Container>
      <div className={styles.mission}>
        <h2 className={styles.subHeader}>Our Vision</h2>
        <h1>Our Mission</h1>
        <p>
          To see African brands thrive on the global stage, shaping narratives,
          influencing trends, and becoming household names across the world.
        </p>
        <p>
          We aim to provide brands with the strategic tools, innovative
          solutions, and creative storytelling needed to drive meaningful
          connections with their audiences and create lasting impact. At Imbewu
          Media Group, we cultivate excellence, sowing the seeds of success in
          every project we undertake.
        </p>
        <div className={styles.imagesContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/plant.png" // Ensure the image is placed in the public directory
              alt="Smaller image description"
              width={450} // Adjust based on your image dimensions
              height={354} // Adjust based on your image dimensions
              className={styles.image} // Optionally add a class for custom styling
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/mic.png" // Ensure the image is placed in the public directory
              alt="Larger image description"
              width={646} // Adjust based on your image dimensions
              height={510} // Adjust based on your image dimensions
              className={styles.image} // Optionally add a class for custom styling
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
