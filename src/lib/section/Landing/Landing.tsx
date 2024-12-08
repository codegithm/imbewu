import React from "react";
import Image from "next/image";
import styles from "./Landing.module.css";
import CustomButton from "@/lib/components/CustomButton/CustomButton";
import Container from "@/lib/components/Container/Container";

const Landing: React.FC = () => {
  return (
    <div className={styles.landing}>
      <Container>
        <div className={styles.content}>
          <h2>See African Brands Thrive</h2>
          <h1>Nurturing African Brands to Flourish Globally</h1>
          <p>
            At Imbewu, we nurture brands like seeds, helping them grow into
            global icons enriched by Africa's culture, creativity, and spirit.
          </p>
          <div className={styles.customButton}>
            <CustomButton
              text="Explore"
              textColor="var(--background)"
              bgColor="var(--secondary)"
              hoverColor="var(--tertiary)"
            />
          </div>
        </div>
        <Image
          src="/Vector.png" // Make sure to place your image in the public directory
          alt="flower image"
          width={800} // Original width of the image
          height={600} // Original height of the image
          className={styles.flowerImage} // Optionally add a class for custom styling
        />
        <Image
          src="/lady.png" // Make sure to place your image in the public directory
          alt="Lady image"
          width={1190} // Original width of the image
          height={793} // Original height of the image
          className={styles.ladyImage} // Optionally add a class for custom styling
        />
      </Container>
    </div>
  );
};

export default Landing;
