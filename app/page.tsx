import FeaturesSection from "../components/shared/feautures-section";
import HeroContent from "../components/shared/hero-content";
import Navbar from "../components/shared/navbar";


const VIDEO_URL = "./hero.mp4";

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <Navbar />
      <HeroContent />

      {/* Features */}
      <FeaturesSection />
    </div>
  );
};

export default page;
