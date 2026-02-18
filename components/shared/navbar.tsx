import { ChevronDown } from "lucide-react";

const navLinks = ["Get Started", "Developers",];

const GlowPillButton = ({ children, variant = "outline" }: { children: React.ReactNode; variant?: "outline" | "filled" }) => {
  const isOutline = variant === "outline";
  return (
    <button
      className="relative rounded-full"
      style={{ padding: "0.6px", border: "0.6px solid rgba(255,255,255,0.6)" }}
    >
      {/* Top glow streak */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[6px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, transparent 70%)",
          filter: "blur(3px)",
        }}
      />
      <div
        className={`relative rounded-full text-[14px] font-medium ${
          isOutline
            ? "bg-background text-foreground"
            : "bg-foreground text-background"
        }`}
        style={{ padding: "11px 29px" }}
      >
        {children}
      </div>
    </button>
  );
};

const Navbar = () => {
  return (
   <nav
      // 'fixed top-0 left-0' ile en üste sabitledik. 
      // 'backdrop-blur' ile arkadaki içeriğin bulanık görünmesini sağladık (estetik dokunuş).
      className="fixed top-0 left-0 z-50 flex items-center justify-between w-full  "
      style={{ padding: "20px 120px" }}
    >
      {/* Sol taraf: Logo + Linkler */}
      <div className="flex items-center" style={{ gap: "30px" }}>
        <div className="text-foreground font-semibold tracking-tight text-lg flex items-center" style={{ width: 187, height: 25 }}>
          LOGOIPSUM
        </div>
        <div className="hidden md:flex items-center" style={{ gap: "30px" }}>
          {navLinks.map((link) => (
            <a key={link} href="#" className="flex items-center text-foreground text-[14px] font-medium hover:opacity-80 transition-opacity" style={{ gap: "14px" }}>
              {link}
              <ChevronDown size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Sağ taraf: CTA */}
      <GlowPillButton variant="outline">Join Waitlist</GlowPillButton>
    </nav>
  );
};

export { GlowPillButton };
export default Navbar;
