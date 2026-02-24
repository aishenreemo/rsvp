import { createContext, useContext, type ReactNode } from "react";

interface WeddingConfig {
    bride: string;
    groom: string;
    coupleNames: string;
    weddingDate: Date;
    ceremonyTime: string;
    venue: {
        name: string;
        address: string;
        mapUrl: string;
    };
    colors: {
        primary: string;
        background: string;
        secondary: string;
    };
}

const weddingConfig: WeddingConfig = {
    bride: "Rochelle",
    groom: "Jayson",
    coupleNames: "Rochelle & Jayson",
    weddingDate: new Date("2026-05-26T16:00:00"),
    ceremonyTime: "2:00 PM",
    venue: {
        name: "Savannah Farm Tagaytay",
        address: "007 Barangay, Alfonso, Cavite",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.585407034925!2d120.88673120000001!3d14.101634400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9d1d436c328f%3A0x7ae344125ba4589a!2sSavanna%20Farm%20Tagaytay!5e0!3m2!1sen!2sph!4v1770865953692!5m2!1sen!2sph",
    },
    colors: {
        primary: "#4A3428",
        background: "#F5F1E8",
        secondary: "#2D5A3D",
    },
};

const WeddingContext = createContext<WeddingConfig>(weddingConfig);

export const useWedding = () => {
    const context = useContext(WeddingContext);
    if (!context) {
        throw new Error("useWedding must be used within WeddingProvider");
    }
    return context;
};

interface WeddingProviderProps {
    children: ReactNode;
}

export const WeddingProvider = ({ children }: WeddingProviderProps) => {
    return (
        <WeddingContext.Provider value={weddingConfig}>
            {children}
        </WeddingContext.Provider>
    );
};
