
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // Percentage of element visible before triggering animation
  delay?: number; // Delay in milliseconds
  animation?: "fade-in" | "fade-in-right" | "zoom-in"; // Animation type
}

const AnimatedSection = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  animation = "fade-in"
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, delay]);

  return (
    <div 
      ref={ref} 
      className={cn(
        "opacity-0",
        isVisible && `animate-${animation}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
