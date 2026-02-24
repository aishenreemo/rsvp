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
        className="bg-white rounded-lg p-6 shadow-lg text-center"
    >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
            <Icon className="text-secondary" size={28} />
        </div>
        <h3 className="text-primary font-semibold text-lg mb-2">{title}</h3>
        <div className="text-primary/70">{children}</div>
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
        <section id="ceremony" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-serif text-primary mb-4">
                        Ceremony
                    </h2>
                    <p className="text-primary/70 text-lg max-w-2xl mx-auto">
                        Join us as we celebrate the beginning of our forever
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    <InfoCard icon={Calendar} title="Date & Time">
                        <p className="text-xl font-medium mb-1">{formattedDate}</p>
                        <p className="text-lg">{ceremonyTime}</p>
                    </InfoCard>
                    <InfoCard icon={MapPin} title="Venue & Location">
                        <p className="text-xl font-medium mb-1">{venue.name}</p>
                        <p className="text-lg">{venue.address}</p>
                    </InfoCard>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="rounded-lg overflow-hidden shadow-xl mb-6">
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
                        className="bg-secondary/10 rounded-lg p-6 border-l-4 border-secondary"
                    >
                        <div className="flex items-start gap-3">
                            <AlertCircle
                                className="text-secondary shrink-0 mt-1"
                                size={24}
                            />
                            <div>
                                <h3 className="text-primary font-semibold text-lg mb-3">
                                    Important Notes
                                </h3>
                                <ul className="space-y-2 text-primary/70">
                                    <li>
                                        • Please arrive 30 minutes before the
                                        ceremony begins
                                    </li>
                                    <li>• Parking is available at the venue</li>
                                    <li>
                                        • The ceremony will be followed by a
                                        reception at the same location
                                    </li>
                                    <li>
                                        • For any questions, please contact our
                                        wedding coordinator
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
