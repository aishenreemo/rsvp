import { useState, useEffect } from "react";
import { useWedding } from "../contexts/WeddingContext";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center w-16 sm:w-24">
        <div className="text-4xl sm:text-6xl font-serif text-beige text-shadow-[1px_1px_1px_var(--background)] tabular-nums">
            {value.toString().padStart(2, "0")}
        </div>
        <div className="mt-2 text-[10px] sm:text-sm text-shadow-[1px_1px_1px_var(--background)] text-background uppercase tracking-widest font-light drop-shadow-md">
            {label}
        </div>
    </div>
);

export const CountdownTimer = () => {
    const { weddingDate } = useWedding();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = weddingDate.getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    return (
        <div className="flex gap-3 sm:gap-6 justify-center">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};
