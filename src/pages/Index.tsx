import { SidebarProvider } from "@/components/ui/sidebar";
import { StreamingSidebar } from "@/components/StreamingSidebar";
import StreamingHeader from "@/components/StreamingHeader";
import StreamingFooter from "@/components/StreamingFooter";
import HeroSection from "@/components/HeroSection";
import MovieSection from "@/components/MovieSection";
import { moviesData, tvShowsData } from "@/data/moviesData";

const Index = () => {
  // Get different categories of content
  const featuredMovies = moviesData.slice(0, 5);
  const trendingMovies = [...moviesData.slice(2), ...tvShowsData.slice(0, 3)];
  const newReleases = moviesData.slice(3);
  const popularShows = tvShowsData.slice(0, 5);

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
              
              <MovieSection 
                title="Popular TV Shows" 
                movies={popularShows} 
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