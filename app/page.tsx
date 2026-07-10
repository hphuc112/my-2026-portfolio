import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <Overview />
      <Skills />
      <Projects />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
