import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start good mooring
          ?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join India's premier engineering college and shape your future in technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-">shrink
              <Phone className="mr-2 w-5 h-5" />
              Speak to an Expert
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Chennai Campus</h3>
                <p className="opacity-90 text-sm leading-relaxed">
                  Tambaram Road, Vellarai<br />
                  (Chennai Metropolitan Area)<br />
                  Tamil Nadu - 602105, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <a href="tel:+917002080020" className="opacity-90 text-sm hover:opacity-100 transition-opacity">
                  +91 70020 80020
                </a>
              </div>
            </div>

            {/* Affiliation */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xs font-bold">AU</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Affiliation</h3>
                <p className="opacity-90 text-sm">
                  Anna University, Chennai
                </p>
              </div>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <div>
                <h2 className="font-bold leading-tight">MADRAS</h2>
                <p className="text-xs opacity-75 uppercase tracking-wide">Engineering College</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm opacity-90">
                © 2025 Madras Engineering College. All Rights Reserved
              </p>
              <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity underline">
                Mandatory Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
