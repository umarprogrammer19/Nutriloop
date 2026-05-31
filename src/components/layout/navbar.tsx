"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Impact", href: "#impact" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="relative 2xl:max-w-360 w-[90%] mx-auto px-0 sm:px-6">

                {/* Main Navbar Pill */}
                <div className="relative z-20 mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-5 sm:px-6 py-2 sm:py-1">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/nutriloop-logo.png"
                            alt="NutriLoop"
                            width={180}
                            height={40}
                            className="w-32 sm:w-45 h-auto" // Slightly smaller logo on mobile
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-green-400 text-sm lg:text-base transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <button className="hidden md:flex items-center rounded-full bg-green-500 px-6 py-2 text-black font-semibold hover:bg-green-400 transition">
                        Get Started
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                /* Close Icon (X) */
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                /* Menu Icon (Hamburger) */
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`
                        absolute top-[110%] left-0 right-0 mx-0 sm:mx-6 
                        rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl 
                        overflow-hidden transition-all duration-300 ease-in-out md:hidden z-10
                        ${isOpen ? "max-h-100 opacity-100 py-4 mt-2" : "max-h-0 opacity-0 py-0 border-transparent"}
                    `}
                >
                    <div className="flex flex-col px-6 gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-green-400 text-base font-medium transition"
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-white/10 my-1" />
                        <button className="w-full text-center rounded-full bg-green-500 px-6 py-3 text-black font-semibold hover:bg-green-400 transition mt-1">
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
}