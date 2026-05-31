"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
    {
        q: "What type of waste can NutriLoop process?",
        a: "NutriLoop can process most organic kitchen waste including fruit peels, vegetable scraps, eggshells, coffee grounds, tea leaves and other food leftovers.",
    },
    {
        q: "Is the output safe to use?",
        a: "Absolutely. The 72°C steam sanitization cycle eliminates 99.9% of bacteria and pathogens, ensuring the resulting powder is completely safe for use in gardens, plant soil, and composting.",
    },
    {
        q: "How long does the processing take?",
        a: "A standard cycle takes between 2 to 4 hours depending on the type and quantity of waste loaded. Smart sensors automatically optimize the duration for best results.",
    },
    {
        q: "Can the powder be reused?",
        a: "Yes! The nutrient-rich powder output is perfect for fertilizing plants, enriching garden soil, or contributing to community composting programs — zero waste, maximum value.",
    },
    {
        q: "Is NutriLoop suitable for apartments?",
        a: "Definitely. NutriLoop is juicer-sized and designed specifically for modern compact kitchens. Its odor-free operation makes it ideal for apartments and small spaces.",
    },
    {
        q: "Does NutriLoop use AI?",
        a: "Yes. NutriLoop's AI engine continuously monitors temperature, humidity, and waste composition through smart sensors to optimize every cycle for efficiency and quality output.",
    },
];

