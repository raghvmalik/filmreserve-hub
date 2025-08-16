import { Play, Plus, ThumbsUp, Info, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWatchlist, Movie } from "@/contexts/WatchlistContext";

interface MovieCardProps extends Movie {
  size?: "small" | "medium" | "large";
}

const MovieCard = ({
  id,
  title,
  image,
  year,
  rating,
  genre,
  description,
  type,
  trailer,
  size = "medium"
}: MovieCardProps) => {
  const { addToWatchlist, removeFromWatchlist, addToRecent, isInWatchlist } = useWatchlist();
  
  const cardSizes = {
    small: "w-40 h-60",
    medium: "w-48 h-72",
    large: "w-56 h-80"
  };

  const movieData: Movie = {
    id, title, image, year, rating, genre, description, type, trailer
  };

  const handlePlay = () => {
    addToRecent(movieData);
    if (trailer) {
      window.open(trailer, '_blank');
    } else {
      // For demo purposes, just show a message
      alert(`Playing ${title}... (In a real app, this would start the video player)`);
    }
  };

  const handleAddToWatchlist = () => {
    if (isInWatchlist(id)) {
      removeFromWatchlist(id);
    } else {
      addToWatchlist(movieData);
    }
  };

  const inWatchlist = isInWatchlist(id);

  return (
    <Card className={`${cardSizes[size]} streaming-card group cursor-pointer overflow-hidden border-0`}>
      <CardContent className="p-0 h-full relative">
        <div className="relative h-full overflow-hidden">
          {/* Movie Poster */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action Buttons - appear on hover */}
          <div className="absolute inset-x-4 bottom-4 space-y-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex space-x-2">
              <Button size="sm" className="hero-button flex-1" onClick={handlePlay}>
                <Play className="h-4 w-4 mr-1" />
                Play
              </Button>
              <Button 
                size="sm" 
                variant="secondary" 
                className="px-3"
                onClick={handleAddToWatchlist}
              >
                {inWatchlist ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>
              <Button size="sm" variant="secondary" className="px-3">
                <ThumbsUp className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Movie Info */}
            <div className="text-white space-y-1">
              <h3 className="font-semibold text-sm truncate">{title}</h3>
              <div className="flex items-center space-x-2 text-xs text-white/80">
                <span>{year}</span>
                <span>•</span>
                <span className="bg-streaming-gold text-black px-1.5 py-0.5 rounded text-xs font-medium">
                  {rating}
                </span>
                <span>•</span>
                <span>{genre}</span>
              </div>
              {description && size === "large" && (
                <p className="text-xs text-white/70 line-clamp-2 mt-2">{description}</p>
              )}
            </div>
          </div>

          {/* Rating badge (always visible) */}
          <div className="absolute top-2 right-2">
            <span className="bg-streaming-gold text-black px-2 py-1 rounded text-xs font-bold">
              {rating}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;