import { motion } from "motion/react";
import { Shirt, Gift, Camera } from "lucide-react";
import bpiQR from "../assets/images/QRCodes/BPIqr.png";
import mayaQR from "../assets/images/QRCodes/MayaQR.png";
import gcashQR from "../assets/images/QRCodes/GCashQR.png";

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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-8 shadow-lg"
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon className="text-secondary" size={24} />
            </div>
            <h3 className="text-primary text-2xl font-semibold">{title}</h3>
        </div>
        {children}
    </motion.div>
);

const QRCodePlaceholder = ({ label, QRimg}: { label: string, QRimg: string}) => (
    <div className="flex flex-col items-center">
        <div className="size-48 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
            <img src={QRimg} alt={`${label} QR Code`} className="object-contain" />
        </div>
        <p className="text-primary/70 text-sm font-sans">{label}</p>
    </div>
);

const bgColors = {
    gray: "bg-[var(--dusty-gray)]/60 border-[var(--dusty-gray)]",
    beige: "bg-[var(--muted-beige)]/60 border-[var(--muted-beige)]",
    sage: "bg-[var(--sage-green)]/60 border-[var(--sage-green)]",
    pink: "bg-[var(--muted-pink)]/60 border-[var(--muted-pink)]",
    default: "bg-white border-gray-100",
};

export const InfoSection = () => {
    const codes = [
        { label: "Sponsors", color: "gray", desc: "Dusty Gray" },
        { label: "Groomsmen", color: "beige", desc: "Muted Beige" },
        { label: "Bridesmaids", color: "sage", desc: "Sage Green" },
        { label: "Family & Kids", color: "pink", desc: "Muted Pink" },
    ];
    return (
        <section id="info" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-serif text-primary mb-4">
                        All You Need To Know
                    </h2>
                    <p className="text-primary/70 text-xl max-w-2xl mx-auto font-sans">
                        Important information for our guests
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-8">
                    <InfoCard icon={Shirt} title="Dress to Impress">
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-primary font-semibold mb-2 font-sans">
                                    Dress Code: Semi-Formal
                                </h4>
                                <p className="text-primary/70 font-sans">
                                    We invite you to celebrate with us in Modern Garden Formal attire, drawing inspiration from our palette of Muted Pink, Sage Green, Muted Beige, and Dusty Gray. Ladies are encouraged to wear elegant gowns or midi-dresses in these romantic tones—kindly reserving white for the bride—while gentlemen may opt for a Barong Tagalog or a tailored suit in neutral shades like gray, tan, or black.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {codes.map((item) => (
                                    <div key={item.label} className="flex flex-col items-center gap-3">
                                        <div className={`w-16 h-16 rounded-full shadow-inner border-2 ${bgColors[item.color as keyof typeof bgColors]}`} />
                                        <div className="text-center">
                                            <p className="font-semibold text-primary font-sans">{item.label}</p>
                                            <p className="text-xs text-primary/60 uppercase tracking-widest font-sans">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-primary/60 text-sm italic mt-4 font-sans text-center">
                                Please avoid wearing white or cream colors to
                                respect the bride's attire.
                            </p>
                        </div>
                    </InfoCard>

                    <InfoCard icon={Gift} title="Gift Guide">
                        <div className="space-y-4">
                            <p className="text-primary/70 font-sans">
                                Your presence at our wedding is the greatest
                                gift of all! However, if you wish to honor us
                                with a gift, we have set up the following
                                options:
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mt-6">
                                <QRCodePlaceholder label="BPI" QRimg={bpiQR}/>
                                <QRCodePlaceholder label="Maya" QRimg={mayaQR}/>
                                <QRCodePlaceholder label="GCash" QRimg={gcashQR}/>
                            </div>
                            <p className="text-primary/60 text-sm italic text-center mt-4 font-sans">
                                Scan the QR codes above for easy digital gifting!
                            </p>
                        </div>
                    </InfoCard>

                    <InfoCard icon={Camera} title="Unplugged Ceremony">
                        <div className="space-y-4">
                            <p className="text-primary/70 font-sans">
                                We kindly request that you put away your phones
                                and cameras during the ceremony. We want you to
                                be fully present with us as we exchange our
                                vows.
                            </p>
                            <div className="bg-secondary/10 rounded-lg p-6 border-l-4 border-secondary">
                                <p className="text-primary font-semibold mb-2 font-sans">
                                    📱 No Cameras Until We Say "I Do"
                                </p>
                                <p className="text-primary/70 font-sans">
                                    Our professional photographers will capture
                                    every special moment. After the ceremony
                                    concludes, feel free to take all the photos
                                    you'd like during the reception!
                                </p>
                            </div>
                            <p className="text-primary/60 text-sm italic font-sans text-center">
                                Thank you for helping us keep this moment
                                intimate and distraction-free.
                            </p>
                        </div>
                    </InfoCard>
                </div>
            </div>
        </section>
    );
};
