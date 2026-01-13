import { useState, useEffect } from 'react';
import { User, GraduationCap, Briefcase, Users, Mail, Home } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Career', href: '#career', icon: Briefcase },
  { label: 'Family', href: '#family', icon: Users },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-secondary/20 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-around px-2 py-1 safe-area-bottom">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          const Icon = item.icon;
          
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-xl transition-all duration-300 min-w-[3.5rem] ${
                isActive 
                  ? 'text-secondary bg-secondary/10 scale-105' 
                  : 'text-foreground/50 hover:text-secondary/70'
              }`}
            >
              <div className={`relative p-1.5 rounded-full transition-all duration-300 ${
                isActive ? 'bg-secondary/20' : ''
              }`}>
                <Icon className={`w-5 h-5 transition-all duration-300 ${
                  isActive ? 'scale-110' : ''
                }`} />
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
                )}
              </div>
              <span className={`text-[10px] font-medium transition-all duration-300 ${
                isActive ? 'text-secondary' : ''
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
