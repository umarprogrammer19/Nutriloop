"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
    {
        id: 1,
        image: "/p1.png",
        title: "Input",
        description: "Add your organic kitchen waste.",
    },
    {
        id: 2,
        image: "/p2.png",
        title: "Steam Sanitization",
        description: "72°C steam eliminates bacteria & odor.",
    },
    {
        id: 3,
        image: "/p3.png",
        title: "Drying",
        description: "Hot air removes moisture efficiently.",
    },
    {
        id: 4,
        image: "/p4.png",
        title: "Crushing",
        description: "Built-in blades break waste into pieces.",
    },
    {
        id: 5,
        image: "/p5.png",
        title: "Grinding",
        description: "High speed motor turns it into fine powder.",
    },
    {
        id: 6,
        image: "/p6.png",
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
            ref={sectionRef}
            className="relative w-full bg-[#080a06] overflow-hidden py-20 lg:py-28"
        >
            {/* Subtle radial glow at center */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,201,80,0.055) 0%, transparent 70%)",
                }}
            />

            {/* Top divider line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C950]/30 to-transparent" />

            <div className="relative z-10 2xl:max-w-[1400px] w-[90%] mx-auto px-4">

                {/* Header */}
                <div
                    className="text-center mb-16 lg:mb-20"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(28px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <span
                        className="inline-block text-[#00C950] text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                        style={{ letterSpacing: "0.22em" }}
                    >
                        HOW IT WORKS
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                        From Waste to Worth
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        NutriLoop uses advanced mechatronics and AI to convert organic waste
                        <br className="hidden md:block" />
                        into a safe, dry, and nutrient-rich powder.
                    </p>
                </div>

                {/* Steps Row */}
                <div className="relative flex items-start justify-between gap-0">

                    {/* Connecting line — sits behind circles */}
                    <div className="absolute left-0 right-0 top-[72px] flex items-center pointer-events-none z-0 px-[6%]">
                        <div className="flex-1 h-px bg-gradient-to-r from-[#00C950]/20 via-[#00C950]/50 to-[#00C950]/20" />
                    </div>

                    {steps.map((step, i) => (
                        <div
                            key={step.id}
                            className="relative z-10 flex flex-col items-center flex-1"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(36px)",
                                transition: `opacity 0.65s ease ${i * 0.1}s, transform 0.65s ease ${i * 0.1}s`,
                            }}
                            onMouseEnter={() => setActiveStep(step.id)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            {/* Connector dots / arrows between images (except last) */}
                            {i < steps.length - 1 && (
                                <div
                                    className="absolute right-0 top-[68px] translate-x-1/2 z-20 hidden lg:flex items-center"
                                    style={{ pointerEvents: "none" }}
                                >
                                    <ArrowRight active={visible} delay={i * 0.1 + 0.3} />
                                </div>
                            )}

                            {/* Circle image */}
                            <div
                                className="relative mb-5 cursor-pointer"
                                style={{
                                    transition: "transform 0.3s ease",
                                    transform:
                                        activeStep === step.id ? "scale(1.06)" : "scale(1)",
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
                                    className="relative w-[120px] h-[120px] md:w-[136px] md:h-[136px] lg:w-[148px] lg:h-[148px] rounded-full overflow-hidden"
                                    style={{
                                        border: "2px solid rgba(0,201,80,0.18)",
                                        background: "rgba(10,14,8,0.85)",
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover rounded-full"
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
                                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                                    style={{ background: "#00C950" }}
                                >
                                    {step.id}
                                </span>
                                <span className="text-white font-semibold text-sm md:text-[15px] whitespace-nowrap">
                                    {step.title}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-xs md:text-[13px] text-center leading-relaxed max-w-[130px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div
                    className="flex justify-center mt-14"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s",
                    }}
                >
                    <button
                        className="group relative flex items-center gap-3 border border-white/20 text-white text-sm font-medium px-7 py-3 rounded-full overflow-hidden transition-all duration-300 hover:border-[#00C950]/60"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            backdropFilter: "blur(6px)",
                        }}
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#00C950]">
                            Explore Full Process
                        </span>
                        <span
                            className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 group-hover:translate-x-0.5"
                            style={{ background: "rgba(255,255,255,0.08)" }}
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="transition-colors duration-300 group-hover:fill-[#00C950]"
                            >
                                <path
                                    d="M2 6h8M7 3l3 3-3 3"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-colors duration-300 group-hover:stroke-[#00C950]"
                                />
                            </svg>
                        </span>

                        {/* hover shimmer */}
                        <span
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,201,80,0.07) 0%, transparent 70%)",
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C950]/20 to-transparent" />
        </section>
    );
}

/* Small animated arrow between steps */
function ArrowRight({ active, delay }: { active: boolean; delay: number }) {
    return (
        <svg
            width="28"
            height="14"
            viewBox="0 0 28 14"
            fill="none"
            style={{
                opacity: active ? 1 : 0,
                transition: `opacity 0.5s ease ${delay}s`,
            }}
        >
            {/* Line */}
            <line
                x1="0"
                y1="7"
                x2="20"
                y2="7"
                stroke="#00C950"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.7"
            />
            {/* Arrowhead */}
            <path
                d="M18 3.5L24 7L18 10.5"
                stroke="#00C950"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
            />
        </svg>
    );
}