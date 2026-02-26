import { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {
                    // Handle autoplay restrictions
                    console.log("Autoplay prevented");
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-40">
            <div className="bg-primary/95 backdrop-blur-sm rounded-full shadow-xl p-4 flex items-center gap-3">
                <Music className="text-background" size={20} />

                <button
                    onClick={togglePlay}
                    className="text-background transition-colors"
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>

                <button
                    onClick={toggleMute}
                    className="text-background transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                {/* Note: Replace with actual audio file */}
                <audio ref={audioRef} loop onEnded={() => setIsPlaying(false)}>
                    {/* Add your wedding music file here */}
                    {/* <source src="/path-to-your-music.mp3" type="audio/mpeg" /> */}
                </audio>
            </div>
        </div>
    );
};
