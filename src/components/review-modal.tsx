"use client";

import { useState } from "react";

interface Props {
  onClose: () => void;
}

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!;

export default function ReviewModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) return;
    setStatus("loading");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          rating,
          message,
          date: new Date().toLocaleString(),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-card { animation: modalIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards; }
        .star-btn { transition: transform 0.15s ease; }
        .star-btn:hover { transform: scale(1.2); }
      `}</style>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-100 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        {/* Card */}
        <div
          className="modal-card relative w-full max-w-md rounded-2xl overflow-hidden"
          style={{
            background: "rgba(7,10,5,0.98)",
            border: "1px solid rgba(0,201,80,0.2)",
            boxShadow: "0 0 0 1px rgba(0,201,80,0.07), 0 32px 80px rgba(0,0,0,0.8)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: "1px solid rgba(0,201,80,0.12)", background: "rgba(0,201,80,0.05)" }}
          >
            <div>
              <h2 className="text-white font-semibold text-lg" style={{ fontFamily: "'Poppins',sans-serif" }}>
                Leave a Review
              </h2>
              <p className="text-gray-400 text-xs mt-0.5">Share your NutriLoop experience</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,201,80,0.12)", border: "1px solid rgba(0,201,80,0.3)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C950" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg" style={{ fontFamily: "'Poppins',sans-serif" }}>
                  Thank you!
                </p>
                <p className="text-gray-400 text-sm">Your review has been submitted successfully.</p>
                <button
                  onClick={onClose}
                  className="mt-2 rounded-full bg-[#00C950] px-8 py-2.5 text-black font-semibold text-sm hover:bg-green-400 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans',sans-serif" }}>Name *</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-[#00C950]/50"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans',sans-serif" }}>Email *</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-[#00C950]/50"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    />
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans',sans-serif" }}>Rating *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="star-btn"
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(star)}
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill={(hovered || rating) >= star ? "#00C950" : "none"} stroke={(hovered || rating) >= star ? "#00C950" : "rgba(255,255,255,0.2)"} strokeWidth="1.5">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="text-[#00C950] text-sm self-center ml-1" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                        {["", "Poor", "Fair", "Good", "Great", "Excellent"][rating]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Review Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans',sans-serif" }}>Your Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your experience with NutriLoop…"
                    className="rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition resize-none focus:border-[#00C950]/50"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || rating === 0}
                  className="w-full rounded-full py-3 font-semibold text-black text-sm transition hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                  style={{ background: "linear-gradient(135deg,#00C950 0%,#00a040 100%)", fontFamily: "'Poppins',sans-serif" }}
                >
                  {status === "loading" ? "Submitting…" : "Submit Review"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
