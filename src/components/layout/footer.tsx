"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
];
const resources = [
    { name: "Impact", href: "#impact" },
    { name: "FAQ", href: "#faq" },
];

const socials = [
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "#",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#070a05" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "#",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) { setSubscribed(true); setEmail(""); }
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes glowBreath {
          0%,100% { opacity:.4; }
          50%      { opacity:.75; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .footer-link {
          color:rgba(156,163,175,1);
          font-size:13.5px;
          transition:color .2s ease, padding-left .2s ease;
          display:inline-block;
        }
        .footer-link:hover {
          color:#00C950;
          padding-left:4px;
        }

        .social-btn {
          width:36px; height:36px;
          border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          border:1px solid rgba(255,255,255,0.1);
          color:rgba(156,163,175,1);
          transition:all .25s ease;
          background:rgba(255,255,255,0.03);
        }
        .social-btn:hover {
          border-color:rgba(0,201,80,0.6);
          color:#00C950;
          background:rgba(0,201,80,0.08);
          box-shadow:0 0 12px rgba(0,201,80,0.25);
          transform:translateY(-2px);
        }

        .subscribe-input {
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:10px;
          padding:10px 14px;
          color:white;
          font-size:13px;
          width:100%;
          outline:none;
          transition:border-color .25s ease, box-shadow .25s ease;
          font-family:'DM Sans',sans-serif;
        }
        .subscribe-input:focus {
          border-color:rgba(0,201,80,0.5);
          box-shadow:0 0 0 3px rgba(0,201,80,0.08);
        }
        .subscribe-input::placeholder { color:rgba(107,114,128,1); }

        .subscribe-btn {
          padding:10px 18px;
          border-radius:10px;
          background:#00C950;
          color:black;
          font-size:13px;
          font-weight:600;
          white-space:nowrap;
          transition:all .25s ease;
          font-family:'Syne',sans-serif;
          position:relative;
          overflow:hidden;
          width: 100%;
        }
        @media (min-width: 640px) {
            .subscribe-btn { width: auto; }
        }
        .subscribe-btn:hover {
          background:#22d45e;
          box-shadow:0 0 20px rgba(0,201,80,0.4);
          transform:translateY(-1px);
        }
      `}</style>

            <footer
                className="relative bg-[#060906] overflow-hidden"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {/* Top border */}
                <div className="absolute top-0 inset-x-0 h-px"
                    style={{ background: "linear-gradient(90deg,transparent,rgba(0,201,80,0.35),transparent)" }} />

                {/* Ambient glow */}
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-150 h-50"
                    style={{ background: "radial-gradient(ellipse, rgba(0,201,80,0.06) 0%, transparent 70%)", animation: "glowBreath 6s ease-in-out infinite" }} />

                {/* Main footer content */}
                <div className="relative z-10 2xl:max-w-350 w-[90%] mx-auto px-0 sm:px-4 pt-8 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                        {/* ── Brand column ── */}
                        <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4 sm:gap-5">
                            {/* Logo */}
                            <Link href="/" className="flex gap-3">
                                <Image
                                    src="/nutriloop-logo.png"
                                    alt="NutriLoop Footer Logo"
                                    width={180}
                                    height={40}
                                    priority
                                    className="w-44 sm:w-52"
                                />
                            </Link>

                            <p className="text-white text-sm max-w-sm lg:max-w-60 leading-relaxed">
                                AI-powered ecosystem that transforms organic waste into value for a greener, healthier future.
                            </p>

                            {/* Social icons */}
                            <div className="flex items-center gap-2.5 mt-2 lg:mt-1">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ── Link Columns Wrapper ── */}
                        <div className="sm:col-span-1 lg:col-span-5 grid grid-cols-2 gap-8">

                            {/* ── Quick Links ── */}
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-4 sm:mb-5 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                                    Quick Links
                                </h4>
                                <ul className="flex flex-col gap-2 sm:gap-1">
                                    {quickLinks.map((l) => (
                                        <li key={l.name}>
                                            <a href={l.href} className="footer-link">{l.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ── Resources ── */}
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-4 sm:mb-5 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                                    Resources
                                </h4>
                                <ul className="flex flex-col gap-2 sm:gap-1">
                                    {resources.map((l) => (
                                        <li key={l.name}>
                                            <a href={l.href} className="footer-link">{l.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ── Newsletter ── */}
                        <div className="sm:col-span-1 lg:col-span-3">
                            <h4 className="text-white font-semibold text-sm mb-3 sm:mb-5 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                                Stay Updated
                            </h4>
                            <p className="text-white text-xs mb-4">
                                Get the latest updates on sustainable innovation.
                            </p>

                            {subscribed ? (
                                <div className="flex items-center gap-2 text-[#00C950] text-sm font-medium" style={{ animation: "fadeUp .4s ease forwards" }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    You're subscribed!
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                                    <input
                                        type="email"
                                        className="subscribe-input"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="subscribe-btn shrink-0">
                                        Subscribe →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div className="mt-10 sm:mt-12 mb-6 sm:mb-7 h-px w-full"
                        style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />

                    {/* ── Bottom bar ── */}
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-white text-sm">
                            © {new Date().getFullYear()} NutriLoop. All rights reserved.
                        </p>

                        <div className="flex items-center justify-center gap-1.5 text-sm text-white">
                            Designed with
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(0,201,80,0.7)" style={{ margin: "0 1px" }}>
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            for a sustainable future.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}