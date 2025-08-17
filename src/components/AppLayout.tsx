import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { StreamingSidebar } from "@/components/StreamingSidebar";
import StreamingHeader from "@/components/StreamingHeader";
import StreamingFooter from "@/components/StreamingFooter";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-background">
        <StreamingSidebar />
        
        <div className="flex-1 flex flex-col">
          <StreamingHeader />
          
          <main className="flex-1">
            {children}
          </main>
          
          <StreamingFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;