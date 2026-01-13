import SectionCard from "./SectionCard";
import SectionTitle from "./SectionTitle";

const professionalData = [
  { label: 'Occupation', value: 'Software Engineer' },
  { label: 'Experience', value: '4 Years' },
  { label: 'Company', value: 'HealthATM India Pvt Ltd (Yolo Health)' },
  { label: 'Industry', value: 'Healthcare Technology' },
  { label: 'Location', value: 'Lucknow, India' },
  { label: 'Working Since', value: 'October 2023' },
];

const Professional = () => {
  return (
    <section id="career" className="py-12 sm:py-16 md:py-20 bg-section-light relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 islamic-pattern" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <SectionTitle title="Professional Details" subtitle="Current employment information" />

        <div className="max-w-3xl mx-auto">
          <SectionCard>
            <div className="space-y-0">
              {professionalData.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-start sm:items-center py-3 sm:py-4 border-b border-secondary/10 last:border-0 hover:bg-secondary/5 active:bg-secondary/10 transition-colors rounded-lg px-2 sm:px-3 -mx-1 sm:-mx-2`}
                >
                  <span className="w-28 sm:w-36 md:w-48 text-secondary font-medium text-xs sm:text-sm md:text-base shrink-0">
                    {item.label}
                  </span>
                  <span className="text-secondary/60 mx-2 sm:mx-3">:</span>
                  <span className="flex-1 text-foreground font-medium text-sm sm:text-base break-words">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default Professional;
