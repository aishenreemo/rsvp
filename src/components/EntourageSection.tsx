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
            { name: "Mr. Robert Johnson" },
            { name: "Mrs. Patricia Johnson" },
        ],
    },
    {
        title: "Parents of the Bride",
        icon: Heart,
        members: [
            { name: "Mr. Michael Williams" },
            { name: "Mrs. Sarah Williams" },
        ],
    },
    {
        title: "Principal Sponsors",
        icon: Users,
        members: [
            { name: "Mr. & Mrs. David Anderson" },
            { name: "Mr. & Mrs. James Martinez" },
            { name: "Mr. & Mrs. Thomas Garcia" },
            { name: "Mr. & Mrs. Richard Rodriguez" },
        ],
    },
    {
        title: "Best Men",
        icon: Users,
        members: [
            { name: "Marcus Thompson", relation: "Brother" },
            { name: "Daniel Chen", relation: "Best Friend" },
        ],
    },
    {
        title: "Maids of Honor",
        icon: Users,
        members: [
            { name: "Emily Williams", relation: "Sister" },
            { name: "Jessica Martinez", relation: "Best Friend" },
        ],
    },
    {
        title: "Groomsmen",
        icon: Users,
        members: [
            { name: "Alex Rivera" },
            { name: "Christopher Lee" },
            { name: "Brandon Taylor" },
            { name: "Kevin Anderson" },
        ],
    },
    {
        title: "Bridesmaids",
        icon: Users,
        members: [
            { name: "Sophia Garcia" },
            { name: "Olivia Brown" },
            { name: "Emma Davis" },
            { name: "Ava Wilson" },
        ],
    },
    {
        title: "Secondary Sponsors",
        icon: Sparkles,
        members: [
            { name: "Candle: Mr. & Mrs. John Smith" },
            { name: "Veil: Mr. & Mrs. Peter Jones" },
            { name: "Cord: Mr. & Mrs. Mark White" },
        ],
    },
    {
        title: "Little Ones",
        icon: Sparkles,
        members: [
            { name: "Lily Anderson", relation: "Flower Girl" },
            { name: "Noah Martinez", relation: "Ring Bearer" },
            { name: "Grace Thompson", relation: "Coin Bearer" },
            { name: "Lucas Garcia", relation: "Bible Bearer" },
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
