import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  gradient: string;
  shortCode: string;
}

const ProgramCard = ({ title, description, gradient, shortCode }: ProgramCardProps) => {
  return (
    <div 
      className={`relative rounded-3xl p-8 ${gradient} overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      {/* Decorative Icon */}
      <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-black/5 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-800 mb-8 leading-relaxed">
          {description}
        </p>
        <Button 
          className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 group/button"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Let's Chat {shortCode}
          <span className="ml-2 group-hover/button:translate-x-1 transition-transform inline-block">→</span>
        </Button>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-3xl"></div>
    </div>
  );
};

export default ProgramCard;
