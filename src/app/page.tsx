import HeroSection from "@/components/main-page/heroSection";
import MainSection from "@/components/main-page/MainSection";
import Navbar from "@/components/navbar";

const Home = async () => {
  return (
    <main suppressHydrationWarning>
      <Navbar />
      <HeroSection />
      <MainSection />
    </main>
  );
};

export default Home;
