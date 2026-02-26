import { motion } from "motion/react";
import { Clock } from "lucide-react";

interface TimelineEvent {
    time: string;
    title: string;
    description: string;
}

const events: TimelineEvent[] = [
    {
        time: "1:30 PM",
        title: "Guest Arrival",
        description: "Guests begin to arrive and are seated",
    },
    {
        time: "2:00 PM",
        title: "Ceremony Begins",
        description: "The wedding ceremony commences",
    },
    {
        time: "2:45 PM",
        title: "Cocktail Hour",
        description: "Enjoy drinks and hors d'oeuvres while we take photos",
    },
    {
        time: "4:00 PM",
        title: "Reception Begins",
        description: "Grand entrance of the newlyweds",
    },
    {
        time: "4:30 PM",
        title: "Dinner Service",
        description: "Delicious meal and toasts from loved ones",
    },
    {
        time: "6:00 PM",
        title: "First Dance",
        description: "Our first dance as husband and wife",
    },
    {
        time: "6:30 PM",
        title: "Dancing & Celebration",
        description: "Dance the night away with us!",
    },
    {
        time: "9:00 PM",
        title: "Grand Exit",
        description: "Send us off with sparklers as we begin our journey",
    },
];

const TimelineItem = ({
    event,
    index,
}: {
    event: TimelineEvent;
    index: number;
}) => (
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
                <div className="text-secondary font-bold text-lg mb-2">
                    {event.time}
                </div>
                <h3 className="text-primary text-xl font-script mb-2">
                    {event.title}
                </h3>
                <p className="text-primary/70">{event.description}</p>
            </div>
        </div>

        <div className="shrink-0 relative md:order-1 order-first z-10 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                <Clock className="text-background" size={20} />
            </div>
        </div>

        <div className={`flex-1 hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`} />
    </motion.div>
);

export const TimelineSection = () => {
    return (
        <section id="timeline" className="py-20 bg-background relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-serif text-primary mb-4">
                        The Day Unfolds
                    </h2>
                    <p className="text-primary/70 text-lg max-w-2xl mx-auto">
                        A timeline of events for our special day
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/30 hidden md:block" />

                    <div className="space-y-8">
                        {events.map((event, index) => (
                            <TimelineItem
                                key={index}
                                event={event}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
