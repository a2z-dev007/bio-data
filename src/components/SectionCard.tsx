import { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const SectionCard = ({ children, className = '', delay = 0 }: SectionCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`relative bg-background/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 card-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {/* Gold Corner Frames - Smaller on mobile */}
      <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-secondary/60 rounded-tl" />
      <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-secondary/60 rounded-tr" />
      <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-secondary/60 rounded-bl" />
      <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-secondary/60 rounded-br" />
      
      {/* Ornate Corner Symbols - Hidden on small mobile */}
      <span className="absolute top-2 sm:top-3 left-2 sm:left-3 text-secondary/60 text-sm sm:text-lg hidden xs:block">❧</span>
      <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 text-secondary/60 text-sm sm:text-lg rotate-180 hidden xs:block">❧</span>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
