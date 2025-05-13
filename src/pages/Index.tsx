
import { useEffect } from "react";
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Gallery from "@/components/Gallery";
import SignatureDishes from "@/components/SignatureDishes";
import MenuOverview from "@/components/MenuOverview";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll(".reveal");
      
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check for visible elements on load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Presentation />
      <Gallery />
      <SignatureDishes />
      <MenuOverview />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
