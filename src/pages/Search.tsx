import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import MovieSection from '@/components/MovieSection';
import { allContent } from '@/data/moviesData';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allContent.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.cast?.some(actor => actor.toLowerCase().includes(query)) ||
      item.director?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const movieResults = searchResults.filter(item => item.type === 'movie');
  const tvResults = searchResults.filter(item => item.type === 'tv');

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
          Search
        </h1>
        
        {/* Search Input */}
        <div className="relative max-w-2xl mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search movies, shows, actors, directors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg bg-muted/50 border-border focus:border-streaming-red transition-colors"
          />
        </div>

        {/* Search Results */}
        {searchQuery.trim() ? (
          searchResults.length > 0 ? (
            <div className="space-y-8">
              <div className="text-lg text-muted-foreground mb-6">
                Found {searchResults.length} results for "{searchQuery}"
              </div>
              
              {movieResults.length > 0 && (
                <MovieSection 
                  title={`Movies (${movieResults.length})`}
                  movies={movieResults} 
                  size="medium" 
                />
              )}
              
              {tvResults.length > 0 && (
                <MovieSection 
                  title={`TV Shows (${tvResults.length})`}
                  movies={tvResults} 
                  size="medium" 
                />
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-semibold mb-2">No results found</h2>
              <p className="text-muted-foreground">
                Try searching for different keywords or check your spelling.
              </p>
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎬</div>
            <h2 className="text-2xl font-semibold mb-2">Discover your next favorite</h2>
            <p className="text-muted-foreground">
              Search for movies, TV shows, actors, directors, and more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;