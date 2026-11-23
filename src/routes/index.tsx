import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Opportunities } from "@/components/site/Opportunities";
import { Network } from "@/components/site/Network";
import { WhyTenerife } from "@/components/site/WhyTenerife";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Tenerife Investment — Your Local Investment Partner in Tenerife";
const DESCRIPTION =
  "Residential, commercial, development and business investment opportunities in Tenerife, backed by 14+ years of local expertise and a trusted professional network.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Opportunities />
        <Network />
        <WhyTenerife />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
