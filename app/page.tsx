import CustomCursor     from "@/components/CustomCursor";
import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import Stats            from "@/components/Stats";
import Services         from "@/components/Services";
import BodyMassageSelector from "@/components/BodyMassageSelector";
import About            from "@/components/About";
import Testimonials     from "@/components/Testimonials";
import HowToBook        from "@/components/HowToBook";
import Location         from "@/components/Location";
import Footer           from "@/components/Footer";
import WhatsAppButton   from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <BodyMassageSelector />
        <About />
        <Testimonials />
        <HowToBook />
        <Location />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
