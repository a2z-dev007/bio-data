import SectionCard from './SectionCard';
import SectionTitle from './SectionTitle';
import { Users, Heart, Baby } from 'lucide-react';

const familyData = [
  { label: "Father's Name", value: 'Late Mr. Abrar Hussain' },
  { label: 'Occupation', value: 'Business' },
  { label: "Mother's Name", value: 'Mrs. Nasibun Nisha' },
  { label: 'Occupation', value: 'House Wife' },
  { label: 'Family Type', value: 'Joint Family' },
  { label: 'Native Place', value: 'Lucknow, Uttar Pradesh' },
];

const siblingsData = [
  {
    position: '1st',
    type: 'Elder Brother',
    status: 'Married',
    icon: Users,
    details: 'Wife & 2 Children',
    color: 'from-amber-500 to-yellow-400',
    isMe: false,
  },
  {
    position: '2nd',
    type: 'Elder Brother',
    status: 'Married',
    icon: Users,
    details: 'Wife & 1 Child',
    color: 'from-amber-500 to-yellow-400',
    isMe: false,
  },
  {
    position: '3rd',
    type: 'Elder Brother',
    status: 'Unmarried',
    icon: Users,
    details: '',
    color: 'from-amber-400 to-yellow-300',
    isMe: false,
  },
  {
    position: '4th',
    type: 'Shah Hussain',
    status: 'Unmarried',
    icon: Users,
    details: 'That\'s Me!',
    color: 'from-secondary to-amber-400',
    isMe: true,
  },
  {
    position: '5th',
    type: 'Younger Brother',
    status: 'Unmarried',
    icon: Users,
    details: '',
    color: 'from-amber-400 to-yellow-300',
    isMe: false,
  },
  {
    position: '',
    type: 'Sister',
    status: 'Married',
    icon: Heart,
    details: '',
    color: 'from-rose-400 to-pink-400',
    isMe: false,
  },
];

const Family = () => {
  return (
    <section id="family" className="py-12 sm:py-16 md:py-20 bg-section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 islamic-pattern" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <SectionTitle
          title="Family Details"
          subtitle="Information about family background"
        />

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          {/* Parent Information */}
          <SectionCard>
            <div className="space-y-0">
              {familyData.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="flex items-start sm:items-center py-3 sm:py-4 border-b border-secondary/10 last:border-0 hover:bg-secondary/5 active:bg-secondary/10 transition-colors rounded-lg px-2 sm:px-3 -mx-1 sm:-mx-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-28 sm:w-36 md:w-48 text-secondary font-medium text-xs sm:text-sm md:text-base shrink-0">
                    {item.label}
                  </span>
                  <span className="text-secondary/60 mx-2 sm:mx-3">:</span>
                  <span className="flex-1 text-foreground font-medium text-sm sm:text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Siblings Section */}
          <SectionCard>
            {/* Decorative Corner Elements - Hidden on small mobile */}
            <div className="hidden sm:block absolute top-4 left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-secondary/40 rounded-tl-lg" />
            <div className="hidden sm:block absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-t-2 border-secondary/40 rounded-tr-lg" />
            <div className="hidden sm:block absolute bottom-4 left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-b-2 border-secondary/40 rounded-bl-lg" />
            <div className="hidden sm:block absolute bottom-4 right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-secondary/40 rounded-br-lg" />

            {/* Decorative Floral Icons */}
            <div className="hidden sm:block absolute top-3 left-1/2 -translate-x-1/2 text-secondary/30 text-sm">❧</div>
            <div className="hidden sm:block absolute bottom-3 left-1/2 -translate-x-1/2 text-secondary/30 rotate-180 text-sm">❧</div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gold-gradient mb-1 sm:mb-2 text-center font-serif italic">
              Siblings Overview
            </h3>
            <p className="text-center text-secondary/70 mb-4 sm:mb-6 md:mb-8 tracking-wider sm:tracking-widest text-xs sm:text-sm">
              5 Brothers & 1 Sister
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5 auto-rows-fr">
              {siblingsData.map((sibling, index) => (
                <div
                  key={index}
                  className="relative group h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Highlight glow for "Me" */}
                  {sibling.isMe && (
                    <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-secondary/40 via-amber-500/30 to-secondary/40 rounded-xl sm:rounded-2xl blur-sm sm:blur-md animate-pulse" />
                  )}

                  <div className={`relative overflow-hidden rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 text-center transition-all duration-300 h-full flex flex-col active:scale-[0.98] ${sibling.isMe
                    ? 'bg-gradient-to-br from-amber-900/60 via-secondary/20 to-amber-800/40 border-2 border-secondary/50 shadow-xl shadow-secondary/20'
                    : 'bg-gradient-to-br from-primary/40 to-primary/60 border border-secondary/20 hover:border-secondary/40'
                    }`}>
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-secondary/10 pointer-events-none" />

                    {/* Position Badge */}
                    {sibling.position && (
                      <span className={`absolute top-0  right-0 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-bl-lg sm:rounded-bl-xl rounded-tr-lg sm:rounded-tr-xl shadow-lg ${sibling.isMe
                        ? 'bg-gradient-to-r from-secondary to-amber-400 text-white'
                        : 'bg-gradient-to-r from-secondary/80 to-amber-500/80 text-white'
                        }`}>
                        {sibling.position}
                      </span>
                    )}

                    {/* Icon Container */}
                    <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${sibling.isMe
                      ? 'bg-gradient-to-br from-secondary via-amber-400 to-secondary ring-2 sm:ring-4 ring-secondary/30 ring-offset-1 sm:ring-offset-2 ring-offset-transparent'
                      : sibling.type === 'Sister'
                        ? 'bg-gradient-to-br from-rose-400 to-pink-500'
                        : 'bg-gradient-to-br from-secondary to-amber-500'
                      }`}>
                      <sibling.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${sibling.isMe ? 'text-primary' : 'text-white'}`} />
                    </div>

                    {/* Name/Type */}
                    <h4 className={`font-sans mb-1 sm:mb-2 transition-colors text-xs sm:text-sm md:text-base ${sibling.isMe
                      ? 'text-gold-gradient text-sm sm:text-base md:text-lg'
                      : 'text-foreground/90'
                      }`}>
                      {sibling.type}
                    </h4>

                    {/* Status Badge - Small Pill */}
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium tracking-wide ${sibling.status === 'Married'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                      }`}>
                      {sibling.status}
                    </span>

                    {/* Details - always reserve space */}
                    <div className="mt-auto pt-2 sm:pt-3">
                      <div className={`flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs md:text-sm min-h-[1.25rem] sm:min-h-[1.5rem] ${sibling.isMe
                        ? 'text-secondary font-medium animate-pulse'
                        : 'text-foreground/60'
                        }`}>
                        {sibling.details ? (
                          <>
                            {!sibling.isMe && <Baby className="w-3 h-3 sm:w-4 sm:h-4 text-secondary/70" />}
                            <span>{sibling.details}</span>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Quranic Verse */}
          <SectionCard>
            <div className="text-center px-2">
              <p className="font-arabic text-lg sm:text-xl md:text-2xl text-secondary mb-2">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
              </p>
              <p className="text-foreground/60 italic text-xs sm:text-sm">
                "And among His Signs is that He created for you mates from among yourselves"
              </p>
              <p className="text-secondary/80 text-[10px] sm:text-xs mt-1">— Surah Ar-Rum (30:21)</p>
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default Family;
