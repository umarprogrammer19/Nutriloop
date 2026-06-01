"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
    {
        id: 1,
        image: "/w1.png",
        title: "Input",
        description: "Add your organic kitchen waste.",
    },
    {
        id: 2,
        image: "/w2.png",
        title: "Steam Sanitization",
        description: "72°C steam eliminates bacteria & odor.",
    },
    {
        id: 3,
        image: "/w3.png",
        title: "Drying",
        description: "Hot air removes moisture efficiently.",
    },
    {
        id: 4,
        image: "/w4.png",
        title: "Crushing",
        description: "Built-in blades break waste into pieces.",
    },
    {
        id: 5,
        image: "/w5.png",
        title: "Grinding",
        description: "High speed motor turns it into fine powder.",
    },
    {
        id: 6,
        image: "/w6.png",
        title: "Collection",
        description: "Nutrient-rich powder ready to reuse.",
    },
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const [activeStep, setActiveStep] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="relative w-full bg-[#080a06] overflow-hidden py-10 md:py-12"
        >
            {/* Top divider line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00C950]/30 to-transparent" />

            <div className="relative z-10 2xl:max-w-360 w-[90%] mx-auto px-4">
                {/* Header */}
                <div
                    className="text-center mb-16"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(28px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <span
                        className="inline-block text-[#00C950] text-md font-semibold tracking-[0.25em] uppercase mb-4"
                        style={{ letterSpacing: "0.22em" }}
                    >
                        HOW IT WORKS
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
                        From Waste to Worth
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-md max-w-xl mx-auto">
                        NutriLoop uses advanced mechatronics and AI to convert organic waste
                        into a safe, dry, and nutrient-rich powder.
                    </p>
                </div>

                {/* Steps Row (Desktop) */}
                <div className="hidden lg:flex relative items-start justify-between">
                    {/* Connecting line — sits behind circles */}
                    <div className="absolute left-0 right-0 top-18 flex items-center pointer-events-none z-0 px-[6%]">
                        <div className="flex-1 h-0.5 bg-linear-to-r from-[#00C950]/20 via-[#00C950]/50 to-[#00C950]/20" />
                    </div>

                    {steps.map((step, i) => (
                        <div
                            key={step.id}
                            className="relative z-10 flex flex-col items-center"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(36px)",
                                transition: `opacity 0.65s ease ${i * 0.1}s, transform 0.65s ease ${i * 0.1}s`,
                            }}
                            onMouseEnter={() => setActiveStep(step.id)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            {/* Circle image */}
                            <div
                                className="relative mb-5 cursor-pointer"
                                style={{
                                    transition: "transform 0.3s ease",
                                    transform: activeStep === step.id ? "scale(1.06)" : "scale(1)",
                                }}
                            >
                                {/* Outer glow ring */}
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        boxShadow:
                                            activeStep === step.id
                                                ? "0 0 0 2px rgba(0,201,80,0.7), 0 0 24px rgba(0,201,80,0.35)"
                                                : "0 0 0 1.5px rgba(0,201,80,0.25), 0 0 12px rgba(0,201,80,0.08)",
                                        transition: "box-shadow 0.35s ease",
                                        borderRadius: "50%",
                                    }}
                                />

                                {/* Dark ring border */}
                                <div
                                    className="relative w-30 h-30 md:w-34 md:h-34 lg:w-37 lg:h-37 rounded-full overflow-hidden bg-black flex justify-center items-center"
                                    style={{
                                        border: "2px solid rgba(0,201,80,0.18)",
                                        background: "rgba(10,14,8,0.85)",
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        height={500}
                                        width={500}
                                        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover"
                                        style={{
                                            filter:
                                                activeStep === step.id
                                                    ? "brightness(1.1) saturate(1.1)"
                                                    : "brightness(0.92) saturate(0.95)",
                                            transition: "filter 0.35s ease",
                                        }}
                                    />

                                    {/* Subtle inner vignette */}
                                    <div
                                        className="absolute inset-0 rounded-full pointer-events-none"
                                        style={{
                                            background:
                                                "radial-gradient(circle, transparent 55%, rgba(0,0,0,0.55) 100%)",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Step number + title */}
                            <div className="flex items-center gap-2 mb-2">
                                <span
                                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[12px] font-bold text-black"
                                    style={{ background: "#00C950" }}
                                >
                                    {step.id}
                                </span>
                                <span className="text-white font-semibold text-sm md:text-[16px] whitespace-nowrap">
                                    {step.title}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-white/90 tracking-wide text-xs md:text-[13px] text-center max-w-36">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Version (Updated to Grid) */}
                <div className="lg:hidden">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 pb-4">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="relative mb-4">
                                    <div
                                        className="
                                        w-24
                                        h-24
                                        sm:w-28
                                        sm:h-28
                                        rounded-full
                                        overflow-hidden
                                        border
                                        border-[#00C950]/30
                                        bg-black
                                      "
                                    >
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-1 mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#00C950] text-black text-xs font-bold flex items-center justify-center">
                                            {step.id}
                                        </span>
                                        <span className="text-white font-semibold text-sm">
                                            {step.title}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-white/80 text-xs sm:text-sm px-2">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00C950]/20 to-transparent" />
        </section>
    );
}