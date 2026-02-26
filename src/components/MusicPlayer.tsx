import { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import music from "/music.mp3";

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const FADE_DURATION = 2000;
    const TARGET_VOLUME = 0.5;

    const fadeIn = () => {
        if (!audioRef.current) return;
        
        audioRef.current.volume = 0;
        const step = 0.05;
        const intervalTime = FADE_DURATION * (step / TARGET_VOLUME);

        const fadeInterval = setInterval(() => {
            if (audioRef.current && audioRef.current.volume < TARGET_VOLUME) {
                audioRef.current.volume = Math.min(audioRef.current.volume + step, TARGET_VOLUME);
            } else {
                clearInterval(fadeInterval);
            }
        }, intervalTime);
    };

    useEffect(() => {
        // Show the UI
        const timer = setTimeout(() => setIsVisible(true), 1000);

        // Attempt Autoplay
        if (audioRef.current) {
            audioRef.current.volume = 0; // Start at zero for fade
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        fadeIn();
                    })
                    .catch((error) => {
                        // Browser blocked autoplay (standard behavior)
                        console.log("Autoplay blocked: Waiting for user interaction.", error);
                    });
            }
        }

        return () => clearTimeout(timer);
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                // When manually playing, we also fade in for a smooth experience
                if (audioRef.current.currentTime === 0) audioRef.current.volume = 0;
                audioRef.current.play();
                fadeIn();
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
            <div className="bg-primary/95 backdrop-blur-sm rounded-full shadow-xl p-4 flex items-center gap-3 border border-white/10">
                <Music className="text-background animate-pulse" size={20} />

                <button
                    onClick={togglePlay}
                    className="text-background hover:scale-110 transition-transform"
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>

                <button
                    onClick={toggleMute}
                    className="text-background/80 hover:text-background transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                <audio 
                    ref={audioRef} 
                    loop 
                    onEnded={() => setIsPlaying(false)}
                    preload="auto"
                >
                    <source src={music} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );
};
