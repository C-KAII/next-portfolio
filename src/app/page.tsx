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
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <GlobalStateProvider >
      <Layout>
        <Navbar />
        <Modal />
        <BurgerMenu />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Footer />
      </Layout>
    </GlobalStateProvider>
  );
}