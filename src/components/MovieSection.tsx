import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MovieCard from "./MovieCard";

import { Movie } from "@/contexts/WatchlistContext";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  size?: "small" | "medium" | "large";
}

const MovieSection = ({ title, movies, size = "medium" }: MovieSectionProps) => {
  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 px-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Movie Cards Scroll Area */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 px-6 pb-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              size={size}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="bg-muted" />
      </ScrollArea>
    </section>
  );
};

export default MovieSection;