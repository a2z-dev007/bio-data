import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 sm:py-12 border-t border-secondary/20 mb-16 lg:mb-0">
      <div className="container mx-auto px-4">
        {/* Prayer/Blessing */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="font-arabic text-xl sm:text-2xl text-secondary mb-2 px-2">
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
          </p>
          <p className="text-foreground/60 italic text-xs sm:text-sm max-w-xl mx-auto px-4">
            "Our Lord, grant us from among our wives and offspring comfort to our eyes"
          </p>
          <p className="text-secondary/60 text-[10px] sm:text-xs mt-1">
            — Surah Al-Furqan (25:74)
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          <span className="text-secondary/60 text-sm">✦</span>
          <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-foreground/50 text-xs sm:text-sm flex items-center justify-center gap-2">
            Made with <Heart size={12} className="sm:w-[14px] sm:h-[14px] text-secondary fill-current" /> for finding a blessed union
          </p>
          <p className="text-foreground/30 text-[10px] sm:text-xs mt-2">
            © {currentYear} Shah Hussain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
