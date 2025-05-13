
import { Utensils } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const menuCategories = [
  {
    title: "Empanadas",
    description: "Our signature hand-crafted pastries filled with savory or sweet ingredients",
    image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=2574&auto=format&fit=crop",
    icon: "🥟",
  },
  {
    title: "Rotisserie",
    description: "Slow-roasted meats cooked to perfection on our traditional rotisserie",
    image: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?q=80&w=2574&auto=format&fit=crop",
    icon: "🍗",
  },
  {
    title: "Salads",
    description: "Fresh, crisp salads with vibrant ingredients and homemade dressings",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2580&auto=format&fit=crop",
    icon: "🥗",
  },
  {
    title: "Sides",
    description: "Perfect accompaniments to complement your meal",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2573&auto=format&fit=crop",
    icon: "🍟",
  },
  {
    title: "Beverages",
    description: "Refreshing drinks including our famous house-made sodas and traditional mate",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=2574&auto=format&fit=crop",
    icon: "🥤",
  },
  {
    title: "Desserts",
    description: "Sweet treats to finish your meal on a high note",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2670&auto=format&fit=crop",
    icon: "🍰",
  },
];

const MenuOverview = () => {
  return (
    <section id="menu" className="empanada-section bg-gradient-to-r from-brand-purple to-brand-dark py-20 text-white">
      <div className="empanada-container">
        <AnimatedSection>
          <div className="mb-3 flex items-center justify-center">
            <Utensils className="mr-2 h-6 w-6 text-brand-gold" />
            <span className="font-medium text-brand-gold">Discover Our Menu</span>
          </div>
          <h2 className="mb-2 text-center font-display text-4xl font-bold md:text-5xl">
            Menu <span className="text-brand-coral">Categories</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-300">
            Explore our diverse menu offerings, crafted with care and creativity
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              className="group overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
              delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20"></div>
                <div className="absolute right-3 top-3 rounded-full bg-brand-gold p-2 text-xl">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-2xl font-bold text-white">{category.title}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="rounded-md bg-brand-gold px-8 py-3 font-medium text-brand-dark transition-all hover:bg-opacity-90">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuOverview;
