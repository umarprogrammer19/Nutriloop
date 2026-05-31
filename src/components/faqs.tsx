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
        a: "A standard cycle takes between 40 to 80mins hours depending on the type and quantity of waste loaded. Smart sensors automatically optimize the duration for best results.",
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

export default function FAQ() {
    const [open, setOpen] = useState<number>(0);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&family=Poppins:wght@500;600;700&display=swap');

        @keyframes glowBreath {
          0%,100% { opacity:.4; }
          50%      { opacity:.8; }
        }
        @keyframes accordionOpen {
          from { opacity:0; transform:translateY(-6px); }
          to   { opacity:1; transform:translateY(0); }
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
          gap:12px;
          padding:16px 16px;
          text-align:left;
          background:transparent;
          cursor:pointer;
          transition:background .2s ease;
        }
        @media (min-width: 640px) {
            .faq-btn { gap: 14px; padding: 18px 20px; }
        }
        .faq-btn:hover { background:rgba(0,201,80,0.02); }

        .q-icon {
          flex-shrink:0;
          width:26px; height:26px;
          border-radius:50%;
          border:1.5px solid rgba(0,201,80,0.45);
          display:flex; align-items:center; justify-content:center;
          color:#00C950;
          font-size:12px; font-weight:700;
          transition:all .3s ease;
          font-family:'Poppins',sans-serif;
        }
        @media (min-width: 640px) {
            .q-icon { width: 28px; height: 28px; font-size: 13px; }
        }
        .faq-item.active .q-icon {
          background:rgba(0,201,80,0.12);
          border-color:#00C950;
          box-shadow:0 0 10px rgba(0,201,80,0.3);
        }

        .chevron {
          margin-left:auto;
          flex-shrink:0;
          width:24px; height:24px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,0.08);
          display:flex; align-items:center; justify-content:center;
          color:rgba(156,163,175,1);
          transition:all .35s cubic-bezier(.22,1,.36,1);
        }
        @media (min-width: 640px) {
            .chevron { width: 28px; height: 28px; }
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
          width:46px; height:46px;
          border-radius:12px;
          border:1px solid rgba(0,201,80,0.22);
          background:rgba(0,201,80,0.07);
          display:flex; align-items:center; justify-content:center;
          color:#00C950;
          transition:all .3s ease;
        }
        @media (min-width: 640px) {
            .badge-icon-wrap { width: 52px; height: 52px; border-radius: 14px; }
        }
        
        .badge-col:hover .badge-icon-wrap {
          border-color:rgba(0,201,80,0.55);
          background:rgba(0,201,80,0.13);
          box-shadow:0 0 16px rgba(0,201,80,0.2);
          transform:translateY(-3px);
        }
      `}</style>

            <section
                id="faq"
                ref={sectionRef}
                className="relative bg-[#070a05] py-16 sm:py-20 lg:py-28 overflow-hidden bg-[url('/faqs.png')] bg-cover bg-center bg-no-repeat"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
                {/* Top hairline */}
                <div className="absolute top-0 inset-x-0 h-px"
                    style={{ background: "linear-gradient(90deg,transparent,rgba(0,201,80,0.3),transparent)" }} />

                {/* Ambient glow left */}
                <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 sm:w-125 sm:h-125 rounded-full"
                    style={{ background: "radial-gradient(circle,rgba(0,201,80,0.07) 0%,transparent 70%)", animation: "glowBreath 6s ease-in-out infinite" }} />

                {/* Ambient glow right */}
                <div className="pointer-events-none absolute -right-32 bottom-10 w-64 h-64 sm:w-100 sm:h-100 rounded-full"
                    style={{ background: "radial-gradient(circle,rgba(0,201,80,0.06) 0%,transparent 70%)", animation: "glowBreath 8s ease-in-out infinite reverse" }} />

                <div className="relative z-10 2xl:max-w-360 w-[90%] mx-auto px-0 sm:px-4">
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
                                className="text-[#00C950] text-sm font-semibold tracking-wider uppercase"
                                style={{ fontFamily: "'Poppins',sans-serif" }}
                            >
                                FAQ
                            </span>

                            {/* Heading */}
                            <h2
                                className="mt-2 sm:mt-3 text-white font-semibold leading-tight"
                                style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.75rem,4vw,2.75rem)", }}
                            >
                                Frequently Asked Questions
                            </h2>

                            <p className="mt-2 sm:mt-3 text-white text-sm sm:text-[16px]">
                                Everything you need to know about NutriLoop.
                            </p>

                            {/* Accordion */}
                            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
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
                                            <span className="q-icon">{i + 1}</span>

                                            {/* Question */}
                                            <span
                                                className="text-white text-sm sm:text-[17px] font-medium flex-1 pr-2"
                                                style={{ fontFamily: "'Poppins',sans-serif" }}
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
                                            // Increased max-height to 400px so it doesn't clip wrapping text on narrow mobile screens
                                            style={{ maxHeight: open === i ? "400px" : "0px", opacity: open === i ? 1 : 0 }}
                                        >
                                            <div
                                                className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0"
                                                style={{ animation: open === i ? "accordionOpen .35s ease forwards" : "none" }}
                                            >
                                                {/* Green top rule */}
                                                <div className="h-px mb-3 sm:mb-4"
                                                    style={{ background: "linear-gradient(90deg,rgba(0,201,80,0.3),transparent)" }} />
                                                <p className="text-white text-xs sm:text-sm leading-relaxed pl-10 sm:pl-10.5">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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