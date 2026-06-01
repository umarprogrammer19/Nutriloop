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
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setMounted(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.play().catch(() => {
                    // Autoplay blocked, user needs to interact
                    setPlaying(false);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [playing]);

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
                id="why-nutriloop"
                ref={sectionRef}
                className="relative bg-[#070a05] py-16 md:py-24 overflow-hidden bg-[url('/why-bg.png')] bg-cover bg-center bg-no-repeat"
            >
                {/* Top hairline */}
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,201,80,0.3), transparent)" }} />

                <div className="relative z-10 max-w-7xl w-[90%] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                        {/* ── LEFT: Video card ── */}
                        <div
                            className={`why-card-left relative w-full h-87.5 sm:h-112.5 lg:h-auto lg:min-h-full rounded-2xl overflow-hidden ${mounted ? "opacity-100" : "opacity-0"}`}
                        >
                            {/* Video */}
                            <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-fill z-10"
                                // poster="/why-bg.png"
                                muted
                                loop
                                playsInline
                                preload="auto"
                            >
                                <source src="https://firebasestorage.googleapis.com/v0/b/dungeonmind-ea23c.firebasestorage.app/o/WhatsApp%20Video%202026-06-01%20at%202.12.40%20AM.mp4?alt=media&token=92b4b5f3-404d-4b87-9c4c-221cb7555146" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Scan effect */}
                            {!playing && (
                                <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
                                    <div
                                        className="absolute top-0 bottom-0 w-32"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                                            animation: "scanH 3.5s ease-in-out infinite",
                                        }}
                                    />
                                </div>
                            )}

                            {/* Play Button */}
                            {!playing && (
                                <div className="absolute inset-0 flex items-center justify-center z-40">
                                    <button
                                        className="play-btn relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full"
                                        style={{
                                            background: "rgba(0,201,80,0.9)",
                                            boxShadow:
                                                "0 0 0 8px rgba(0,201,80,0.18), 0 0 24px rgba(0,201,80,0.3)",
                                        }}
                                        onClick={() => setPlaying(true)}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="black" className="sm:w-5.5 sm:h-5.5">
                                            <polygon points="6,4 20,12 6,20" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* ── RIGHT: Features card ── */}
                        <div
                            className={`why-card-right relative rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${mounted ? "opacity-100" : "opacity-0"}`}
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
                                className="text-[#00C950] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4"
                                style={{ fontFamily: "sans-serif" }}
                            >
                                WHY NUTRILOOP?
                            </p>

                            {/* Heading */}
                            <h2
                                className="text-white font-semibold tracking-wide leading-tight mb-6 sm:mb-8"
                                style={{
                                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Smarter. Cleaner.{" "}
                                <span style={{ color: "#00C950" }}>Greener.</span>
                            </h2>

                            {/* Feature rows */}
                            <div className="flex flex-col gap-5 sm:gap-6">
                                {features.map((f, i) => (
                                    <div
                                        key={i}
                                        className={`feature-row flex items-start gap-3 sm:gap-4 ${mounted ? "visible" : ""}`}
                                        style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                                    >
                                        {/* Icon box */}
                                        <div
                                            className="feat-icon-wrap shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-[#00C950] transition-all duration-300"
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
                                                className="text-white tracking-wide font-semibold text-[14px] sm:text-[15px] mb-0.5"
                                            >
                                                {f.label}
                                            </h4>
                                            <p className="text-white/90 tracking-wide text-xs sm:text-sm">
                                                {f.desc}
                                            </p>
                                        </div>

                                        {/* Subtle right accent */}
                                        <div className="hidden sm:block ml-auto shrink-0 w-1 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ background: "linear-gradient(to bottom, #00C950, transparent)" }} />
                                    </div>
                                ))}
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