const badges = [
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
            </svg>
        ),
        label: "Zero Odor",
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        label: "Hygienic Process",
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20s-4-1-4-8c0-4 3-7 7-7 1 0 2 .5 3 1" />
                <path d="M17 4s4 1 4 8c0 4-3 7-7 7-1 0-2-.5-3-1" />
                <line x1="12" y1="3" x2="12" y2="21" />
            </svg>
        ),
        label: "Eco Friendly",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number>(0);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes glowBreath {
          0%,100% { opacity:.4; }
          50%      { opacity:.8; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity:0; transform:translateX(24px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes rotateRing {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes leafSway {
          0%,100% { transform:rotate(-3deg) translateY(0); }
          50%      { transform:rotate(3deg)  translateY(-8px); }
        }
        @keyframes accordionOpen {
          from { opacity:0; transform:translateY(-6px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes shimmerLine {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }

        .faq-item {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(12,16,11,0.9);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color .3s ease, box-shadow .3s ease;
        }
        .faq-item.active {
          border-color: rgba(0,201,80,0.35);
          box-shadow: 0 0 0 1px rgba(0,201,80,0.1), 0 8px 32px rgba(0,0,0,.35);
        }
        .faq-item:not(.active):hover {
          border-color: rgba(0,201,80,0.18);
        }

        .faq-btn {
          width:100%;
          display:flex;
          align-items:center;
          gap:14px;
          padding:18px 20px;
          text-align:left;
          background:transparent;
          cursor:pointer;
          transition:background .2s ease;
        }
        .faq-btn:hover { background:rgba(0,201,80,0.02); }

        .q-icon {
          flex-shrink:0;
          width:28px; height:28px;
          border-radius:50%;
          border:1.5px solid rgba(0,201,80,0.45);
          display:flex; align-items:center; justify-content:center;
          color:#00C950;
          font-size:13px; font-weight:700;
          transition:all .3s ease;
          font-family:'Syne',sans-serif;
        }
        .faq-item.active .q-icon {
          background:rgba(0,201,80,0.12);
          border-color:#00C950;
          box-shadow:0 0 10px rgba(0,201,80,0.3);
        }

        .chevron {
          margin-left:auto;
          flex-shrink:0;
          width:28px; height:28px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,0.08);
          display:flex; align-items:center; justify-content:center;
          color:rgba(156,163,175,1);
          transition:all .35s cubic-bezier(.22,1,.36,1);
        }
        .faq-item.active .chevron {
          transform:rotate(180deg);
          border-color:rgba(0,201,80,0.4);
          color:#00C950;
          background:rgba(0,201,80,0.08);
        }

        .answer-body {
          overflow:hidden;
          transition:max-height .45s cubic-bezier(.22,1,.36,1), opacity .3s ease;
        }

        .badge-icon-wrap {
          width:52px; height:52px;
          border-radius:14px;
          border:1px solid rgba(0,201,80,0.22);
          background:rgba(0,201,80,0.07);
          display:flex; align-items:center; justify-content:center;
          color:#00C950;
          transition:all .3s ease;
          margin:0 auto 10px;
        }
        .badge-col:hover .badge-icon-wrap {
          border-color:rgba(0,201,80,0.55);
          background:rgba(0,201,80,0.13);
          box-shadow:0 0 16px rgba(0,201,80,0.2);
          transform:translateY(-3px);
        }
      `}</style>

            <section
                ref={sectionRef}
                className="relative bg-[#070a05] py-20 lg:py-28 overflow-hidden"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
                {/* Top hairline */}
                <div className="absolute top-0 inset-x-0 h-px"
                    style={{ background: "linear-gradient(90deg,transparent,rgba(0,201,80,0.3),transparent)" }} />

                {/* Ambient glow left */}
                <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full"
                    style={{ background: "radial-gradient(circle,rgba(0,201,80,0.07) 0%,transparent 70%)", animation: "glowBreath 6s ease-in-out infinite" }} />

                {/* Ambient glow right */}
                <div className="pointer-events-none absolute -right-32 bottom-10 w-100 h-100 rounded-full"
                    style={{ background: "radial-gradient(circle,rgba(0,201,80,0.06) 0%,transparent 70%)", animation: "glowBreath 8s ease-in-out infinite reverse" }} />

                <div className="relative z-10 2xl:max-w-360 w-[90%] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* ── LEFT: FAQ ── */}
                        <div
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(28px)",
                                transition: "opacity .75s ease, transform .75s ease",
                            }}
                        >
                            {/* Label */}
                            <span
                                className="text-[#00C950] text-xs font-semibold tracking-[0.22em] uppercase"
                                style={{ fontFamily: "'Syne',sans-serif" }}
                            >
                                FAQ
                            </span>

                            {/* Heading */}
                            <h2
                                className="mt-3 text-white font-bold leading-tight"
                                style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.85rem,3.5vw,2.75rem)", letterSpacing: "-0.02em" }}
                            >
                                Frequently Asked Questions
                            </h2>

                            <p className="mt-3 text-gray-400 text-[15px]">
                                Everything you need to know about NutriLoop.
                            </p>

                            {/* Accordion */}
                            <div className="mt-8 flex flex-col gap-3">
                                {faqs.map((faq, i) => (
                                    <div
                                        key={i}
                                        className={`faq-item ${open === i ? "active" : ""}`}
                                        style={{
                                            opacity: inView ? 1 : 0,
                                            transform: inView ? "translateY(0)" : "translateY(16px)",
                                            transition: `opacity .6s ease ${0.1 + i * 0.07}s, transform .6s ease ${0.1 + i * 0.07}s`,
                                        }}
                                    >
                                        <button
                                            className="faq-btn"
                                            onClick={() => setOpen(open === i ? -1 : i)}
                                            aria-expanded={open === i}
                                        >
                                            {/* ? icon */}
                                            <span className="q-icon">?</span>

                                            {/* Question */}
                                            <span
                                                className="text-white text-[14.5px] font-medium flex-1"
                                                style={{ fontFamily: "'Syne',sans-serif" }}
                                            >
                                                {faq.q}
                                            </span>

                                            {/* Chevron */}
                                            <span className="chevron">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </span>
                                        </button>

                                        {/* Answer */}
                                        <div
                                            className="answer-body"
                                            style={{ maxHeight: open === i ? "200px" : "0px", opacity: open === i ? 1 : 0 }}
                                        >
                                            <div
                                                className="px-5 pb-5 pt-0"
                                                style={{ animation: open === i ? "accordionOpen .35s ease forwards" : "none" }}
                                            >
                                                {/* Green top rule */}
                                                <div className="h-px mb-4"
                                                    style={{ background: "linear-gradient(90deg,rgba(0,201,80,0.3),transparent)" }} />
                                                <p className="text-gray-400 text-sm leading-relaxed pl-10.5">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT: Plant + badges ── */}
                        <div
                            className="flex flex-col gap-5"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateX(0)" : "translateX(28px)",
                                transition: "opacity .75s ease .2s, transform .75s ease .2s",
                            }}
                        >
                            {/* Plant image card */}
                            <div
                                className="relative rounded-2xl overflow-hidden"
                                style={{
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    background: "rgba(10,14,9,0.9)",
                                    minHeight: 300,
                                }}
                            >
                                {/* Decorative rotating ring behind plant */}
                                <div
                                    className="absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none"
                                    style={{
                                        width: 240, height: 240,
                                        border: "1px solid rgba(0,201,80,0.12)",
                                        borderRadius: "50%",
                                        animation: "rotateRing 25s linear infinite",
                                    }}
                                />
                                <div
                                    className="absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none"
                                    style={{
                                        width: 180, height: 180,
                                        border: "1px dashed rgba(0,201,80,0.08)",
                                        borderRadius: "50%",
                                        animation: "rotateRing 18s linear infinite reverse",
                                        marginLeft: 30, marginTop: 30,
                                    }}
                                />

                                {/* Plant image */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/faq-plant.png"
                                    alt="NutriLoop plant"
                                    className="relative z-10 w-full h-full object-cover object-center"
                                    style={{
                                        minHeight: 280,
                                        animation: "leafSway 8s ease-in-out infinite",
                                        transformOrigin: "bottom center",
                                    }}
                                    onError={(e) => {
                                        // Show fallback gradient plant illustration if image missing
                                        (e.currentTarget as HTMLImageElement).style.display = "none";
                                    }}
                                />

                                {/* Fallback plant illustration */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <svg width="200" height="260" viewBox="0 0 200 260" fill="none" style={{ animation: "leafSway 8s ease-in-out infinite", transformOrigin: "bottom center", opacity: 0.35 }}>
                                        <path d="M100 240 Q80 180 40 120 Q20 90 50 60 Q80 30 100 80 Q120 30 150 60 Q180 90 160 120 Q120 180 100 240Z" fill="rgba(0,201,80,0.5)" />
                                        <path d="M100 240 Q95 200 70 160 Q55 135 65 110" stroke="rgba(0,201,80,0.6)" strokeWidth="2" fill="none" />
                                        <path d="M100 240 Q105 200 130 160 Q145 135 135 110" stroke="rgba(0,201,80,0.4)" strokeWidth="2" fill="none" />
                                        <rect x="96" y="240" width="8" height="18" rx="4" fill="rgba(0,201,80,0.4)" />
                                    </svg>
                                </div>

                                {/* Bottom left glow */}
                                <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
                                    style={{ background: "radial-gradient(circle at bottom left,rgba(0,201,80,0.12) 0%,transparent 70%)" }} />

                                {/* Corner dot */}
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#00C950]"
                                    style={{ boxShadow: "0 0 6px rgba(0,201,80,0.9)", animation: "glowBreath 2s ease-in-out infinite" }} />
                            </div>

                            {/* Safe. Smart. Sustainable. card */}
                            <div
                                className="relative rounded-2xl p-5"
                                style={{
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    background: "rgba(12,16,11,0.95)",
                                }}
                            >
                                {/* Corner glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none rounded-2xl"
                                    style={{ background: "radial-gradient(circle at top right,rgba(0,201,80,0.08) 0%,transparent 70%)" }} />

                                {/* Shield row */}
                                <div className="flex items-center gap-4 mb-5 pb-5"
                                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[#00C950]"
                                        style={{ background: "rgba(0,201,80,0.08)", border: "1px solid rgba(0,201,80,0.22)" }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-base" style={{ fontFamily: "'Syne',sans-serif" }}>
                                            Safe. Smart. Sustainable.
                                        </p>
                                        <p className="text-gray-400 text-sm mt-0.5">
                                            Engineered for a cleaner tomorrow.
                                        </p>
                                    </div>
                                </div>

                                {/* Three badges */}
                                <div className="grid grid-cols-3 gap-3">
                                    {badges.map((b, i) => (
                                        <div
                                            key={i}
                                            className="badge-col flex flex-col items-center text-center cursor-default"
                                        >
                                            <div className="badge-icon-wrap">
                                                {b.icon}
                                            </div>
                                            <span className="text-gray-400 text-xs font-medium" style={{ fontFamily: "'Syne',sans-serif" }}>
                                                {b.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom hairline */}
                <div className="absolute bottom-0 inset-x-0 h-px"
                    style={{ background: "linear-gradient(90deg,transparent,rgba(0,201,80,0.2),transparent)" }} />
            </section>
        </>
    );
}