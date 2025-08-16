import AppLayout from "@/components/AppLayout";
import HeroSection from "@/components/HeroSection";
import MovieSection from "@/components/MovieSection";
import { moviesData, tvShowsData } from "@/data/moviesData";

const Index = () => {
  return (
    <AppLayout>
      <HeroSection />
      
      <div className="container mx-auto px-6 space-y-12 pb-12">
        <MovieSection 
          title="Recently Released" 
          movies={moviesData.filter(movie => ['2023', '2024'].includes(movie.year))} 
          size="large" 
        />
        
        <MovieSection 
          title="Popular International Shows" 
          movies={tvShowsData.filter(show => ['Squid Game', 'Money Heist (La Casa de Papel)', 'Mirzapur', 'Scam 1992: The Harshad Mehta Story'].includes(show.title))} 
          size="medium" 
        />
        
        <MovieSection 
          title="Action & Adventure" 
          movies={moviesData.filter(movie => ['Action', 'Adventure'].includes(movie.genre))} 
          size="medium" 
        />
        
        <MovieSection 
          title="International Cinema" 
          movies={moviesData.filter(movie => ['Parasite', 'Baahubali 2: The Conclusion'].includes(movie.title))} 
          size="medium" 
        />
        
        <MovieSection 
          title="Comedy & Family" 
          movies={[...moviesData.filter(movie => movie.genre === 'Comedy'), ...moviesData.filter(movie => movie.genre === 'Family')]} 
          size="medium" 
        />
      </div>
    </AppLayout>
  );
};

export default Index;