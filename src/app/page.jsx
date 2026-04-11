import HeroSection from "../components/home/HeroSection";
import AboutCAFirm from "../components/home/AboutCAFirm";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessFlow from "../components/home/ProcessFlow";
import FileReturnCTA from "../components/home/FileReturnCTA";
import ScrollStack from "./ScrollStack";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
export default function HomePage() {
  return (
    <main>
      <Header />

      <ScrollStack />
      <HeroSection />
       <WhyChooseUs />
     
      <ServicesOverview />
     <ProcessFlow />
      
       <AboutCAFirm />
      <FileReturnCTA />
      <Footer />
    </main>
  );
}
