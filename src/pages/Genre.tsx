import { useSearchParams } from 'react-router-dom';
import { allContent } from '@/data/moviesData';
import MovieSection from '@/components/MovieSection';
import { SidebarProvider } from "@/components/ui/sidebar";
import { StreamingSidebar } from "@/components/StreamingSidebar";
import StreamingHeader from "@/components/StreamingHeader";
import StreamingFooter from "@/components/StreamingFooter";

const Genre = () => {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get('name') || '';
  
  const genreContent = allContent.filter(item => 
    item.genre.toLowerCase() === genre.toLowerCase()
  );

  const movies = genreContent.filter(item => item.type === 'movie');
  const shows = genreContent.filter(item => item.type === 'tv');

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <StreamingSidebar />
        
        <div className="flex-1 flex flex-col">
          <StreamingHeader />
          
          <main className="flex-1 py-8">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
                {genre} Content
              </h1>
              
              {genreContent.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🎭</div>
                  <h2 className="text-2xl font-semibold mb-2">No content found</h2>
                  <p className="text-muted-foreground">
                    We don't have any {genre.toLowerCase()} content available yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {movies.length > 0 && (
                    <MovieSection 
                      title={`${genre} Movies (${movies.length})`}
                      movies={movies} 
                      size="medium" 
                    />
                  )}
                  
                  {shows.length > 0 && (
                    <MovieSection 
                      title={`${genre} TV Shows (${shows.length})`}
                      movies={shows} 
                      size="medium" 
                    />
                  )}
                </div>
              )}
            </div>
          </main>
          
          <StreamingFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Genre;