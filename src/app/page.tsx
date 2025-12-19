import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ImpactAreas } from "@/components/ImpactAreas";
import { Journey } from "@/components/Journey";
import { Eligibility } from "@/components/Eligibility";
import { ApplicationTimeline } from "@/components/ApplicationTimeline";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-secondary selection:text-white">
      <Header />
      <Hero />
      <About />
      <ImpactAreas />
      <Journey />
      <Eligibility />
      <ApplicationTimeline />
      <FAQ />
      <Footer />
    </main>
  );
}
