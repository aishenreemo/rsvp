import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useWedding } from "../contexts/WeddingContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "/RJ_logo.png";
import logoImage2 from "/RJ_logo_2.png";

const navItems = [
    { id: "love-story", label: "Our Story" },
    { id: "ceremony", label: "Ceremony" },
    { id: "entourage", label: "Entourage" },
    { id: "memories", label: "Memories" },
    { id: "timeline", label: "Timeline" },
    { id: "info", label: "Information" },
];

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { coupleNames } = useWedding();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
                isScrolled
                    ? "bg-primary/95 backdrop-blur-sm shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <ImageWithFallback
                            src={isScrolled ? logoImage2 : logoImage}
                            alt="Wedding logo"
                            className="w-12 h-12 object-cover rounded-full"
                        />
                        <button
                            onClick={() => scrollToSection("home")}
                            className={`font-script text-xl font-semibold transition-colors text-nowrap ${
                                isScrolled
                                    ? "text-background/90"
                                    : "hover:text-background text-shadow-[0_0.5px_2px_var(--background)]"
                            }`}
                        >
                            {coupleNames}
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm transition-colors relative group ${
                                    isScrolled
                                        ? "text-background/90"
                                        : "hover:text-background"
                                }`}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-background p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-primary/98 backdrop-blur-sm">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left py-3 px-4 text-background/90 hover:text-background hover:bg-secondary/20 rounded transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
