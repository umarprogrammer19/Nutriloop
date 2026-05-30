import Navbar from "@/components/layout/navbar";
import HowItWorks from "@/components/work";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        className="
          relative
          min-h-screen
          bg-[url('/hero-bg.png')]
          bg-contain
          bg-center
          bg-no-repeat
          overflow-hidden
        "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 2xl:max-w-360 w-[90%] mx-auto px-6">
          <div className="grid min-h-screen items-center lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full border border-[#00C950]/20 bg-[#00C950]/10 px-4 py-2 text-sm text-green-400">
                Smart • Sustainable • NutriLoop
              </span>

              <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white">
                Turn Waste
                <br />
                Into{" "}
                <span className="text-[#00C950]">
                  Value
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-gray-300">
                NutriLoop transforms organic kitchen waste into
                nutrient-rich powder using advanced mechatronics,
                smart sensors, and sustainable processing technology.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-[#00C950] px-8 py-3 font-semibold text-black transition hover:bg-green-400">
                  Watch Demo
                </button>

                <button className="rounded-xl border border-white/20 px-8 py-3 text-white transition hover:border-[#00C950] hover:text-green-400">
                  Explore Technology
                </button>
              </div>

              {/* Stats */}
              <div className="mt-14 grid md:grid-cols-5">

                <div>
                  <h3 className="text-2xl font-bold text-[#00C950]">
                    72°C
                  </h3>
                  <p className="text-sm text-gray-400">
                    Sanitization
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#00C950]">
                    2 – 4h
                  </h3>
                  <p className="text-sm text-gray-400">
                    Processing
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#00C950]">
                    2–5kg
                  </h3>
                  <p className="text-sm text-gray-400">
                    Capacity
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#00C950]">
                    90%
                  </h3>
                  <p className="text-sm text-gray-400">
                    Waste Reduction
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#00C950]">
                    100%
                  </h3>
                  <p className="text-sm text-gray-400">
                    Echo Friendly
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side Empty */}
            {/* Machine already exists in hero-bg.png */}
            <div />
          </div>
        </div>
      </section>
      <HowItWorks />
    </>
  );
}