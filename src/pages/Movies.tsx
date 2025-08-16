import { moviesData } from '@/data/moviesData';
import MovieSection from '@/components/MovieSection';

const Movies = () => {
  const actionMovies = moviesData.filter(movie => movie.genre === 'Action');
  const comedyMovies = moviesData.filter(movie => movie.genre === 'Comedy');
  const sciFiMovies = moviesData.filter(movie => movie.genre === 'Sci-Fi');
  const dramaBiographyMovies = moviesData.filter(movie => movie.genre === 'Biography' || movie.genre === 'Drama');
  const allMovies = moviesData;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
          Movies
        </h1>
        
        <div className="space-y-8">
          <MovieSection 
            title="All Movies" 
            movies={allMovies} 
            size="medium" 
          />
          
          {actionMovies.length > 0 && (
            <MovieSection 
              title="Action & Adventure" 
              movies={actionMovies} 
              size="medium" 
            />
          )}
          
          {sciFiMovies.length > 0 && (
            <MovieSection 
              title="Sci-Fi & Animation" 
              movies={sciFiMovies} 
              size="medium" 
            />
          )}
          
          {comedyMovies.length > 0 && (
            <MovieSection 
              title="Comedy & Family" 
              movies={comedyMovies} 
              size="medium" 
            />
          )}
          
          {dramaBiographyMovies.length > 0 && (
            <MovieSection 
              title="Drama & Biography" 
              movies={dramaBiographyMovies} 
              size="medium" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;