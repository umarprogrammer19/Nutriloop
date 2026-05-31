"use client";

import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration = 1800, start = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (ts: number) => {
            if (!startTime) startTime = ts;
            const p = Math.min((ts - startTime) / duration, 1);
            setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);
    return value;
}

const stats = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18" /><rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 9l2 2 4-4" />
            </svg>
        ),
        prefix: "", value: 125, suffix: "+", label: "Kg Waste Processed", sub: "And counting every day",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        prefix: "", value: 80, suffix: "+", label: "Happy Users", sub: "Early supporters & innovators",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 0 20" /><path d="M12 6c1.5 1.5 2 3 2 6s-.5 4.5-2 6" />
                <path d="M2 12h20" /><path d="M6 8c1 .5 2.5.5 6 .5s5-.5 6-.5" />
            </svg>
        ),
        prefix: "", value: 12, suffix: " Tons", label: "CO₂ Emissions Saved", sub: "Equivalent to planting 55 trees",
        displayValue: "1.2",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20s-4-1-4-8c0-4 3-7 7-7 1 0 2 .5 3 1" />
                <path d="M17 4s4 1 4 8c0 4-3 7-7 7-1 0-2-.5-3-1" />
                <line x1="12" y1="3" x2="12" y2="21" />
            </svg>
        ),
        prefix: "", value: 100, suffix: "%", label: "Sustainable Solution", sub: "Zero waste. Maximum impact.",
    },
];

const testimonials = [
    {
        quote: "NutriLoop is not just a product, it's a lifestyle upgrade. The future of zero-waste living!",
        name: "Aiman Zafar",
        role: "Sustainability Enthusiast",
        avatar: "AZ",
        color: "#2a5c3a",
        accent: "#00C950",
        tag: "⭐ Zero Waste Pioneer",
    },
    {
        quote: "A brilliant blend of AI, design and sustainability. Proud to see such innovations shaping a cleaner world!",
        name: "Dr. Sara Khan",
        role: "Environmental Scientist",
        avatar: "SK",
        color: "#1f4a2d",
        accent: "#4ade80",
        tag: "🌿 Climate Expert",
        featured: true,
    },
    {
        quote: "Compact, smart and impactful. NutriLoop makes sustainability simple and beautiful. A must-have.",
        name: "Usama Malik",
        role: "Product Designer",
        avatar: "UM",
        color: "#163d24",
        accent: "#86efac",
        tag: "🎨 Design Thinker",
    },
];

