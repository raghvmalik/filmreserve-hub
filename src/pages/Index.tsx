import { SidebarProvider } from "@/components/ui/sidebar";
import { StreamingSidebar } from "@/components/StreamingSidebar";
import StreamingHeader from "@/components/StreamingHeader";
import StreamingFooter from "@/components/StreamingFooter";
import HeroSection from "@/components/HeroSection";
import MovieSection from "@/components/MovieSection";

// Import movie poster images
import movieAction from "@/assets/movie-action.jpg";
import movieRomance from "@/assets/movie-romance.jpg";
import movieScifi from "@/assets/movie-scifi.jpg";
import movieFantasy from "@/assets/movie-fantasy.jpg";
import movieHorror from "@/assets/movie-horror.jpg";

const Index = () => {
  // Sample movie data
  const featuredMovies = [
    {
      id: 1,
      title: "Shadow Strike",
      image: movieAction,
      year: "2024",
      rating: "8.7",
      genre: "Action",
      description: "An explosive thriller that will keep you on the edge of your seat."
    },
    {
      id: 2,
      title: "Love in Paris",
      image: movieRomance,
      year: "2024",
      rating: "7.9",
      genre: "Romance",
      description: "A heartwarming love story set in the city of lights."
    },
    {
      id: 3,
      title: "Cyber Dawn",
      image: movieScifi,
      year: "2024",
      rating: "8.4",
      genre: "Sci-Fi",
      description: "The future is here in this mind-bending sci-fi adventure."
    },
    {
      id: 4,
      title: "Dragon's Quest",
      image: movieFantasy,
      year: "2024",
      rating: "8.9",
      genre: "Fantasy",
      description: "Epic fantasy adventure with magical creatures and heroes."
    },
    {
      id: 5,
      title: "Midnight Terror",
      image: movieHorror,
      year: "2024",
      rating: "7.6",
      genre: "Horror",
      description: "A spine-chilling horror that will haunt your dreams."
    }
  ];

  const trendingMovies = [
    {
      id: 6,
      title: "Neon Nights",
      image: movieScifi,
      year: "2023",
      rating: "8.2",
      genre: "Thriller"
    },
    {
      id: 7,
      title: "Royal Hearts",
      image: movieRomance,
      year: "2024",
      rating: "8.1",
      genre: "Romance"
    },
    {
      id: 8,
      title: "Steel Warriors",
      image: movieAction,
      year: "2024",
      rating: "8.5",
      genre: "Action"
    },
    {
      id: 9,
      title: "Mystic Realm",
      image: movieFantasy,
      year: "2023",
      rating: "8.3",
      genre: "Fantasy"
    },
    {
      id: 10,
      title: "Dark Whispers",
      image: movieHorror,
      year: "2024",
      rating: "7.8",
      genre: "Horror"
    }
  ];

  const newReleases = [
    {
      id: 11,
      title: "Urban Legend",
      image: movieAction,
      year: "2024",
      rating: "8.0",
      genre: "Action"
    },
    {
      id: 12,
      title: "Starlight Dreams",
      image: movieRomance,
      year: "2024",
      rating: "7.7",
      genre: "Romance"
    },
    {
      id: 13,
      title: "Quantum Leap",
      image: movieScifi,
      year: "2024",
      rating: "8.6",
      genre: "Sci-Fi"
    },
    {
      id: 14,
      title: "Lost Kingdom",
      image: movieFantasy,
      year: "2024",
      rating: "8.4",
      genre: "Fantasy"
    },
    {
      id: 15,
      title: "The Haunting",
      image: movieHorror,
      year: "2024",
      rating: "7.9",
      genre: "Horror"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <StreamingSidebar />
        
        <div className="flex-1 flex flex-col">
          <StreamingHeader />
          
          <main className="flex-1">
            {/* Hero Section */}
            <HeroSection />
            
            {/* Movie Sections */}
            <div className="space-y-8 pb-8">
              <MovieSection 
                title="Featured Movies" 
                movies={featuredMovies} 
                size="large" 
              />
              
              <MovieSection 
                title="Trending Now" 
                movies={trendingMovies} 
                size="medium" 
              />
              
              <MovieSection 
                title="New Releases" 
                movies={newReleases} 
                size="medium" 
              />
            </div>
          </main>
          
          <StreamingFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;