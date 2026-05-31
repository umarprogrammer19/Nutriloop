"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Hero() {
    return (
        <section
            className="relative min-h-screen bg-[url('/hero-bg.png')] bg-contain bg-center bg-no-repeat overflow-hidden"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 2xl:max-w-360 w-[90%] mx-auto px-6">
                <div className="grid min-h-screen items-center lg:grid-cols-2">

                    {/* Left Content */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                            className="inline-flex rounded-full border border-[#00C950]/20 bg-[#00C950]/10 px-4 py-2 text-sm text-green-400"
                        >
                            Smart • Sustainable • NutriLoop
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            transition={{ duration: 0.7 }}
                            className="mt-8 text-5xl md:text-7xl font-bold text-white"
                        >
                            Turn Waste
                            <br />
                            Into{" "}
                            <span className="text-[#00C950]">
                                Value
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.8 }}
                            className="mt-6 max-w-xl text-lg text-gray-300"
                        >
                            NutriLoop transforms organic kitchen waste into
                            nutrient-rich powder using advanced mechatronics,
                            smart sensors, and sustainable processing technology.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.9 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-xl bg-[#00C950] px-8 py-3 font-semibold text-black transition hover:bg-green-400"
                            >
                                Watch Demo
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-xl border border-white/20 px-8 py-3 text-white transition hover:border-[#00C950] hover:text-green-400"
                            >
                                Explore Technology
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 1 }}
                            className="mt-14 grid md:grid-cols-5"
                        >
                            <motion.div
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                }}
                            >
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    72°C
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Sanitization
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                }}
                            >
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    2 – 4h
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Processing
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                }}
                            >
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    2–5kg
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Capacity
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                }}
                            >
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    90%
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Waste Reduction
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                }}
                            >
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    100%
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Eco Friendly
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side Empty */}
                    <div />
                </div>
            </div>
        </section>
    );
}