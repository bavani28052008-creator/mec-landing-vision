import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight text-foreground">MADRAS</h2>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Engineering College</p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold text-xs">TNEA<br/>Code</span>
              </div>
              <span className="font-semibold text-foreground">1203</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <a href="tel:+917002080020" className="font-semibold text-foreground hover:text-primary transition-colors">
                  +91 70020 80020
                </a>
                <p className="text-xs text-muted-foreground">Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Mobile Contact Button */}
          <div className="lg:hidden">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
