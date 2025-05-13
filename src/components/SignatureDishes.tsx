
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const dishes = [
  {
    name: "El Fuego Loco",
    description: "Our signature spicy beef empanada with jalapeños, chipotle sauce, and melted cheese. For those who like it hot!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghXI2UR6kSeIxQK5tOIo-tPtGQbo_oLeCEg&s",
    featured: true,
  },
  {
    name: "Golden Corn & Feta",
    description: "Sweet corn kernels mixed with creamy feta cheese and fresh herbs wrapped in our signature dough.",
    image: "https://images.unsplash.com/photo-1490716961549-5dbd18f53101?q=80&w=2726&auto=format&fit=crop",
    featured: false,
  },
  {
    name: "Mediterráneo",
    description: "Mediterranean-inspired empanada filled with spinach, olives, sun-dried tomatoes and goat cheese.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2558&auto=format&fit=crop",
    featured: true,
  },
  {
    name: ".",
    description: ".",
    image: "",
    featured: false,
  },
  {
    name: ".",
    description: ".",
    image: "null",
    featured: false,
  },
  {
    name: "Truffle Mushroom",
    description: "Wild mushrooms sautéed with garlic, thyme and finished with truffle oil for an earthy, luxurious empanada.",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2670&auto=format&fit=crop",
    featured: true,
  }
];

const SignatureDishes = () => {
  return (
    <section id="dishes" className="empanada-section bg-white py-20">
      <div className="empanada-container">
        <AnimatedSection>
          <h2 className="mb-2 text-center font-display text-4xl font-bold text-brand-dark md:text-5xl">
            Our <span className="text-brand-coral">Signature Dishes</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600">
            Hand-crafted empanadas with creative fillings that will tantalize your taste buds
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <AnimatedSection
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
              delay={index * 150}
            >
              <div className="relative h-64 overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                {dish.featured && (
                  <div className="absolute right-3 top-3 flex items-center rounded-full bg-brand-gold px-3 py-1 text-xs font-medium text-brand-dark">
                    <Star size={14} className="mr-1" />
                    Fan Favorite
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-2xl font-bold text-brand-dark">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
