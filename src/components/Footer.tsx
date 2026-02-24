import { Heart, Instagram, Facebook, Mail } from "lucide-react";
import { useWedding } from "../contexts/WeddingContext";

export const Footer = () => {
    const { coupleNames, weddingDate } = useWedding();
    const year = weddingDate.getFullYear();

    return (
        <footer className="bg-primary text-background py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <Heart
                        className="text-background mb-4"
                        size={40}
                        fill="currentColor"
                    />

                    <h3 className="text-2xl font-serif mb-2">{coupleNames}</h3>
                    <p className="text-background/80 mb-6">
                        Thank you for being part of our special day
                    </p>

                    <div className="flex gap-6 mb-8">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="mailto:wedding@example.com"
                            className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    <div className="border-t border-background/20 pt-6 w-full max-w-md">
                        <p className="text-background/60 text-sm">
                            © {year} {coupleNames}. All rights reserved.
                        </p>
                        <p className="text-background/60 text-sm mt-2">
                            Made with{" "}
                            <Heart
                                className="inline w-4 h-4 text-secondary"
                                fill="currentColor"
                            />{" "}
                            for our loved ones
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
