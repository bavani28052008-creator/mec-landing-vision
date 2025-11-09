import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">India's 1st Specialized Engineering College</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            hello
          {" "}
            <span className="text-primary">@ Madras Engineering College.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
            Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              Request Callback
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <div className="px-6 py-3 rounded-full bg-card border border-border shadow-sm">
              <span className="font-semibold text-foreground">Paid Internship</span>{" "}
              <span className="text-muted-foreground">Opportunities</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-card border border-border shadow-sm">
              <span className="font-semibold text-foreground">Modern Lab</span>{" "}
              <span className="text-muted-foreground">Facilities</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-card border border-border shadow-sm">
              <span className="font-semibold text-foreground">Industry-Ready</span>{" "}
              <span className="text-muted-foreground">Curriculum</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
