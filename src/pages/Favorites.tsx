import MovieSection from '@/components/MovieSection';
import { moviesData, tvShowsData } from '@/data/moviesData';

const Favorites = () => {
  // For demo purposes, showing highly-rated content as "favorites"
  const favoriteMovies = moviesData.filter(movie => parseFloat(movie.rating) >= 8.0);
  const favoriteShows = tvShowsData.filter(show => parseFloat(show.rating) >= 8.0);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
          Favorites
        </h1>
        
        <div className="space-y-8">
          {favoriteMovies.length > 0 && (
            <MovieSection 
              title="Favorite Movies" 
              movies={favoriteMovies} 
              size="medium" 
            />
          )}
          
          {favoriteShows.length > 0 && (
            <MovieSection 
              title="Favorite TV Shows" 
              movies={favoriteShows} 
              size="medium" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;