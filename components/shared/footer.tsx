import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Security", "Pricing", "Resources"],
  Company: ["About", "Careers", "Contact", "Privacy"],
  Developers: ["Documentation", "API Reference", "Status", "Open Source"],
};

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-background pt-20 pb-10 overflow-hidden">
      {/* Arkaplan Parlaması (Subtle Glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo ve Motto Bölümü */}
          <div className="col-span-2">
            <div className="text-foreground font-bold tracking-tight text-xl mb-4">
              LOGOIPSUM
            </div>
            <p className="text-muted-foreground text-sm max-w-[280px] leading-relaxed">
              Building the future of digital infrastructure. Fast, secure, and infinitely scalable.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Link Sütunları */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-foreground font-semibold text-sm">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Kısım: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2024 Logoipsum Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>System Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sosyal Medya İkon Yardımcısı
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/5 hover:text-foreground transition-all">
    {icon}
  </a>
);

export default Footer;