import { motion } from "motion/react";
import { Users, Heart, Sparkles } from "lucide-react";

interface Person {
    name: string;
    relation?: string;
}

// Added 'variant' to handle your color requests
interface EntourageGroup {
    title: string;
    icon: React.ElementType;
    members: Person[];
    variant?: "gray" | "beige" | "sage" | "pink" | "default";
}

const entourageData: EntourageGroup[] = [
    {
        title: "Parents of the Groom",
        icon: Heart,
        variant: "pink",
        members: [{ name: "Benigno Anuyo" }, { name: "Luciana Anuyo" }],
    },
    {
        title: "Grandparent of the Bride",
        icon: Heart,
        variant: "pink",
        members: [{ name: "Clemente Doblon" }],
    },
    {
        title: "Principal Sponsors",
        icon: Users,
        variant: "gray",
        members: [
            { name: "Macario Garcia and Lucena Garcia" },
            { name: "Armando Buklatin and Ma. Ruena Buklatin" },
            { name: "Mary Jane Caparas and German Caparas" },
            { name: "Paciano Beltran and Vilma Beltran" },
            { name: "Elmer Revita and Bernadette Canlas" },
        ],
    },
    {
        title: "Best Men",
        icon: Users,
        variant: "beige",
        members: [{ name: "Nicole John Luceros" }],
    },
    {
        title: "Maids of Honor",
        icon: Users,
        variant: "sage",
        members: [{ name: "Maribeth Tolete" }],
    },
    {
        title: "Groomsmen",
        icon: Users,
        variant: "beige",
        members: [
            { name: "Jerome Alingod" },
            { name: "Sandy Roy Balbuena" },
            { name: "Micheal Dela Cruz" },
            { name: "Jumar Isales" },
            { name: "John Rutherford Malimban" },
            { name: "Jemuel Manalac" },
            { name: "Joseph Quinonero" },
            { name: "Jedidiah Tabago" },
        ],
    },
    {
        title: "Bridesmaids",
        icon: Users,
        variant: "sage",
        members: [
            { name: "Raquel Doblon" },
            { name: "Mary Grace Doblon" },
            { name: "Ma. Cristina Arnaiz" },
            { name: "Jane Quintans - Bagacina" },
            { name: "Veronica Esplanada - De Ocampo" },
            { name: "Jan Lois Nogoy - Frago" },
            { name: "Janica Joyce Inigo" },
            { name: "Rochelle Sollesta" },
        ],
    },
    {
        title: "Flower Girl",
        icon: Sparkles,
        variant: "pink",
        members: [{ name: "Kaisie Nicolette Luceros" }],
    },
    {
        title: "Ring Bearers",
        icon: Sparkles,
        variant: "pink",
        members: [
            { name: "Marc Dylan Cornelio" },
            { name: "John Maverick Plata" },
        ],
    },
];

const EntourageCard = ({ group }: { group: EntourageGroup }) => {
    const Icon = group.icon;

    // Color mapping based on your request
    const bgColors = {
        gray: "bg-slate-100 border-slate-300",
        beige: "bg-[#F5F5DC] border-[#E1D8C3]",
        sage: "bg-[#D1D9D0] border-[#B8C4B6]",
        pink: "bg-[#FADADD]/50 border-[#F4C2C2]",
        default: "bg-white border-gray-100",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            /* break-inside-avoid prevents cards from splitting across columns in masonry */
            className={`break-inside-avoid mb-6 rounded-2xl p-6 shadow-sm border ${
                bgColors[group.variant || "default"]
            }`}
        >
            <div className="flex items-center gap-3 mb-4">
                <Icon className="text-primary/60" size={20} />
                <h3 className="text-primary text-xl font-serif font-semibold">
                    {group.title}
                </h3>
            </div>
            <div className="space-y-2">
                {group.members.map((member, index) => (
                    <div key={index}>
                        <p className="text-primary/80 font-sans leading-tight">
                            {member.name}
                        </p>
                        {member.relation && (
                            <p className="text-primary/50 text-xs italic">
                                {member.relation}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export const EntourageSection = () => {
    return (
        <section id="entourage" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-6xl font-serif text-primary mb-4">
                        Our Beloved Wedding Entourage
                    </h2>
                    <div className="w-24 h-1 bg-secondary/30 mx-auto mb-4" />
                </div>

                {/* CSS Columns create a Masonry effect without heavy JS libraries */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">
                    {entourageData.map((group, index) => (
                        <EntourageCard key={index} group={group} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 max-w-2xl mx-auto text-center border-t border-primary/10 pt-10"
                >
                    <p className="text-primary/60 italic text-lg leading-relaxed">
                        "Your love and friendship have shaped our journey. Thank you for standing by us."
                    </p>
                    <p className="mt-4 font-serif text-xl text-primary">- Rochelle & Jayson -</p>
                </motion.div>
            </div>
        </section>
    );
};
