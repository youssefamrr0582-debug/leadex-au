"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function LeadEXWebsite() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-4xl font-bold text-[#ff7a00] tracking-wide">
            LeadEX
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans leading-relaxed relative overflow-hidden">

      {/* FLOATING EFFECTS */}
      <div
        className="fixed top-20 left-10 w-72 h-72 bg-[#ff7a00]/20 rounded-full blur-3xl"
        style={{
          transform: `translate3d(${scrollY * 0.05 + 20}px, ${scrollY * 0.1}px, 0)`
        }}
      />

      <div
        className="fixed bottom-20 right-10 w-80 h-80 bg-[#ff7a00]/10 rounded-full blur-3xl"
        style={{
          transform: `translate3d(${-scrollY * 0.05}px, ${-scrollY * 0.08}px, 0)`
        }}
      />

      {/* NAV */}
      <div className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="text-2xl font-bold text-[#ff7a00]">LeadEX</div>
      </div>

      {/* HERO */}
      <div className="px-8 py-20 text-center">
        <h1 className="text-5xl font-bold">
          Stop Chasing Leads. Start Closing Deals.
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          We help B2B companies connect with decision makers and book qualified meetings.
        </p>

        <a
          href="#contact"
          className="inline-block mt-10 bg-[#ff7a00] text-white px-8 py-3 rounded-full"
        >
          Get Started <ArrowRight className="inline ml-2" />
        </a>
      </div>

      {/* SERVICES */}
      <div className="px-8 py-20 text-center bg-black">
        <h2 className="text-3xl font-bold">What We Do</h2>

        <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
          {[
            "Lead Generation",
            "Outbound Calls",
            "Appointment Setting",
            "Qualified Meetings"
          ].map((i) => (
            <div key={i} className="p-4 bg-gray-900 rounded-xl">
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="px-8 py-24 text-center bg-black">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <div className="mt-6 text-gray-300">
          <p><Mail className="inline" /> info@lea-dex.com</p>
          <p><Phone className="inline" /> 0272651399</p>
        </div>

        <form className="mt-10 max-w-xl mx-auto space-y-4">
          <input className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white" placeholder="Name" />
          <input className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white" placeholder="Email" />
          <textarea className="w-full p-3 bg-gray-900 border border-gray-700 rounded h-32 text-white" placeholder="Message" />
          <button className="w-full bg-[#ff7a00] text-white py-3 rounded">
            Send
          </button>
        </form>
      </div>

      <div className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} LeadEX
      </div>

    </div>
  );
}
