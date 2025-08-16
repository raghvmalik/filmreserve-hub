import { tvShowsData } from '@/data/moviesData';
import MovieSection from '@/components/MovieSection';
import AppLayout from '@/components/AppLayout';

const TVShows = () => {
  const comedyShows = tvShowsData.filter(show => show.genre === 'Comedy');
  const dramaShows = tvShowsData.filter(show => show.genre === 'Drama');
  const sciFiShows = tvShowsData.filter(show => show.genre === 'Sci-Fi');
  const fantasyShows = tvShowsData.filter(show => show.genre === 'Fantasy');
  const crimeShows = tvShowsData.filter(show => show.genre === 'Crime');
  const thrillerShows = tvShowsData.filter(show => show.genre === 'Thriller');
  const horrorShows = tvShowsData.filter(show => show.genre === 'Horror');
  const biographyShows = tvShowsData.filter(show => show.genre === 'Biography');
  const internationalShows = tvShowsData.filter(show => ['Squid Game', 'Money Heist (La Casa de Papel)', 'Mirzapur', 'Scam 1992: The Harshad Mehta Story'].includes(show.title));
  const allShows = tvShowsData;

  return (
    <AppLayout>
      <div className="py-8">
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
            
            {internationalShows.length > 0 && (
              <MovieSection 
                title="International Series" 
                movies={internationalShows} 
                size="medium" 
              />
            )}
            
            {crimeShows.length > 0 && (
              <MovieSection 
                title="Crime Series" 
                movies={crimeShows} 
                size="medium" 
              />
            )}
            
            {dramaShows.length > 0 && (
              <MovieSection 
                title="Drama Series" 
                movies={dramaShows} 
                size="medium" 
              />
            )}
            
            {biographyShows.length > 0 && (
              <MovieSection 
                title="Biography Series" 
                movies={biographyShows} 
                size="medium" 
              />
            )}
            
            {comedyShows.length > 0 && (
              <MovieSection 
                title="Comedy Series" 
                movies={comedyShows} 
                size="medium" 
              />
            )}
            
            {[...sciFiShows, ...thrillerShows, ...horrorShows].length > 0 && (
              <MovieSection 
                title="Sci-Fi, Thriller & Horror" 
                movies={[...sciFiShows, ...thrillerShows, ...horrorShows]} 
                size="medium" 
              />
            )}
            
            {fantasyShows.length > 0 && (
              <MovieSection 
                title="Fantasy & Adventure" 
                movies={fantasyShows} 
                size="medium" 
              />
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TVShows;