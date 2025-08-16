import { createContext, useContext, useReducer, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

export interface Movie {
  id: number;
  title: string;
  image: string;
  year: string;
  rating: string;
  genre: string;
  description?: string;
  type: 'movie' | 'tv';
  runtime?: string;
  cast?: string[];
  director?: string;
  trailer?: string;
}

interface WatchlistState {
  watchlist: Movie[];
  recentlyWatched: Movie[];
}

type WatchlistAction =
  | { type: 'ADD_TO_WATCHLIST'; payload: Movie }
  | { type: 'REMOVE_FROM_WATCHLIST'; payload: number }
  | { type: 'ADD_TO_RECENT'; payload: Movie }
  | { type: 'CLEAR_WATCHLIST' };

const initialState: WatchlistState = {
  watchlist: [],
  recentlyWatched: [],
};

function watchlistReducer(state: WatchlistState, action: WatchlistAction): WatchlistState {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      if (state.watchlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(item => item.id !== action.payload),
      };
    case 'ADD_TO_RECENT':
      const filtered = state.recentlyWatched.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        recentlyWatched: [action.payload, ...filtered].slice(0, 20), // Keep only 20 recent items
      };
    case 'CLEAR_WATCHLIST':
      return {
        ...state,
        watchlist: [],
      };
    default:
      return state;
  }
}

interface WatchlistContextType {
  state: WatchlistState;
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movieId: number) => void;
  addToRecent: (movie: Movie) => void;
  isInWatchlist: (movieId: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(watchlistReducer, initialState);

  const addToWatchlist = (movie: Movie) => {
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });
    toast({
      title: "Added to Watchlist",
      description: `${movie.title} has been added to your watchlist.`,
    });
  };

  const removeFromWatchlist = (movieId: number) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movieId });
    toast({
      title: "Removed from Watchlist",
      description: "Movie has been removed from your watchlist.",
    });
  };

  const addToRecent = (movie: Movie) => {
    dispatch({ type: 'ADD_TO_RECENT', payload: movie });
  };

  const isInWatchlist = (movieId: number) => {
    return state.watchlist.some(item => item.id === movieId);
  };

  return (
    <WatchlistContext.Provider value={{
      state,
      addToWatchlist,
      removeFromWatchlist,
      addToRecent,
      isInWatchlist,
    }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}