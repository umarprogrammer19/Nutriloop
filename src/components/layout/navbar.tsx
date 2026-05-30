import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-6 py-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="NutriLoop"
                            width={180}
                            height={40}
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#about" className="text-gray-300 hover:text-green-400 transition">
                            About
                        </Link>
                        <Link href="#how-it-works" className="text-gray-300 hover:text-green-400 transition">
                            How It Works
                        </Link>
                        <Link href="#technology" className="text-gray-300 hover:text-green-400 transition">
                            Technology
                        </Link>
                        <Link href="#impact" className="text-gray-300 hover:text-green-400 transition">
                            Impact
                        </Link>
                        <Link href="#faq" className="text-gray-300 hover:text-green-400 transition">
                            FAQ
                        </Link>
                    </nav>

                    {/* CTA */}
                    <button className="hidden md:flex items-center rounded-full bg-green-500 px-6 py-3 text-black font-semibold hover:bg-green-400 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}