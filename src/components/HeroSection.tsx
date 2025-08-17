import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

const HeroSection = () => {
  const slides = useMemo(
    () => [
      {
        title: "Man of Steel",
        description:
          "Clark Kent embraces his destiny to become Superman and protect Earth from a vengeful General Zod.",
        query: "Man of Steel 2013 official trailer",
      },
      {
        title: "Superman",
        description: "A bold new chapter for the Last Son of Krypton in the DC Universe.",
        query: "Superman 2025 official trailer DC",
      },
      {
        title: "F1",
        description: "High-octane racing cinema from the world of Formula 1.",
        query: "F1 movie official teaser trailer",
      },
      {
        title: "Fantastic Four: First Steps",
        description: "Marvel's First Family returns in a brand-new adventure.",
        query: "Fantastic Four First Steps official teaser trailer",
      },
      {
        title: "28 Years Later",
        description: "A terrifying return to a world overrun by rage.",
        query: "28 Years Later official trailer",
      },
      {
        title: "Jurassic World: Rebirth",
        description: "Dinosaurs roam once again in a new era of survival.",
        query: "Jurassic World Rebirth official trailer",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const current = slides[index];
  const trailerSrc = `https://www.youtube.com/embed?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&listType=search&list=${encodeURIComponent(
    current.query
  )}`;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Trailer Video */}
      <div className="absolute inset-0">
        <iframe
          key={index}
          src={trailerSrc}
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`${current.title} Trailer`}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {current.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-2">
              <Button
                size="lg"
                className="hero-button px-8 py-3 text-lg"
                onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(current.query)}`, "_blank")}
              >
                <Play className="h-6 w-6 mr-2" />
                Watch Trailer
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-3 text-lg bg-white/20 text-white border-white/30 hover:bg-white/30"
                onClick={() => next()}
              >
                <Info className="h-6 w-6 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          aria-label="Previous trailer"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Next trailer"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;