import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import AudioPlayer from "@/components/AudioPlayer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Index = () => {
  const [playlists, setPlaylists] = useState([1, 2, 3, 4]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setPlaylists([...playlists, data.name]);
    toast.success("Playlist created successfully!");
    reset();
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <Input placeholder="Search..." className="max-w-xs" />
        <Avatar className="w-8 h-8" />
      </header>

      {/* Main Content */}
      <div className="flex-grow p-4 overflow-auto">
        {/* Create Playlist Button */}
        <div className="mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create Playlist</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a new playlist</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Playlist Name"
                    {...register("name", { required: "Playlist name is required" })}
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <Button type="submit">Create</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Featured Playlists */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {playlists.map((item, index) => (
              <Card key={index}>
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
        <AudioPlayer />
      </footer>
    </div>
  );
};

export default Index;