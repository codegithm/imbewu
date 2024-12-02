"use client";

import React from "react";
import styles from "./Services.module.css";
import ServicesCard from "@/lib/components/ServicesCard/ServicesCard";
import useScreenWidth from "@/lib/hooks/useScreenWidth";

const Services: React.FC = () => {
  const screenWidth = useScreenWidth();
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.subHeader}>Imbewu Media Group</h2>
      <h1 className={styles.header}>Our Services</h1>
      <div className={styles.servicesGrid}>
        <ServicesCard
          imgSrc="/services/one.png"
          heading="Strategic Brand Consulting"
          text="At the heart of every successful brand is a powerful strategy. We specialize in crafting bespoke brand strategies that align with your business objectives,
differentiate you in a crowded marketplace, and resonate with your target audience. From defining your brand identity to positioning and market penetration strategies, we ensure that your brand is primed for success, locally and globally."
          borderType={screenWidth >= 599 ? "right" : "none"}
        />
        <ServicesCard
          imgSrc="/services/two.png"
          heading="Integrated
Communications"
          text="We help brands tell their stories in compelling ways through cohesive, integrated communication strategies. Whether it's public relations, content creation, or digital storytelling, we ensure your message is clear, consistent, and impactful across all
platforms."
          borderType={screenWidth <= 1023 ? "none" : "right"}
        />
        <ServicesCard
          imgSrc="/services/three.png"
          heading="Digital & Social Media Strategy"
          text="In today's world, a strong digital presence is non-negotiable. We build dynamic social media strategies tailored to your brand’s voice, creating engaging content, managing communities, and boosting your digital footprint. Our data-driven approach ensures measurable results and sustained growth."
          borderType={
            screenWidth <= 1023 && screenWidth >= 599 ? "right" : "none"
          }
        />
        <ServicesCard
          imgSrc="/services/four.png"
          heading="Creative Design & Development"
          text="Our creative team brings your brand to life through visually striking and memorable design solutions. From logo development and brand
collateral to full-scale digital assets, we ensure that every piece of creative work we produce enhances your brand and leaves a lasting impression."
          borderType={screenWidth <= 1023 ? "none" : "right"}
        />
        <ServicesCard
          imgSrc="/services/five.png"
          heading="Events, Activations & Experiential Marketing"
          text="We design experiences that connect
brands with their audiences in meaningful and memorable ways. Whether it's a brand activation, corporate event, or product launch, our experiential marketing solutions make
lasting impressions and drive engagement."
          borderType={screenWidth >= 599 ? "right" : "none"}
        />
        <ServicesCard
          imgSrc="/services/six.png"
          heading="Influencer Marketing
& Talent Management"
          text="We tap into the power of influencers and digital creators to authentically promote your brand. Through our strategic partnerships with Africa’s top influencers, we help you engage new audiences, build trust, and drive
conversions."
          borderType="none"
        />
      </div>
    </div>
  );
};

export default Services;
