import { GlowPillButton } from "./navbar";

const HeroContent = () => {
  return (
    <div
      className="relative z-10 flex flex-col items-center text-center"
      style={{
        paddingTop: "clamp(200px, 20vw, 280px)",
        paddingBottom: 102,
        gap: 40,
      }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 rounded-[20px]"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "8px 16px",
        }}
      >
        <span className="block w-1 h-1 rounded-full bg-foreground" />
        <span className="text-[13px] font-medium">
          <span className="text-foreground/60">Early access available from</span>
          <span className="text-foreground"> May 1, 2026</span>
        </span>
      </div>

      {/* Heading */}
      <h1
        className="text-[36px] md:text-[56px] font-medium leading-[1.28] max-w-[613px]"
        style={{
          background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0,0,0,0) 115%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Web3 at the Speed of Experience
      </h1>

      {/* Subtitle */}
      <p
        className="text-[15px] font-normal text-foreground/70 max-w-[680px] leading-relaxed"
        style={{ marginTop: -16 }}
      >
        Powering seamless experiences and real-time connections, EOS is the base for creators who move with purpose, leveraging resilience, speed, and scale to shape the future.
      </p>

      {/* CTA */}
      <GlowPillButton variant="filled">Join Waitlist</GlowPillButton>
    </div>
  );
};

export default HeroContent;
