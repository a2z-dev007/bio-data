import SectionCard from './SectionCard';
import SectionTitle from './SectionTitle';

const educationData = [
  { degree: 'Master of Computer Application (MCA)', institution: 'Integral University, Lucknow', year: '2024 - Present', status: 'Pursuing' },
  { degree: 'IBM Advanced Diploma in IT, Networking & Cloud Computing', institution: 'IBM Authorized Training Center', year: '2022', status: 'All India Rank 1', highlight: true },
  { degree: 'Bachelor of Commerce (B.Com)', institution: 'Lucknow University', year: '2019', status: 'Completed' },
  { degree: 'ITI in Computer Operator and Programming', institution: 'Industrial Training Institute', year: '2017', status: 'Completed' },
];

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 islamic-pattern" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <SectionTitle
          title="Education"
          subtitle="Academic qualifications and achievements"
        />

        <div className="max-w-3xl mx-auto">
          <SectionCard>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 active:scale-[0.98] ${item.highlight
                    ? 'border-secondary/50 bg-secondary/10'
                    : 'border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5'
                    }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h2 className="text-secondary font-sans font-semibold text-sm sm:text-base md:text-lg leading-tight">
                      {item.degree}
                    </h2>
                    {item.highlight && (
                      <span className="self-start px-2 sm:px-3 py-1 bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">
                        ★ {item.status}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 mb-1 text-xs sm:text-sm md:text-base">{item.institution}</p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <span className="text-secondary/80">{item.year}</span>
                    {!item.highlight && (
                      <span className="px-2 py-0.5 bg-secondary/20 text-secondary rounded text-[10px] sm:text-xs">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default Education;
