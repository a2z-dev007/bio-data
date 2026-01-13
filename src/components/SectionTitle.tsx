interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-8 md:mb-12 px-2">
      {/* Top Decorative Line */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <span className="text-gold-gradient text-lg sm:text-2xl">✦</span>
        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>
      
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-gold-gradient">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">{subtitle}</p>
      )}
      
      {/* Bottom Decorative Line */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-4">
        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <span className="text-gold-gradient text-lg sm:text-2xl">✦</span>
        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>
    </div>
  );
};

export default SectionTitle;
