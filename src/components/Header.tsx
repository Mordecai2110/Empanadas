
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="relative min-h-[90vh] w-full bg-gradient-to-br from-brand-dark to-brand-purple/90 text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-brand-dark/90 py-3 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-brand-coral">
            <span className="font-display text-3xl">THE CRAZY</span> 
            <span className="font-display text-brand-gold">EMPANADAS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-1 md:flex">
            <button onClick={() => scrollToSection('home')} className="empanada-nav-link">Home</button>
            <button onClick={() => scrollToSection('gallery')} className="empanada-nav-link">Gallery</button>
            <button onClick={() => scrollToSection('dishes')} className="empanada-nav-link">Dishes</button>
            <button onClick={() => scrollToSection('menu')} className="empanada-nav-link">Menu</button>
            <button onClick={() => scrollToSection('locations')} className="empanada-nav-link">Locations</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex h-screen w-full flex-col bg-brand-dark pt-16">
            <div className="flex flex-col items-center space-y-6 p-8 text-lg">
              <button onClick={() => scrollToSection('home')} className="w-full text-left py-2 border-b border-gray-700">Home</button>
              <button onClick={() => scrollToSection('gallery')} className="w-full text-left py-2 border-b border-gray-700">Gallery</button>
              <button onClick={() => scrollToSection('dishes')} className="w-full text-left py-2 border-b border-gray-700">Dishes</button>
              <button onClick={() => scrollToSection('menu')} className="w-full text-left py-2 border-b border-gray-700">Menu</button>
              <button onClick={() => scrollToSection('locations')} className="w-full text-left py-2 border-b border-gray-700">Locations</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="flex h-[90vh] items-center justify-center px-4">
        <div className="mt-16 text-center">
          <div className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 backdrop-blur-sm">
            <span className="text-sm font-medium text-brand-coral">Bold Flavors, Bold Colors</span>
          </div>
          <h1 className="font-display mb-4 text-6xl font-bold md:text-7xl lg:text-8xl">
            THE CRAZY <span className="text-brand-gold">EMPANADAS</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Where tradition meets creativity. Our hand-crafted empanadas bring a 
            colorful twist to authentic flavors that will transport your taste buds.
          </p>
          <button 
            onClick={() => scrollToSection('menu')}
            className="rounded-md bg-brand-coral px-8 py-3 font-medium text-white transition-all hover:bg-brand-coral/90"
          >
            Discover Our Menu
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <div className="animate-bounce text-white/70">
          <span className="sr-only">Scroll down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-6 w-6"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