export default function ImpactAndTestimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(1);

    const v125 = useCounter(125, 1600, inView);
    const v80 = useCounter(80, 1400, inView);
    const v100 = useCounter(100, 1800, inView);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.12 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes glowPulse {
          0%,100% { opacity:.45; }
          50%      { opacity:.85; }
        }
        @keyframes leafFloat {
          0%,100% { transform:rotate(-6deg) translateY(0) scale(1); }
          50%      { transform:rotate(5deg)  translateY(-14px) scale(1.04); }
        }
        @keyframes statPop {
          0%   { transform:scale(.94); opacity:0; }
          60%  { transform:scale(1.03); }
          100% { transform:scale(1);   opacity:1; }
        }
        @keyframes marquee {
          from { transform:translateX(0); }
          to   { transform:translateX(-50%); }
        }
        @keyframes cardHover {
          from { transform:translateY(0) scale(1); }
          to   { transform:translateY(-6px) scale(1.01); }
        }
        @keyframes shimmerDiag {
          0%   { background-position:-200% -200%; }
          100% { background-position: 200%  200%; }
        }
        @keyframes quoteReveal {
          from { clip-path:inset(0 100% 0 0); opacity:0; }
          to   { clip-path:inset(0 0% 0 0);   opacity:1; }
        }

        .stat-card {
          opacity:0;
          transition: box-shadow .3s ease, transform .3s ease, border-color .3s ease;
        }
        .stat-card.visible {
          animation: statPop .65s cubic-bezier(.22,1,.36,1) forwards;
        }
        .stat-card:hover {
          transform:translateY(-4px) !important;
          box-shadow:0 0 32px rgba(0,201,80,0.18), 0 8px 32px rgba(0,0,0,.4) !important;
          border-color:rgba(0,201,80,0.4) !important;
        }

        .tcard {
          transition:all .4s cubic-bezier(.22,1,.36,1);
          cursor:pointer;
        }
        .tcard.active {
          border-color:rgba(0,201,80,0.5) !important;
          background:rgba(0,201,80,0.05) !important;
          box-shadow:0 0 0 1px rgba(0,201,80,0.3), 0 16px 48px rgba(0,0,0,.5) !important;
          transform:scale(1.02);
        }
        .tcard:not(.active):hover {
          border-color:rgba(0,201,80,0.2) !important;
          transform:scale(1.01);
        }

        .impact-leaf { animation: leafFloat 7s ease-in-out infinite; }
        .impact-leaf-r { animation: leafFloat 9s ease-in-out 1.5s infinite reverse; }

        .dot-indicator {
          transition:all .3s ease;
        }
        .dot-indicator.active {
          width:28px;
          background:#00C950 !important;
        }
      `}</style>

            <section
                ref={sectionRef}
                className="relative bg-[#070a05] overflow-hidden"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {/* PART 1 — OUR IMPACT */}
                <div className="relative py-12">
                    {/* Leaves decoration */}
                    <div className="impact-leaf pointer-events-none absolute top-6 left-4 opacity-60 hidden lg:block">
                        <svg width="70" height="140" viewBox="0 0 70 140" fill="none">
                            <path d="M10 130 Q-15 70 50 8 Q65 65 10 130Z" fill="rgba(0,201,80,0.18)" />
                            <path d="M10 130 Q18 90 44 30" stroke="rgba(0,201,80,0.3)" strokeWidth="1" fill="none" />
                        </svg>
                    </div>
                    <div className="impact-leaf pointer-events-none absolute top-4 left-14 opacity-40 hidden lg:block">
                        <svg width="45" height="90" viewBox="0 0 45 90" fill="none">
                            <path d="M8 82 Q-8 44 32 5 Q40 40 8 82Z" fill="rgba(0,201,80,0.12)" />
                        </svg>
                    </div>
                    <div className="impact-leaf-r pointer-events-none absolute top-6 right-4 opacity-55 hidden lg:block">
                        <svg width="65" height="130" viewBox="0 0 65 130" fill="none">
                            <path d="M55 122 Q80 62 10 7 Q-2 55 55 122Z" fill="rgba(0,201,80,0.17)" />
                            <path d="M55 122 Q48 85 18 28" stroke="rgba(0,201,80,0.28)" strokeWidth="1" fill="none" />
                        </svg>
                    </div>
                    <div className="impact-leaf-r pointer-events-none absolute top-3 right-14 opacity-35 hidden lg:block">
                        <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
                            <path d="M34 74 Q52 38 8 5 Q2 32 34 74Z" fill="rgba(0,201,80,0.1)" />
                        </svg>
                    </div>

                    {/* Ambient glow center */}
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-10">
                        <div className="w-150 h-75 rounded-full opacity-25"
                            style={{ background: "radial-gradient(ellipse, rgba(0,201,80,0.3) 0%, transparent 70%)", animation: "glowPulse 5s ease-in-out infinite" }} />
                    </div>

                    <div className="relative z-10 2xl:max-w-350 w-[90%] mx-auto px-4">
                        {/* Header */}
                        <div className="text-center mb-8"
                            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity .7s ease, transform .7s ease" }}>
                            <span className="text-[#00C950] text-sm font-semibold tracking-widest uppercase">
                                OUR IMPACT
                            </span>
                            <h2 className="mt-3 text-white font-bold leading-tight"
                                style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                                Building a Better Tomorrow
                            </h2>
                            <p className="mt-2 text-gray-200 text-base">Every cycle you run makes a real difference.</p>
                        </div>

                        {/* Stat cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((s, i) => (
                                <div
                                    key={i}
                                    className={`stat-card ${inView ? "visible" : ""} relative rounded-2xl p-6 flex gap-4`}
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        background: "rgba(14,18,12,0.9)",
                                        animationDelay: inView ? `${i * 0.1}s` : "0s",
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="shrink-0 flex items-start pt-1">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#00C950]"
                                            style={{ background: "rgba(0,201,80,0.08)", border: "1px solid rgba(0,201,80,0.2)" }}>
                                            {s.icon}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-[#00C950] font-bold leading-none"
                                            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3vw,2rem)", textShadow: "0 0 20px rgba(0,201,80,0.4)" }}>
                                            {s.displayValue
                                                ? s.displayValue
                                                : i === 0 ? v125
                                                    : i === 1 ? v80
                                                        : i === 3 ? v100
                                                            : s.value}
                                            {s.suffix}
                                        </p>
                                        <p className="text-white tracking-wide font-semibold text-sm mt-1" style={{ fontFamily: "'Poppins',sans-serif" }}>
                                            {s.label}
                                        </p>
                                        <p className="text-gray-200 text-xs mt-1 leading-snug">{s.sub}</p>
                                    </div>

                                    {/* Corner glow */}
                                    <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none rounded-2xl"
                                        style={{ background: "radial-gradient(circle at top right, rgba(0,201,80,0.07) 0%, transparent 70%)" }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom hairline */}
                    <div className="absolute bottom-0 inset-x-0 h-px"
                        style={{ background: "linear-gradient(90deg,transparent,rgba(0,201,80,0.2),transparent)" }} />
                </div>

                {/* PART 2 — TESTIMONIALS (Creative version) */}
                <div className="relative py-12">
                    {/* Background texture lines */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 59px,
                                rgba(0,201,80,1) 60px
                            ),
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 59px,
                                rgba(0,201,80,1) 60px
                            )
                            `,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    {/* Ambient glow */}
                    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-87.5"
                        style={{ background: "radial-gradient(ellipse, rgba(0,201,80,0.07) 0%, transparent 70%)", animation: "glowPulse 7s ease-in-out infinite" }} />

                    <div className="relative z-10 2xl:max-w-360 w-[90%] mx-auto px-4">

                        {/* Header */}
                        <div className="text-center mb-8"
                            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity .7s ease .3s, transform .7s ease .3s" }}>
                            <span className="text-[#00C950] text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "'Poppins',sans-serif" }}>
                                WHAT PEOPLE SAY
                            </span>
                            <h2 className="mt-2 text-white font-semibold leading-tight"
                                style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                                Loved by{" "}
                                <span style={{
                                    backgroundImage: "linear-gradient(90deg,#00C950,#4ade80,#00C950)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundSize: "200% auto",
                                    animation: "shimmerDiag 3s linear infinite",
                                }}>Innovators</span>
                            </h2>
                        </div>

                        {/* Testimonial cards — stacked layout with big quote mark */}
                        <div className="grid lg:grid-cols-3 gap-5">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className={`tcard relative rounded-2xl p-7 flex flex-col justify-between gap-6 ${activeTestimonial === i ? "active" : ""}`}
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        background: "rgba(11,15,10,0.95)",
                                        minHeight: 230,
                                        opacity: inView ? 1 : 0,
                                        transform: inView ? "translateY(0)" : "translateY(32px)",
                                        transition: `opacity .65s ease ${0.4 + i * .12}s, transform .65s ease ${0.4 + i * .12}s`,
                                    }}
                                    onClick={() => setActiveTestimonial(i)}
                                >

                                    {/* Tag pill */}
                                    <span className="inline-flex self-start items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full"
                                        style={{ background: "rgba(0,201,80,0.08)", border: "1px solid rgba(0,201,80,0.2)", color: "#00C950" }}>
                                        {t.tag}
                                    </span>

                                    {/* Quote */}
                                    <p className="text-gray-100 text-[15px] flex-1 relative z-10">
                                        {t.quote}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 pt-4"
                                        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                                        {/* Avatar circle */}
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                                            style={{ background: `linear-gradient(135deg, ${t.color}, ${t.accent}22)`, border: "1px solid rgba(0,201,80,0.25)" }}>
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Poppins',sans-serif" }}>
                                                {t.name}
                                            </p>
                                            <p className="text-gray-500 text-xs">{t.role}</p>
                                        </div>

                                        {/* Active indicator */}
                                        {activeTestimonial === i && (
                                            <div className="ml-auto w-2 h-2 rounded-full bg-[#00C950]"
                                                style={{ boxShadow: "0 0 8px rgba(0,201,80,0.8)" }} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dot navigation */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`dot-indicator h-2 rounded-full ${activeTestimonial === i ? "active" : "w-2"}`}
                                    style={{
                                        background: activeTestimonial === i ? "#00C950" : "rgba(255,255,255,0.2)",
                                        width: activeTestimonial === i ? 28 : 8,
                                    }}
                                    onClick={() => setActiveTestimonial(i)}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Floating marquee strip */}
                        <div className="mt-7 overflow-hidden relative py-4"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                            <div className="flex gap-12 whitespace-nowrap"
                                style={{ animation: "marquee 22s linear infinite" }}>
                                {[...Array(2)].map((_, ri) => (
                                    <div key={ri} className="flex gap-12 shrink-0">
                                        {["Zero Waste Living", "AI Powered Cycles", "72°C Sanitization", "Eco Friendly Output", "Smart Composting", "Nutrient-Rich Powder", "Sustainable Kitchen"].map((w, wi) => (
                                            <span key={wi} className="text-xs font-medium tracking-widest uppercase flex items-center gap-3"
                                                style={{ color: "rgba(0,201,80,0.45)", fontFamily: "'Poppins',sans-serif" }}>
                                                <span className="w-1 h-1 rounded-full bg-[#00C950] opacity-60" />
                                                {w}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}