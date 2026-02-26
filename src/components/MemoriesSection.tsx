import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}

const galleryImages: GalleryImage[] = Array.from({ length: 50 }, (_, i) => {
    const width = 600;
    const height = 600 + ((i * 137) % 400);
    return {
        src: `https://picsum.photos/seed/${i + 150}/${width}/${height}`,
        alt: `Memory ${i + 1}`,
        caption: i % 3 === 0 ? `Cherished Moment ${i + 1}` : undefined,
    };
});

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
                    {/* Caption Overlay: Adjusted for visibility on dark theme */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        {image.caption && (
                            <p className="text-white font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {image.caption}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const MemoriesSection = () => {
    const [visibleCount, setVisibleCount] = useState(9);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 9, galleryImages.length));
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
                    {galleryImages.slice(0, visibleCount).map((image, index) => (
                        <MemoryCard
                            key={index}
                            image={image}
                            index={index}
                        />
                    ))}
                </div>

                {visibleCount < galleryImages.length && (
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
