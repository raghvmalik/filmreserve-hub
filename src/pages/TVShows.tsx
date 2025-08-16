import { tvShowsData } from '@/data/moviesData';
import MovieSection from '@/components/MovieSection';

const TVShows = () => {
  const comedyShows = tvShowsData.filter(show => show.genre === 'Comedy');
  const dramaShows = tvShowsData.filter(show => show.genre === 'Drama' || show.genre === 'Fantasy');
  const sciFiShows = tvShowsData.filter(show => show.genre === 'Sci-Fi' || show.genre === 'Thriller');
  const allShows = tvShowsData;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
          TV Shows
        </h1>
        
        <div className="space-y-8">
          <MovieSection 
            title="All TV Shows" 
            movies={allShows} 
            size="medium" 
          />
          
          {comedyShows.length > 0 && (
            <MovieSection 
              title="Comedy Series" 
              movies={comedyShows} 
              size="medium" 
            />
          )}
          
          {dramaShows.length > 0 && (
            <MovieSection 
              title="Drama & Fantasy" 
              movies={dramaShows} 
              size="medium" 
            />
          )}
          
          {sciFiShows.length > 0 && (
            <MovieSection 
              title="Sci-Fi & Thriller" 
              movies={sciFiShows} 
              size="medium" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TVShows;