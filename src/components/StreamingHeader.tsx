import { Search, Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StreamingHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left section with hamburger menu and logo */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-foreground hover:text-streaming-red transition-colors">
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
          <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent cursor-pointer" onClick={() => navigate('/')}>
            FilmReserve
          </h1>
        </div>

        {/* Center search bar */}
        <div className="flex-1 max-w-xl mx-8">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search movies, shows, actors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-border focus:border-streaming-red transition-colors"
            />
          </form>
        </div>

        {/* Right section with user actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-streaming-red transition-colors">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default StreamingHeader;