"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const quickLinks = ["About Us", "How It Works", "Technology", "AI Ecosystem"];
const resources = ["Impact", "Gallery", "FAQ", "Blog"];
const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

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
        @keyframes logoSpin {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
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
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50"
                    style={{ background: "radial-gradient(ellipse, rgba(0,201,80,0.06) 0%, transparent 70%)", animation: "glowBreath 6s ease-in-out infinite" }} />

                {/* Main footer content */}
                <div className="relative z-10 2xl:max-w-350 w-[90%] mx-auto px-4 pt-14 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

                        {/* ── Brand column ── */}
                        <div className="lg:col-span-2 flex flex-col gap-5">
                            {/* Logo */}
                            <Link href="/" className="flex gap-3">
                                <Image
                                    src="/nutriloop-logo.png"
                                    alt="NutriLoop Footer Logo"
                                    width={180}
                                    height={40}
                                    priority
                                    className="w-52"
                                />
                            </Link>

                            <p className="text-gray-100 text-sm max-w-60">
                                AI-powered ecosystem that transforms organic waste into value for a greener, healthier future.
                            </p>

                            {/* Social icons */}
                            <div className="flex items-center gap-2.5 mt-1">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ── Quick Links ── */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                                Quick Links
                            </h4>
                            <ul className="flex flex-col gap-1">
                                {quickLinks.map((l) => (
                                    <li key={l}>
                                        <a href="#" className="footer-link">{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ── Resources ── */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                                Resources
                            </h4>
                            <ul className="flex flex-col gap-1">
                                {resources.map((l) => (
                                    <li key={l}>
                                        <a href="#" className="footer-link">{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ── Legal ── */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                                Legal
                            </h4>
                            <ul className="flex flex-col gap-1">
                                {legal.map((l) => (
                                    <li key={l}>
                                        <a href="#" className="footer-link">{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ── Newsletter ── */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                                Stay Updated
                            </h4>
                            <p className="text-gray-100 text-xs mb-4">
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
                                <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                                    <input
                                        type="email"
                                        className="subscribe-input"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="subscribe-btn">
                                        Subscribe →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div className="mt-12 mb-7 h-px w-full"
                        style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />

                    {/* ── Bottom bar ── */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-xs">
                            © 2025 NutriLoop. All rights reserved.
                        </p>

                        <div className="flex items-center gap-1.5 text-xs text-gray-600">
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