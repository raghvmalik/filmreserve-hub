import { Home, Film, Tv, Star, Bookmark, Clock, Settings, Filter } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Movies", url: "/movies", icon: Film },
  { title: "TV Shows", url: "/shows", icon: Tv },
  { title: "Favorites", url: "/favorites", icon: Star },
  { title: "Watchlist", url: "/watchlist", icon: Bookmark },
  { title: "Recently Watched", url: "/recent", icon: Clock },
];

const genres = [
  "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Documentary", "Animation"
];

export function StreamingSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 font-semibold px-3">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`transition-all duration-200 ${
                      isActive(item.url)
                        ? "bg-sidebar-accent text-streaming-red font-medium shadow-sm"
                        : "hover:bg-sidebar-accent/50 hover:text-streaming-red"
                    }`}
                  >
                    <NavLink to={item.url} className="flex items-center">
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="bg-sidebar-border my-2" />

        {/* Filters & Genres */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/80 font-semibold px-3 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Genres
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-3 space-y-1">
                {genres.map((genre) => (
                  <Button
                    key={genre}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-sidebar-foreground/70 hover:text-streaming-red hover:bg-sidebar-accent/30 transition-colors"
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        <Separator className="bg-sidebar-border my-2" />

        {/* Settings */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-sidebar-accent/50 hover:text-streaming-red transition-colors">
                  <Settings className="h-5 w-5" />
                  {!collapsed && <span className="ml-3">Settings</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}