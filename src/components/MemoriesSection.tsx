import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

interface GalleryImage {
    src: string;
    alt: string;
}

const useMemories = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)
    const [images, setImages] = useState<GalleryImage[]>([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // 1. Eagerly grab all matches in the target folder
                // Adjust the path and extensions (*.png, *.jpg, etc.) as needed
                const modules = import.meta.glob("../assets/images/memories/*.{png,jpg,jpeg,svg,webp}", { eager: true });
                
                // 2. Extract the resolved URLs/paths from the modules

                const imagePaths = Object.values(modules).map((mod:any) => mod.default || mod);
                const images = imagePaths.map((src, index) => ({
                    src,
                    alt: `Memory ${index + 1}`,
                }));

                
                setImages(images);
            } catch (err) {
                console.error("Failed to load gallery images:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, [])

    return {
        loading,
        error,
        images,
    }
}

const MemoryCard = ({ image, index }: { image: GalleryImage; index: number }) => {
    const rotation = (index * 7 % 5) - 2; 
    const yOffset = (index * 11 % 20); 

    const shapes = [
        "rounded-2xl", 
        "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl",
        "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl",
        "rounded-t-[3rem] rounded-b-xl",
        "rounded-b-[3rem] rounded-t-xl",
    ];
    const shapeClass = shapes[index % shapes.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="mb-8 break-inside-avoid relative group"
            style={{ 
                transform: `rotate(${rotation}deg) translateY(${yOffset}px)`,
            }}
        >
            {/* Swapped: bg-white -> bg-white/10 for a "Polaroid" glass effect */}
            <div
                className={`relative overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md p-3 ${shapeClass} transition-transform duration-300 hover:z-10 hover:scale-[1.02] border border-white/20`}
            >
                <div className={`relative overflow-hidden ${shapeClass} w-full h-full`}>
                    <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export const MemoriesSection = () => {
    const [visibleCount, setVisibleCount] = useState(9);
    const gallery = useMemories();

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 9, gallery.images.length));
    };

    return (
        // Swapped: bg-background -> bg-primary
        <section id="memories" className="py-20 bg-primary overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    {/* Swapped: text-primary -> text-white */}
                    <h2 className="text-4xl sm:text-6xl font-serif text-white mb-4">
                        Our Memories
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Capturing the moments that made our love story
                        unforgettable
                    </p>
                </motion.div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8 px-2">
                    {gallery.images.slice(0, visibleCount).map((image, index) => (
                        <MemoryCard
                            key={index}
                            image={image}
                            index={index}
                        />
                    ))}
                </div>

                {visibleCount < gallery.images.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-20"
                    >
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-full hover:bg-white/90 transition-colors shadow-lg font-semibold"
                        >
                            Load More Memories
                            <ChevronDown size={20} />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
