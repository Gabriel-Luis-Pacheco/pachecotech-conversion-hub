import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { Deliverables } from "@/components/site/Deliverables";
import { UseCases } from "@/components/site/UseCases";
import { Plans } from "@/components/site/Plans";
import { Differentiators } from "@/components/site/Differentiators";
import { Projections } from "@/components/site/Projections";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Process />
        <Deliverables />
        <UseCases />
        <Plans />
        <Differentiators />
        <Projections />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
