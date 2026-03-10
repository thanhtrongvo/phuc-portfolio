import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/CursorFollower";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <Services />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
