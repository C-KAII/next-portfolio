import "./globals.css";
import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import BurgerMenu from "@/components/menu/BurgerMenu";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import Modal from "@/components/layout/Modal";
import ParticlesBackground from "@/components/effect/ParticlesBackground";

export default function Home() {
  return (
    <GlobalStateProvider >
      <ParticlesBackground>
        <Navbar />
        <Modal />
        <BurgerMenu />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Footer />
      </ParticlesBackground>
    </GlobalStateProvider>
  );
}