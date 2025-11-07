import ProgramCard from "./ProgramCard";

const programs = [
  {
    title: "B.E. in Computer Science & Engineering",
    description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
    gradient: "bg-gradient-green",
    shortCode: "CSE",
  },
  {
    title: "B.Tech. in Artificial Intelligence & Data Science",
    description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
    gradient: "bg-gradient-coral",
    shortCode: "AIDS",
  },
  {
    title: "B.E. in Computer Science & Engineering (AI & ML)",
    description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
    gradient: "bg-gradient-purple",
    shortCode: "AIML",
  },
  {
    title: "B.Tech. in Information Technology (IT)",
    description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
    gradient: "bg-gradient-blue",
    shortCode: "IT",
  },
  {
    title: "B.E. in Computer Science & Engineering (Cyber Security)",
    description: "Secure the digital world with advanced cyber security techniques and ethical hacking skills.",
    gradient: "bg-gradient-yellow",
    shortCode: "Cyber",
  },
  {
    title: "B.E. in Computer Science & Business Systems",
    description: "Bridge technology and business with computing skills tailored for the corporate world.",
    gradient: "bg-gradient-pink",
    shortCode: "CSBS",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Programs Offered
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our specialized engineering programs designed for the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProgramCard {...program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
