import { BookOpen, Users, Briefcase, TrendingUp, Heart, Building2 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Industry-Ready Curriculum",
    description: "Learn cutting-edge technologies aligned with industry demands",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from industry experts and accomplished professors",
  },
  {
    icon: Briefcase,
    title: "Learn by Doing (Paid Internships)",
    description: "Gain real-world experience with top companies while studying",
  },
  {
    icon: TrendingUp,
    title: "100% Placement Assistance",
    description: "Dedicated career support to land your dream tech job",
  },
  {
    icon: Heart,
    title: "Vibrant Community",
    description: "Join a diverse community of tech enthusiasts and innovators",
  },
  {
    icon: Building2,
    title: "Gen Z Campus (AC Classrooms, Smart Labs)",
    description: "State-of-the-art infrastructure designed for modern learning",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">MEC</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best engineering education and career opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
