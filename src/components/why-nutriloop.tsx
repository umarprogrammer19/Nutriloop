"use client";

import { useEffect, useRef, useState } from "react";

const features = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
        label: "AI Powered",
        desc: "Smart sensors and AI algorithms optimize every cycle.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="8" />
                <line x1="12" y1="16" x2="12" y2="22" />
                <line x1="2" y1="12" x2="8" y2="12" />
                <line x1="16" y1="12" x2="22" y2="12" />
            </svg>
        ),
        label: "Hygienic & Safe",
        desc: "72°C steam sanitization ensures safe & odorless output.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        label: "Compact Design",
        desc: "Juicer-sized, sleek and perfect for modern kitchens.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
        ),
        label: "Multi-Purpose Output",
        desc: "Perfect powder for plants, soil & sustainable living.",
    },
];

export default function WhyNutriLoop() {
    const [mounted, setMounted] = useState(false);
    const [playing, setPlaying] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setMounted(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes featureIn {
          from { opacity: 0; transform: translateX(22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes scanH {
          0%   { left: -100%; }
          100% { left: 100%;  }
        }
        @keyframes glowBreath {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 1;    }
        }
        @keyframes leafSway {
          0%, 100% { transform: rotate(-4deg) translateY(0);   }
          50%       { transform: rotate(4deg)  translateY(-10px); }
        }

        .why-card-left  { animation: cardIn 0.75s cubic-bezier(.22,1,.36,1) forwards; }
        .why-card-right { animation: cardIn 0.75s cubic-bezier(.22,1,.36,1) 0.15s forwards; }

        .play-btn {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 12px rgba(0,201,80,0.18), 0 0 32px rgba(0,201,80,0.4);
        }

        .feature-row {
          opacity: 0;
          transform: translateX(20px);
        }
        .feature-row.visible {
          animation: featureIn 0.55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .feature-row:hover .feat-icon-wrap {
          box-shadow: 0 0 0 1px rgba(0,201,80,0.55), 0 0 18px rgba(0,201,80,0.25);
          background: rgba(0,201,80,0.12);
        }

        .leaf-left  { animation: leafSway 6s ease-in-out infinite; }
        .leaf-right { animation: leafSway 8s ease-in-out 1s infinite reverse; }
      `}</style>

            <section
                ref={sectionRef}
                className="relative bg-[#070a05] py-20 lg:py-28 overflow-hidden"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {/* Ambient glows */}
                <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(0,201,80,0.08) 0%, transparent 70%)", animation: "glowBreath 6s ease-in-out infinite" }} />
                <div className="pointer-events-none absolute -right-24 bottom-10 w-[320px] h-[320px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(0,201,80,0.06) 0%, transparent 70%)", animation: "glowBreath 8s ease-in-out infinite reverse" }} />

                {/* Decorative leaves */}
                <div className="leaf-left pointer-events-none absolute left-0 top-8 opacity-70 select-none hidden xl:block">
                    <svg width="90" height="180" viewBox="0 0 90 180" fill="none">
                        <path d="M10 170 Q-20 90 60 10 Q80 80 10 170Z" fill="rgba(0,201,80,0.18)" />
                        <path d="M10 170 Q20 120 55 40" stroke="rgba(0,201,80,0.35)" strokeWidth="1" fill="none" />
                    </svg>
                </div>
                <div className="leaf-right pointer-events-none absolute right-0 bottom-12 opacity-60 select-none hidden xl:block">
                    <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
                        <path d="M70 150 Q100 75 20 5 Q5 70 70 150Z" fill="rgba(0,201,80,0.15)" />
                        <path d="M70 150 Q60 100 25 35" stroke="rgba(0,201,80,0.3)" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                {/* Top hairline */}
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,201,80,0.3), transparent)" }} />

                <div className="relative z-10 2xl:max-w-[1400px] w-[90%] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-6 items-stretch">

                        {/* ── LEFT: Video card ── */}
                        <div
                            className={`why-card-left relative rounded-2xl overflow-hidden ${mounted ? "opacity-100" : "opacity-0"}`}
                            style={{
                                border: "1px solid rgba(255,255,255,0.07)",
                                background: "rgba(255,255,255,0.02)",
                                minHeight: 420,
                            }}
                        >
                            {/* Thumbnail image */}
                            <div className="relative w-full h-full min-h-[380px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/why-bg.png"
                                    alt="NutriLoop in action"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={(e) => {
                                        // fallback gradient if image missing
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />

                                {/* Fallback dark gradient (visible if image missing) */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: "linear-gradient(135deg, #0d1a0d 0%, #0a1a10 40%, #071208 100%)",
                                    }}
                                />

                                {/* Subtle dark overlay for readability */}
                                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />

                                {/* Horizontal scan shimmer */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div
                                        className="absolute top-0 bottom-0 w-32"
                                        style={{
                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                                            animation: "scanH 3.5s ease-in-out infinite",
                                        }}
                                    />
                                </div>

                                {/* Play button — centered */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        className="play-btn relative z-10 flex items-center justify-center w-16 h-16 rounded-full"
                                        style={{
                                            background: "rgba(0,201,80,0.9)",
                                            boxShadow: "0 0 0 8px rgba(0,201,80,0.18), 0 0 24px rgba(0,201,80,0.3)",
                                        }}
                                        onClick={() => setPlaying(!playing)}
                                        aria-label="Play video"
                                    >
                                        {/* Ripple rings */}
                                        {[0, 1].map((i) => (
                                            <span
                                                key={i}
                                                className="absolute inset-0 rounded-full border border-[#00C950]/50"
                                                style={{
                                                    animation: `ripple 2s ease-out ${i * 0.8}s infinite`,
                                                }}
                                            />
                                        ))}

                                        {/* Triangle */}
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="black">
                                            <polygon points="6,4 20,12 6,20" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Bottom caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3
                                        className="text-white text-xl font-semibold mb-1"
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                    >
                                        See NutriLoop in Action
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Watch how NutriLoop transforms waste into value.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Features card ── */}
                        <div
                            className={`why-card-right relative rounded-2xl p-8 lg:p-10 flex flex-col justify-center ${mounted ? "opacity-100" : "opacity-0"}`}
                            style={{
                                border: "1px solid rgba(255,255,255,0.07)",
                                background: "rgba(14,18,12,0.85)",
                            }}
                        >
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                                style={{ background: "radial-gradient(circle at top right, rgba(0,201,80,0.1) 0%, transparent 70%)" }} />

                            {/* Label */}
                            <p
                                className="text-[#00C950] text-xs font-semibold tracking-[0.22em] uppercase mb-4"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                WHY NUTRILOOP?
                            </p>

                            {/* Heading */}
                            <h2
                                className="text-white font-bold leading-tight mb-8"
                                style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Smarter. Cleaner.{" "}
                                <span style={{ color: "#00C950" }}>Greener.</span>
                            </h2>

                            {/* Feature rows */}
                            <div className="flex flex-col gap-6">
                                {features.map((f, i) => (
                                    <div
                                        key={i}
                                        className={`feature-row flex items-start gap-4 ${mounted ? "visible" : ""}`}
                                        style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                                    >
                                        {/* Icon box */}
                                        <div
                                            className="feat-icon-wrap flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl text-[#00C950] transition-all duration-300"
                                            style={{
                                                background: "rgba(0,201,80,0.07)",
                                                border: "1px solid rgba(0,201,80,0.2)",
                                            }}
                                        >
                                            {f.icon}
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h4
                                                className="text-white font-semibold text-[15px] mb-0.5"
                                                style={{ fontFamily: "'Syne', sans-serif" }}
                                            >
                                                {f.label}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {f.desc}
                                            </p>
                                        </div>

                                        {/* Subtle right accent */}
                                        <div className="ml-auto flex-shrink-0 w-1 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ background: "linear-gradient(to bottom, #00C950, transparent)" }} />
                                    </div>
                                ))}
                            </div>

                            {/* Bottom separator + CTA */}
                            <div className="mt-9 pt-7 border-t border-white/5 flex items-center justify-between gap-4">
                                <p className="text-gray-500 text-xs max-w-[200px] leading-relaxed">
                                    Engineered for daily sustainability without compromise.
                                </p>
                                <button
                                    className="flex-shrink-0 flex items-center gap-2 text-[#00C950] text-sm font-medium transition-all duration-300 hover:gap-3"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    Learn more
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom hairline */}
                <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,201,80,0.2), transparent)" }} />
            </section>
        </>
    );
}