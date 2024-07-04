import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Play, SkipBack, SkipForward } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <Input placeholder="Search..." className="max-w-xs" />
        <Avatar className="w-8 h-8" />
      </header>

      {/* Main Content */}
      <div className="flex-grow p-4 overflow-auto">
        {/* Featured Playlists */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Playlist {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Recently Played</h2>
          <ul>
            {[1, 2, 3, 4].map((item) => (
              <li key={item} className="flex items-center mb-4">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-12 h-12 mr-4" />
                <div>
                  <p className="font-semibold">Track {item}</p>
                  <p className="text-sm text-muted-foreground">Artist {item}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Footer Player */}
      <footer className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center">
          <button className="mr-2">
            <SkipBack className="w-5 h-5" />
          </button>
          <button className="mr-2">
            <Play className="w-5 h-5" />
          </button>
          <button>
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-grow mx-4">
          <div className="w-full h-1 bg-muted rounded-full">
            <div className="w-1/3 h-full bg-primary rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;