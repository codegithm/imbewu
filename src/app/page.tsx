import Navbar from "@/lib/components/Navbar/Navbar";
import "./globals.css";
import Landing from "@/lib/section/Landing/Landing";
import Cultivating from "@/lib/section/Cultivating/Cultivating";
import Mission from "@/lib/section/Mission/Mission";
import CustomNav from "@/lib/components/CustomNav/CustomNav";
import Services from "@/lib/section/Services/Services";
import WhyUs from "@/lib/section/WhyUs/WhyUs";
import ContactForm from "@/lib/section/ContactForm/ContactForm";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <CustomNav />
      <Landing />
      <Cultivating />
      <Mission />
      <Services />
      <WhyUs />
      <ContactForm />
    </>
  );
}
