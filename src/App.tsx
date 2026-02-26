import { WeddingProvider } from "./contexts/WeddingContext";
import { Navigation } from "./components/Navigation";
import { MusicPlayer } from "./components/MusicPlayer";
import { HeroSection } from "./components/HeroSection";
import { LoveStorySection } from "./components/LoveStorySection";
import { CeremonySection } from "./components/CeremonySection";
import { EntourageSection } from "./components/EntourageSection";
import { MemoriesSection } from "./components/MemoriesSection";
import { TimelineSection } from "./components/TimelineSection";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";

export default function App() {
    return (
        <WeddingProvider>
            <div className="min-h-screen max-w-screen overflow-x-hidden">
                <Navigation />
                <MusicPlayer />

                <main>
                    <HeroSection />
                    <LoveStorySection />
                    <CeremonySection />
                    <EntourageSection />
                    <MemoriesSection />
                    <TimelineSection />
                    <InfoSection />
                </main>

                <Footer />
            </div>
        </WeddingProvider>
    );
}
