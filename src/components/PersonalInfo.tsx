import SectionCard from './SectionCard';
import SectionTitle from './SectionTitle';

const personalData = [
  { label: 'Full Name', value: 'Shah Hussain' },
  { label: 'Date of Birth', value: '13/02/1998' },
  { label: 'Place of Birth', value: 'Lucknow' },
  { label: 'Religion', value: 'Islam' },
  { label: 'Height', value: "5'4\"" },
  { label: 'Education', value: 'Masters + Advanced IT Diploma' },
  { label: 'Occupation', value: 'Software Engineer' },
];

const PersonalInfo = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-section-light relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 islamic-pattern" />
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <SectionTitle
          title="Personal Details"
          subtitle="Essential information about the groom"
        />

        <div className="max-w-3xl mx-auto">
          <SectionCard>
            <div className="space-y-0">
              {personalData.map((item, index) => (
                <div
                  key={item.label}
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
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
