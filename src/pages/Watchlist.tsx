import { useWatchlist } from '@/contexts/WatchlistContext';
import MovieSection from '@/components/MovieSection';

const Watchlist = () => {
  const { state } = useWatchlist();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
          My Watchlist
        </h1>
        
        {state.watchlist.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📺</div>
            <h2 className="text-2xl font-semibold mb-2">Your watchlist is empty</h2>
            <p className="text-muted-foreground">
              Add movies and shows you want to watch later by clicking the + button.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <MovieSection 
              title={`My Watchlist (${state.watchlist.length} items)`}
              movies={state.watchlist} 
              size="medium" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;