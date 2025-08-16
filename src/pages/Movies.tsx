import { moviesData } from '@/data/moviesData';
import MovieSection from '@/components/MovieSection';
import AppLayout from '@/components/AppLayout';

const Movies = () => {
  const actionMovies = moviesData.filter(movie => movie.genre === 'Action');
  const comedyMovies = moviesData.filter(movie => movie.genre === 'Comedy');
  const sciFiMovies = moviesData.filter(movie => movie.genre === 'Sci-Fi');
  const dramaBiographyMovies = moviesData.filter(movie => movie.genre === 'Biography' || movie.genre === 'Drama');
  const internationalMovies = moviesData.filter(movie => ['Parasite', 'Baahubali 2: The Conclusion'].includes(movie.title));
  const allMovies = moviesData;

  return (
    <AppLayout>
      <div className="py-8">
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
            
            {internationalMovies.length > 0 && (
              <MovieSection 
                title="International Cinema" 
                movies={internationalMovies} 
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
    </AppLayout>
  );
};

export default Movies;