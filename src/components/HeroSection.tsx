import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import heroBanner from "@/assets/dune-part-two-correct.jpg";

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlayTrailer = () => {
    setShowTrailer(true);
  };

  const handlePlayMovie = () => {
    window.open("https://archive.org/details/movies", "_blank");
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        {showTrailer ? (
          <iframe
            ref={videoRef}
            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={heroBanner}
              alt="Dune: Part Two"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl space-y-6">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {showTrailer ? (
                <>
                  Dune:
                  <span className="block bg-gradient-accent bg-clip-text text-transparent">
                    Part Two
                  </span>
                </>
              ) : (
                <>
                  Epic
                  <span className="block bg-gradient-accent bg-clip-text text-transparent">
                    Adventure
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              {showTrailer ? (
                "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Watch the epic conclusion now."
              ) : (
                "Join the ultimate quest in this breathtaking adventure that will take you to worlds beyond imagination. Now streaming exclusively on FilmReserve."
              )}
            </p>

            {/* Movie Details */}
            <div className="flex items-center space-x-4 text-white/80">
              <span className="bg-streaming-gold text-black px-3 py-1 rounded font-bold text-sm">
                8.8
              </span>
              <span>2024</span>
              <span>•</span>
              <span>2h 46m</span>
              <span>•</span>
              <span>Sci-Fi, Adventure</span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button 
                size="lg" 
                className="hero-button px-8 py-3 text-lg"
                onClick={handlePlayMovie}
              >
                <Play className="h-6 w-6 mr-2" />
                Play Now
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 py-3 text-lg bg-white/20 text-white border-white/30 hover:bg-white/30"
                onClick={handlePlayTrailer}
              >
                <Info className="h-6 w-6 mr-2" />
                {showTrailer ? "Hide Trailer" : "Watch Trailer"}
              </Button>
            </div>
          </div>
        </div>

        {/* Volume Control */}
        <div className="absolute bottom-6 right-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="text-white/70 hover:text-white bg-black/20 hover:bg-black/40 border border-white/20"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;