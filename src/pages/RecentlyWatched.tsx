import { useWatchlist } from '@/contexts/WatchlistContext';
import MovieSection from '@/components/MovieSection';

const RecentlyWatched = () => {
  const { state } = useWatchlist();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
          Recently Watched
        </h1>
        
        {state.recentlyWatched.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🕒</div>
            <h2 className="text-2xl font-semibold mb-2">No recent activity</h2>
            <p className="text-muted-foreground">
              Movies and shows you watch will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <MovieSection 
              title={`Continue Watching (${state.recentlyWatched.length} items)`}
              movies={state.recentlyWatched} 
              size="medium" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentlyWatched;