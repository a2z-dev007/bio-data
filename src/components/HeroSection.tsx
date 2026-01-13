import { ChevronDown, Image, Images, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import PhotoCarousel, { PhotoCarouselHandle } from './PhotoCarousel';
import { Button } from './ui/button';

const HeroSection = () => {
  // const bismillahText = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
  const bismillahText = "﷽";
  const [revealProgress, setRevealProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  const carouselRef = useRef<PhotoCarouselHandle>(null);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    const revealDuration = 2500; // Smooth reveal over 2.5 seconds
    const pauseDuration = 3000; // Pause when fully revealed
    const hideDuration = 1500; // Smooth hide over 1.5 seconds
    const restartPause = 1000; // Pause before restart

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (isRevealing) {
        const progress = Math.min(elapsed / revealDuration, 1);
        // Easing function for smooth animation
        const eased = 1 - Math.pow(1 - progress, 3);
        setRevealProgress(eased * 100);

        if (progress >= 1) {
          setShowTranslation(true);
          setTimeout(() => {
            setIsRevealing(false);
            startTime = 0;
            animationFrame = requestAnimationFrame(animate);
          }, pauseDuration);
          return;
        }
      } else {
        const progress = Math.min(elapsed / hideDuration, 1);
        const eased = Math.pow(progress, 2);
        setRevealProgress(100 - eased * 100);

        if (progress >= 1) {
          setShowTranslation(false);
          setTimeout(() => {
            setIsRevealing(true);
            startTime = 0;
            animationFrame = requestAnimationFrame(animate);
          }, restartPause);
          return;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isRevealing]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-textured overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 islamic-pattern-gold opacity-30" />

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bismillah Section - Top */}

        <div className="text-center pt-8 sm:pt-32 pb-8 sm:pb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-3">
            <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-secondary to-secondary" />
            <Sparkles className="w-4 h-4 text-secondary" />
            <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent via-secondary to-secondary" />
          </div>

          <div className="relative min-h-[2.5rem] sm:min-h-[4rem] flex items-center justify-center overflow-hidden" dir="rtl">
            <p
              className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold-gradient tracking-wide leading-relaxed whitespace-nowrap"
              style={{
                clipPath: `inset(0 0 0 ${100 - revealProgress}%)`,
                transition: 'clip-path 0.1s ease-out'
              }}
            >
              {bismillahText}
            </p>
            {/* Glowing cursor */}
            <span
              className="absolute h-8 sm:h-12 w-0.5 sm:w-1 bg-secondary rounded-full shadow-[0_0_10px_2px_hsl(43,80%,55%)] animate-pulse"
              style={{
                left: `${50 - revealProgress / 2}%`,
                opacity: revealProgress > 0 && revealProgress < 100 ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>

          <p className={`text-foreground/50 text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-2 transition-all duration-500 ${showTranslation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>
        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(90vh-200px)] pb-20">

          {/* Left - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-secondary" />
              <span className="text-secondary text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                Marriage Biodata
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient font-bold mb-4 sm:mb-6 leading-tight">
              Shah Hussain
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 text-foreground/90 font-medium text-sm px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Software Engineer
              </span>
              {/* <span className="inline-flex items-center gap-2 text-foreground/70 text-sm px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5">
                Devout Muslim
              </span> */}
            </div>

            <p className="text-foreground/60 max-w-md mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10">
              Seeking a life partner who shares the same values of faith, family, and personal growth.
              Together, let us build a home filled with love, respect, and blessings.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={scrollToAbout}
                className="btn-gold-gradient w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  View Full Profile
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              <a
                href="#contact"
                className="btn-gold-outline w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 sm:-inset-6 border-2 border-secondary/30 rounded-2xl" />
              <div className="absolute -inset-8 sm:-inset-10 border border-secondary/10 rounded-3xl" />

              {/* Corner Accents */}
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-12 sm:w-16 h-12 sm:h-16">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent" />
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-secondary to-transparent" />
              </div>
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-secondary to-transparent" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-secondary to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-12 sm:w-16 h-12 sm:h-16">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent" />
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-secondary to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-secondary to-transparent" />
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-secondary to-transparent" />
              </div>

              {/* Photo Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-xl overflow-hidden shadow-2xl shadow-black/30">
                <PhotoCarousel ref={carouselRef} />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <Button onClick={() => carouselRef.current?.open()} className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-amber-500 text-background text-xs sm:text-sm font-semibold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                View Photos <Images />
              </Button>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 text-secondary/60 hover:text-secondary transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
