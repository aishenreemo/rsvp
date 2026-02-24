import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface StoryEvent {
    year: string;
    title: string;
    description: string;
}

const storyEvents: StoryEvent[] = [
    {
        year: "2018",
        title: "First Meeting",
        description:
            "We met at a mutual friend's party and instantly connected over our shared love of adventure and coffee.",
    },
    {
        year: "2019",
        title: "First Date",
        description:
            "Our first official date was a sunset hike that ended with stargazing and deep conversations about our dreams.",
    },
    {
        year: "2021",
        title: "Moving In Together",
        description:
            "We decided to take the next step and create a home together, building our future one day at a time.",
    },
    {
        year: "2024",
        title: "The Proposal",
        description:
            "On a beautiful beach during sunset, Jayson got down on one knee and asked Rochelle to be his forever.",
    },
    {
        year: "2026",
        title: "Our Wedding Day",
        description:
            "The day we've been waiting for - celebrating our love with family and friends!",
    },
];

const TimelineEvent = ({
    event,
    index,
}: {
    event: StoryEvent;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center gap-6 relative"
        >
            <div
                className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"} text-center`}
            >
                <div className="bg-white rounded-lg p-6 shadow-lg inline-block max-w-md w-full">
                    <div className="text-secondary font-sans text-xl mb-2">
                        {event.year}
                    </div>
                    <h3 className="text-primary text-2xl mb-3">{event.title}</h3>
                    <p className="text-primary/70">{event.description}</p>
                </div>
            </div>

            <div className="shrink-0 relative z-10 md:order-1 order-first mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                    <Heart className="text-background" size={20} fill="currentColor" />
                </div>
            </div>

            <div className={`flex-1 hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`} />
        </motion.div>
    );
};

const CurveBottom = () => (
    <div className="absolute bottom-0 left-0 right-0">
        <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
        >
            <path
                d="M0,64 C240,100 480,120 720,120 C960,120 1200,100 1440,64 L1440,120 L0,120 Z"
                fill="#ffffff"
            />
        </svg>
    </div>
);

export const LoveStorySection = () => {
    return (
        <section
            id="love-story"
            className="relative py-20 bg-background overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-serif text-primary mb-4">
                        Our Love Story
                    </h2>
                    <p className="text-primary/70 text-lg max-w-2xl mx-auto">
                        Every love story is beautiful, but ours is our favorite
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/30 hidden md:block" />

                    <div className="space-y-8">
                        {storyEvents.map((event, index) => (
                            <TimelineEvent
                                key={event.year}
                                event={event}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <CurveBottom />
        </section>
    );
};
