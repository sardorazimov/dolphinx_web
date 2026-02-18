import FeaturesSection from "../components/shared/feautures-section";
import HeroContent from "../components/shared/hero-content";
import Header from "../components/shared/navbar";



const VIDEO_URL = "./hero.mp4";

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-xl opacity-30"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <Header />
      <HeroContent />

      {/* Features */}
      <FeaturesSection />
    </div>
  );
};

export default page;
