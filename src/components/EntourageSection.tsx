import { motion } from "motion/react";
import { Users, Heart, Sparkles } from "lucide-react";

interface Person {
    name: string;
    relation?: string;
}

interface EntourageGroup {
    title: string;
    icon: React.ElementType;
    members: Person[];
}

const entourageData: EntourageGroup[] = [
    {
        title: "Parents of the Groom",
        icon: Heart,
        members: [
            { name: "Benigno Anuyo" },
            { name: "Luciana Anuyo" },
        ],
    },
    {
        title: "Grandparent of the Bride",
        icon: Heart,
        members: [
            { name: "Clemente Doblon" },
        ],
    },
    {
        title: "Principal Sponsors",
        icon: Users,
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
        members: [
            { name: "Nicole John Luceros" },
        ],
    },
    {
        title: "Maids of Honor",
        icon: Users,
        members: [
            { name: "Maribeth Tolete" },
        ],
    },
    {
        title: "Groomsmen",
        icon: Users,
        members: [
            { name: "Jerome Alingod" },
            { name: "Sandy Roy Balbuena" },
            { name: "Micheal Dela Cruz" },
            { name: "Jumar Isales" },
            { name: "John Rutherford Malimban" },
            { name: "Jemuel Manalac" },
            { name: "Joseph Quinonero" },
            { name: "Jedidiah Tabago " },
        ],
    },
    {
        title: "Bridesmaids",
        icon: Users,
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
        members: [
            { name: "Kaisie Nicolette Luceros" },
        ],
    },
    {
        title: "Ring Bearers",
        icon: Sparkles,
        members: [
            { name: "Marc Dylan Cornelio" },
            { name: "John Maverick Plata" },
        ],
    },
];

const EntourageCard = ({ group }: { group: EntourageGroup }) => {
    const Icon = group.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
        >
            <div className="flex items-center justify-center gap-3 mb-6">
                <Icon className="text-secondary" size={24} />
                <h3 className="text-primary text-2xl font-semibold text-center">
                    {group.title}
                </h3>
            </div>
            <div className="space-y-3">
                {group.members.map((member, index) => (
                    <div key={index} className="text-center">
                        <p className="text-primary font-medium">
                            {member.name}
                        </p>
                        {member.relation && (
                            <p className="text-primary/60 text-sm">
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-serif text-primary mb-4">
                        Our Beloved Wedding Entourage
                    </h2>
                    <p className="text-primary/70 text-lg max-w-2xl mx-auto">
                        We are honored to have these special people stand with
                        us on our big day
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
                    {entourageData.map((group, index) => (
                        <EntourageCard key={index} group={group} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="bg-secondary/10 rounded-lg p-8 sm:p-12 border-t-4 border-secondary">
                        <Heart
                            className="text-secondary mx-auto mb-6"
                            size={48}
                            fill="currentColor"
                        />
                        <blockquote className="text-primary/80 text-lg sm:text-2xl italic mb-6 leading-relaxed">
                            "We are so grateful to have each and every one of
                            you as part of our journey. Your love, support, and
                            friendship have shaped who we are today. Thank you
                            for standing by our side as we begin this beautiful
                            chapter together."
                        </blockquote>
                        <p className="text-primary font-semibold text-xl">
                            - Rochelle & Jayson
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
