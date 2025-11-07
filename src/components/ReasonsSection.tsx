import { Award, Briefcase, Globe, Users, Monitor, Home, Bus, Coffee } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Up to 100% Scholarships",
    description: "Merit-based scholarships for deserving students",
  },
  {
    icon: Briefcase,
    title: "Paid Internships with Leading Companies",
    description: "Earn while you learn with top tech companies",
  },
  {
    icon: Globe,
    title: "International Tie-ups",
    description: "Global exposure through international partnerships",
  },
  {
    icon: Users,
    title: "Real-Time Mentors from Fortune 500 Companies",
    description: "Learn from industry leaders and professionals",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms & Hi-Tech Labs",
    description: "Learn with the latest technology and equipment",
  },
  {
    icon: Home,
    title: "Fully A/C Hostel & WiFi Campus",
    description: "Comfortable living with 24/7 connectivity",
  },
  {
    icon: Bus,
    title: "Bus Facility (All parts of Chennai)",
    description: "Convenient transportation across the city",
  },
  {
    icon: Coffee,
    title: "Multicuisine Cafeteria",
    description: "Diverse food options to satisfy every palate",
  },
];

const ReasonsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Top Reasons to Study at <span className="text-primary">MEC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience world-class facilities and opportunities that set you up for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
