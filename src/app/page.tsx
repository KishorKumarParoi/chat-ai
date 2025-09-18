import HeroSection from "@/components/main-page/heroSection";
import MainSection from "@/components/main-page/MainSection";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MainSection />
    </main>
  );
};

export default Home;
