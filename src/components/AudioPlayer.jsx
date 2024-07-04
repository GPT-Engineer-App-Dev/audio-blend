import React, { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const songs = [
  { title: "Song 1", artist: "Artist 1", src: "/songs/song1.mp3" },
  { title: "Song 2", artist: "Artist 2", src: "/songs/song2.mp3" },
  { title: "Song 3", artist: "Artist 3", src: "/songs/song3.mp3" },
];

const AudioPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handleSkipBack = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{songs[currentSongIndex].title}</CardTitle>
        <p>{songs[currentSongIndex].artist}</p>
      </CardHeader>
      <CardContent>
        <audio ref={audioRef} src={songs[currentSongIndex].src} onEnded={handleSkipForward} />
        <div className="flex items-center justify-between">
          <Button onClick={handleSkipBack}>
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button onClick={handlePlayPause}>
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
          <Button onClick={handleSkipForward}>
            <SkipForward className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioPlayer;