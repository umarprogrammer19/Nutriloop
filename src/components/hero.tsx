"use client";

import Image from "next/image";
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
            className="relative min-h-screen overflow-hidden lg:bg-[url('/hero-bg.png')] lg:bg-contain lg:bg-right lg:bg-no-repeat bg-black"
        >
            <div className="relative z-10 w-[90%] 2xl:max-w-360 mx-auto px-4 sm:px-6">
                <div className="grid min-h-screen items-center lg:grid-cols-2 pt-28 pb-0 lg:pt-0 lg:py-0">

                    {/* Left Content */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        <motion.span
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                            className="inline-flex rounded-full border border-[#00C950]/20 bg-[#00C950]/10 px-4 py-2 text-xs sm:text-sm text-[#00C950]
              "
                        >
                            Smart • Sustainable • NutriLoop
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            transition={{ duration: 0.7 }}
                            className="mt-6 text-[30px] sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white"
                        >
                            Turn Waste {" "}
                            <br className="lg:block hidden" />
                            Into{" "}
                            <span className="text-[#00C950]">
                                Value
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.8 }}
                            className="mt-5 max-w-xl mx-auto lg:mx-0 text-xs sm:text-lg text-gray-200"
                        >
                            NutriLoop transforms organic kitchen waste into
                            nutrient-rich powder using advanced mechatronics,
                            smart sensors, and sustainable processing technology.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.9 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto rounded-xl bg-[#00C950] px-8 py-3 font-semibold text-black transition hover:bg-green-400"
                            >
                                Watch Demo
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto rounded-xl border border-white/20 px-8 py-3 text-white transition hover:border-[#00C950] hover:text-[#00C950] "
                            >
                                Explore Technology
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 1 }}
                            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center lg:text-left"
                        >
                            <motion.div whileHover={{ y: -4, scale: 1.03 }}>
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    72°C
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Sanitization
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -4, scale: 1.03 }}>
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    2–4h
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Processing
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -4, scale: 1.03 }}>
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    2–5kg
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Capacity
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -4, scale: 1.03 }}>
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    90%
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Waste Reduction
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -4, scale: 1.03 }} className="lg:block hidden">
                                <h3 className="text-2xl font-bold text-[#00C950]">
                                    100%
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Eco Friendly
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    {/* Mobile Machine Image */}
                    <div className="flex justify-center mb-10 lg:hidden">
                        <Image
                            src="/mob-hero.png"
                            alt="NutriLoop"
                            width={500}
                            height={650}
                            priority
                            className="w-full max-w-sm object-contain"
                        />
                    </div>
                    {/* Desktop Empty Column */}
                    <div className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}