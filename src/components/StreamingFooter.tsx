import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const StreamingFooter = () => {
  const footerLinks = {
    "Company": ["About Us", "Careers", "Press", "Investor Relations"],
    "Support": ["Help Center", "Contact Us", "System Status", "Device Support"],
    "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy", "Content Ratings"],
    "Features": ["Mobile Apps", "Gift Cards", "Originals", "Ultra HD"]
  };

  return (
    <footer className="bg-cinema-darker border-t border-border mt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-streaming-red transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border mb-8" />

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm mb-1">
              © 2024 FilmReserve. All rights reserved.
            </p>
            <p className="text-streaming-gold font-semibold text-sm">
              FilmReserve | the ultimate streaming destination
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StreamingFooter;