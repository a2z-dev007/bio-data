import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: './first.jpeg',
    urlHD: './first.jpeg',
    alt: 'Shah Hussain - Professional Portrait',
  },
  // {
  //   id: 11,
  //   url: './professional.jpeg',
  //   urlHD: './professional.jpeg',
  //   alt: 'Shah Hussain - Professional Portrait',
  // },
  // {
  //   id: 12,
  //   url: './shah.jpeg',
  //   urlHD: './shah.jpeg',
  //   alt: 'Shah Hussain - Professional Portrait',
  // },
  {
    id: 2,
    url: './second.jpeg',
    urlHD: './second.jpeg',
    alt: 'Shah Hussain - Casual Portrait',
  },
  {
    id: 3,
    url: './third.jpeg',
    urlHD: './third.jpeg',
    alt: 'Shah Hussain - Outdoor Portrait',
  },
  {
    id: 4,
    url: './fourth.jpeg',
    urlHD: './fourth.jpeg',
    alt: 'Shah Hussain - Formal Portrait',
  },
  {
    id: 5,
    url: './fifth.jpeg',
    urlHD: './fifth.jpeg',
    alt: 'Shah Hussain - Formal Portrait',
  },
  {
    id: 6,
    url: './sixth.png',
    urlHD: './sixth.png',
    alt: 'Shah Hussain - Formal Portrait',
  },
  {
    id: 7,
    url: './arabic-look.jpeg',
    urlHD: './arabic-look.jpeg',
    alt: 'Shah Hussain - Formal Portrait',
  },
];

// Lightbox Component rendered via Portal
const Lightbox = ({
  isOpen,
  onClose,
  currentIndex,
  onNext,
  onPrev,
  onGoTo,
  fadeState
}: {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  fadeState: 'in' | 'out';
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={onClose}
    >
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${photos[currentIndex].urlHD})`,
          filter: 'blur(30px) brightness(0.3)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6">
        <div className="text-white">
          <span className="text-xl font-semibold">{currentIndex + 1}</span>
          <span className="text-white/60"> / {photos.length}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-24 py-24 relative z-10">
        <img
          src={photos[currentIndex].urlHD}
          alt={photos[currentIndex].alt}
          className={`max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300 max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-350px)] ${fadeState === 'in' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous photo"
      >
        <ChevronLeft size={20} className="sm:w-7 sm:h-7 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next photo"
      >
        <ChevronRight size={20} className="sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Bottom Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6">
        {/* Thumbnail Strip */}
        <div className="flex justify-center gap-2 md:gap-3 mb-3">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={(e) => {
                e.stopPropagation();
                onGoTo(index);
              }}
              className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 border-2 ${index === currentIndex
                ? 'border-secondary scale-110 shadow-lg shadow-secondary/30'
                : 'border-transparent opacity-60 hover:opacity-100'
                }`}
            >
              <img
                src={photo.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onGoTo(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-secondary w-8'
                : 'bg-white/40 hover:bg-white/60 w-2'
                }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export interface PhotoCarouselHandle {
  open: () => void;
}

const PhotoCarousel = forwardRef<PhotoCarouselHandle>((_, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxFade, setLightboxFade] = useState<'in' | 'out'>('in');

  useImperativeHandle(ref, () => ({
    open: () => openLightbox(0)
  }));

  const goToNext = useCallback(() => {
    setFadeState('out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setFadeState('in');
    }, 300);
  }, []);

  const goToPrev = useCallback(() => {
    setFadeState('out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setFadeState('in');
    }, 300);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setFadeState('out');
      setTimeout(() => {
        setCurrentIndex(index);
        setFadeState('in');
      }, 300);
    }
  };

  // Lightbox navigation
  const lightboxNext = useCallback(() => {
    setLightboxFade('out');
    setTimeout(() => {
      setLightboxIndex((prev) => (prev + 1) % photos.length);
      setLightboxFade('in');
    }, 200);
  }, []);

  const lightboxPrev = useCallback(() => {
    setLightboxFade('out');
    setTimeout(() => {
      setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setLightboxFade('in');
    }, 200);
  }, []);

  const lightboxGoTo = (index: number) => {
    if (index !== lightboxIndex) {
      setLightboxFade('out');
      setTimeout(() => {
        setLightboxIndex(index);
        setLightboxFade('in');
      }, 200);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxFade('in');
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, lightboxNext, lightboxPrev]);

  useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isLightboxOpen, goToNext]);

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Photo Frame */}
        <div className="photo-frame">
          <div className="relative h-80 sm:h-96 md:h-[400px] aspect-[3/4] rounded-lg overflow-hidden bg-primary/10 group mx-auto">
            <img
              src={photos[currentIndex].url}
              alt={photos[currentIndex].alt}
              className={`w-full h-full object-cover cursor-pointer transition-all duration-500 ${fadeState === 'in' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              onClick={() => openLightbox(currentIndex)}
            />

            {/* Zoom Overlay */}
            <div
              className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            >
              <div className="w-14 h-14 rounded-full bg-card/90 flex items-center justify-center text-primary">
                <ZoomIn size={24} color='#fff' />
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-secondary/60 pointer-events-none" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-secondary/60 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-secondary/60 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-secondary/60 pointer-events-none" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group"
          aria-label="Next photo"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
        <div>View Photo</div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-secondary scale-125'
                : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => goToSlide(index)}
              className={`relative w-14 h-14 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                ? 'ring-2 ring-secondary ring-offset-2 ring-offset-primary'
                : 'opacity-60 hover:opacity-100'
                }`}
            >
              <img
                src={photo.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Full Screen Lightbox via Portal */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        currentIndex={lightboxIndex}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
        onGoTo={lightboxGoTo}
        fadeState={lightboxFade}
      />
    </>
  );
});

PhotoCarousel.displayName = 'PhotoCarousel';

export default PhotoCarousel;
