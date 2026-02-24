import { useState } from "react";
import { motion } from "motion/react";
import { Send, Check } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    guests: string;
    attendance: string;
    dietaryRestrictions: string;
    message: string;
}

export const RSVPSection = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        guests: "1",
        attendance: "",
        dietaryRestrictions: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("RSVP submitted:", formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                guests: "1",
                attendance: "",
                dietaryRestrictions: "",
                message: "",
            });
        }, 3000);
    };

    return (
        <section id="rsvp" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-6xl font-serif text-primary mb-4">
                        RSVP
                    </h2>
                    <p className="text-primary/70 text-lg max-w-2xl mx-auto">
                        Please let us know if you'll be able to join us on our
                        special day
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    {isSubmitted ? (
                        <div className="bg-white rounded-lg p-12 shadow-lg text-center">
                            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="text-background" size={40} />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary mb-4">
                                Thank You!
                            </h3>
                            <p className="text-primary/70">
                                Your RSVP has been received. We can't wait to
                                celebrate with you!
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-lg p-8 shadow-lg space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-primary mb-2"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-input-background focus:outline-none focus:ring-2 focus:ring-secondary"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-primary mb-2"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-input-background focus:outline-none focus:ring-2 focus:ring-secondary"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="attendance"
                                    className="block text-primary mb-2"
                                >
                                    Will you be attending? *
                                </label>
                                <select
                                    id="attendance"
                                    name="attendance"
                                    value={formData.attendance}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-input-background focus:outline-none focus:ring-2 focus:ring-secondary"
                                >
                                    <option value="">Please select</option>
                                    <option value="yes">
                                        Joyfully accepts
                                    </option>
                                    <option value="no">
                                        Regretfully declines
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="guests"
                                    className="block text-primary mb-2"
                                >
                                    Number of Guests
                                </label>
                                <select
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-input-background focus:outline-none focus:ring-2 focus:ring-secondary"
                                >
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="dietaryRestrictions"
                                    className="block text-primary mb-2"
                                >
                                    Dietary Restrictions
                                </label>
                                <input
                                    type="text"
                                    id="dietaryRestrictions"
                                    name="dietaryRestrictions"
                                    value={formData.dietaryRestrictions}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-input-background focus:outline-none focus:ring-2 focus:ring-secondary"
                                    placeholder="None, vegetarian, gluten-free, etc."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-primary mb-2"
                                >
                                    Message for the Couple
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-input-background focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                                    placeholder="Share your warm wishes..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-secondary/90 text-background py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Submit RSVP
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
