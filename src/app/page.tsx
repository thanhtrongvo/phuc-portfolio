import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/CursorFollower";
import GridLines from "@/components/GridLines";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <GridLines />
      <Navbar />
      <main className="relative">
        {/* Horizontal divider lines between sections */}
        <Hero />
        <div className="section-divider" />
        <PortfolioGrid />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
