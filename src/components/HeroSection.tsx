import { motion } from "motion/react";
import { useWedding } from "../contexts/WeddingContext";
import { CountdownTimer } from "./CountdownTimer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "/42873578_2185281461491166_3601597392165535744_n.jpg";
import logoImage from "/RJ_logo.png";
import qrCode from "/qr.jpg";

const CurveTop = () => (
    <div className="absolute bottom-0 left-0 right-0">
        <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
        >
            <path
                d="M0,64 C240,100 480,120 720,120 C960,120 1200,100 1440,64 L1440,120 L0,120 Z"
                fill="#F5F1E8"
            />
        </svg>
    </div>
);

export const HeroSection = () => {
    const { bride, groom, weddingDate } = useWedding();

    const formattedDate = weddingDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0 pb-[0.1px]">
                <ImageWithFallback
                    src={heroImage}
                    alt="Wedding couple"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/30 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex items-center flex-col text-beige pt-20 pb-20">
                <div className="flex gap-4 items-center flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <ImageWithFallback
                            src={logoImage}
                            alt="Wedding logo"
                            className="w-32 sm:w-40 md:w-48 drop-shadow-[1px_1px_4px_var(--background)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="my-6 text-center"
                    >
                        <h1 className="text-4xl text-nowrap sm:text-6xl lg:text-8xl font-serif lg:mb-8 [text-shadow:1px_1px_2px_var(--background)]">
                            {bride}{" "}
                            <span className="text-secondary font-script px-2">
                                &
                            </span>{" "}
                            {groom}
                        </h1>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="text-lg sm:text-2xl lg:mb-12 tracking-wide font-sans [text-shadow:1px_1px_2px_var(--background)]">
                        {formattedDate}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    <CountdownTimer />
                </motion.div>

                <div className="p-16 sm:p-20 lg:p-40" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-10 sm:mt-16"
                >
                    <ImageWithFallback
                        src={qrCode}
                        alt="QR code"
                        className="w-full h-full object-cover"
                    />

                    <button
                        onClick={() => {
                            document
                                .getElementById("rsvp")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-secondary font-sans hover:bg-secondary/90 text-background px-8 py-3 sm:px-10 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-xl backdrop-blur-sm border border-background/10"
                    >
                        RSVP Now
                    </button>
                </motion.div>
            </div>

            <CurveTop />
        </section>
    );
};
