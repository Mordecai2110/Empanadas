
import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const galleryImages = [
  {
    src: "https://www.essen.com.ar/contenido/objetos/1/Empanadas-de-oriente.jpg",
    alt: "Assorted empanadas with dipping sauce",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1573575155376-643f3595da7b?q=80&w=2574&auto=format&fit=crop",
    alt: "Freshly baked empanadas",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1574672281194-db2473131374?q=80&w=2670&auto=format&fit=crop",
    alt: "Chef preparing food",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1541532713198-dd4f485dba88?q=80&w=2574&auto=format&fit=crop",
    alt: "Restaurant dining space",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1543340713-1bf56d3d1b68?q=80&w=2574&auto=format&fit=crop",
    alt: "Baked pastries on display",
    span: "col-span-1 row-span-1",
  },
];

const Gallery = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  // Function to set row heights for masonry layout
  useEffect(() => {
    const resizeGridItems = () => {
      const grid = gridRef.current;
      if (!grid) return;

      const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows') || '20');
      const rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-row-gap') || '16');

      const items = grid.querySelectorAll('.gallery-item');
      items.forEach((item: Element) => {
        const el = item as HTMLElement;
        const content = el.querySelector('.gallery-content');
        if (content) {
          const rowSpan = Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
          el.style.gridRowEnd = `span ${rowSpan}`;
        }
      });
    };

    // Initialize and bind to window resize
    resizeGridItems();
    window.addEventListener('resize', resizeGridItems);

    // Also rerun when images load
    const images = gridRef.current?.querySelectorAll('img') || [];
    images.forEach(img => {
      if (img.complete) resizeGridItems();
      img.addEventListener('load', resizeGridItems);
    });

    return () => {
      window.removeEventListener('resize', resizeGridItems);
      images.forEach(img => {
        img.removeEventListener('load', resizeGridItems);
      });
    };
  }, []);

  return (
    <section id="gallery" className="empanada-section bg-gradient-to-b from-brand-dark to-black py-20">
      <div className="empanada-container">
        <AnimatedSection>
          <h2 className="mb-2 text-center font-display text-4xl font-bold text-white md:text-5xl">
            Our <span className="text-brand-gold">Gallery</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
            A visual feast of our colorful creations and vibrant space
          </p>
        </AnimatedSection>

        <div 
          ref={gridRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <AnimatedSection 
              key={index} 
              className={`gallery-item ${image.span} overflow-hidden rounded-lg`} 
              delay={index * 100}
            >
              <div className="gallery-content h-full w-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="h-full w-full object-cover gallery-image" 
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
