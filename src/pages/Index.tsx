import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReasonsSection from "@/components/ReasonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProgramsSection />
        <WhyChooseSection />
        <ReasonsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
