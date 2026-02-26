import { motion } from "motion/react";
import { MapPin, Calendar, AlertCircle } from "lucide-react";
import { useWedding } from "../contexts/WeddingContext";

const InfoCard = ({
    icon: Icon,
    title,
    children,
}: {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        // Swapped: dark background, background text
        className="bg-background/10 backdrop-blur-sm rounded-lg p-6 shadow-xl text-center border border-white/10"
    >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
            <Icon className="text-primary" size={28} />
        </div>
        <h3 className="text-background font-semibold text-lg mb-2">{title}</h3>
        <div className="text-background/70">{children}</div>
    </motion.div>
);

export const CeremonySection = () => {
    const { venue, weddingDate, ceremonyTime } = useWedding();

    const formattedDate = weddingDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        // Swapped: primary background
        <section id="ceremony" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-serif text-background mb-4">
                        Ceremony
                    </h2>
                    <p className="text-background/70 text-lg max-w-2xl mx-auto">
                        Join us as we celebrate the beginning of our forever
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    <InfoCard icon={Calendar} title="Date & Time">
                        <p className="text-xl font-medium mb-1 text-background">{formattedDate}</p>
                        <p className="text-lg text-background/80">{ceremonyTime}</p>
                    </InfoCard>
                    <InfoCard icon={MapPin} title="Venue & Location">
                        <p className="text-xl font-medium mb-1 text-background">{venue.name}</p>
                        <p className="text-lg text-background/80">{venue.address}</p>
                    </InfoCard>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="rounded-lg overflow-hidden shadow-2xl mb-6 border border-background/10">
                        <iframe
                            src={venue.mapUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Venue location map"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        // Swapped: Using secondary as the accent block
                        className="bg-secondary rounded-lg p-6 border-l-4 border-background"
                    >
                        <div className="flex items-start gap-3">
                            <AlertCircle
                                className="text-background shrink-0 mt-1"
                                size={24}
                            />
                            <div>
                                <h3 className="text-background font-bold text-lg mb-3">
                                    Important Notes
                                </h3>
                                <ul className="space-y-2 text-background/80 font-medium">
                                    <li>• Please arrive 30 minutes before the ceremony begins</li>
                                    <li>• Parking is available at the venue</li>
                                    <li>• The ceremony will be followed by a reception at the same location</li>
                                    <li>• For any questions, please contact our wedding coordinator</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
