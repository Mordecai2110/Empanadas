
import AnimatedSection from "./AnimatedSection";

const Presentation = () => {
  return (
    <section className="relative bg-brand-dark text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626754468017-5b1312f22aa8?q=80&w=2670&auto=format&fit=crop')" }}
      />
      
      {/* Content */}
      <div className="empanada-container relative z-10 py-24">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Text Content */}
          <AnimatedSection className="max-w-2xl lg:pr-10" animation="fade-in">
            <h2 className="mb-6 font-display text-4xl font-bold text-brand-coral md:text-5xl lg:text-6xl">
              Welcome to The Crazy Empanadas
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              We are passionate about reimagining traditional empanadas with bold flavors 
              and creative combinations. Each empanada is hand-crafted using our 
              secret family recipe that has been passed down through generations, 
              but with a modern twist that makes our flavors truly unforgettable.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-gray-200">
              Our chefs use only the freshest ingredients, locally sourced whenever possible, 
              to create our signature fillings. Whether you're craving something savory 
              or sweet, traditional or adventurous, we've got an empanada for you.
            </p>
            <button className="rounded-lg border-2 border-brand-gold bg-transparent px-6 py-3 font-medium text-brand-gold transition-colors hover:bg-brand-gold/10">
              Our Story
            </button>
          </AnimatedSection>
          
          {/* Right: Floating Image */}
          <AnimatedSection 
            className="mt-12 lg:mt-0" 
            animation="fade-in-right" 
            delay={300}
          >
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-full w-full rounded-lg border-2 border-brand-teal"></div>
              <img 
                src="https://images.unsplash.com/photo-1604467705979-15131880326c?q=80&w=2670&auto=format&fit=crop" 
                alt="Signature empanadas" 
                className="relative z-10 h-auto w-full max-w-md rounded-lg shadow-xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
