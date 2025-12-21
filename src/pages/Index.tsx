import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyEzzMed from "@/components/WhyEzzMed";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Investors from "@/components/Investors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhyEzzMed />
        <About />
        <Solutions />
        <Technology />
        <Impact />
        <Team />
        {/* <Investors /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
