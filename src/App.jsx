import { useEffect, useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function App() {
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
      <div className="h-screen w-full flex items-center justify-center bg-[#f7f4ef]">
        <div className="text-4xl font-bold text-[#ff7a00] tracking-wide">
          LeadEX
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f4ef] text-[#2b2b2b] font-sans leading-relaxed relative overflow-hidden">

      {/* FLOATING ORANGE EFFECT */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-[#ff7a00]/25 rounded-full blur-3xl"
        style={{ transform: `translate3d(${scrollY * 0.05 + 20}px, ${scrollY * 0.1}px, 0)` }} />

      <div className="fixed bottom-20 right-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"
        style={{ transform: `translate3d(${-scrollY * 0.05}px, ${-scrollY * 0.08}px, 0)` }} />

      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-[#ff7a00]/10 rounded-full blur-3xl"
        style={{ transform: `translate3d(${scrollY * 0.02}px, ${-scrollY * 0.02}px, 0) translate(-50%, -50%)` }} />

      {/* NAV */}
      <div className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b bg-[#f7f4ef]/80 backdrop-blur-md border-gray-200">
        <div className="text-2xl font-bold text-[#ff7a00]">LeadEX</div>
      </div>

      {/* HERO */}
      <div className="px-8 py-20 text-center">
        <h1 className="text-5xl font-bold">
          Stop Chasing Leads. Start Closing Deals.
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          LeadEX helps B2B companies connect with decision-makers and book sales-ready meetings.
        </p>

        <a href="#contact"
          className="inline-block mt-10 bg-[#ff7a00] text-white px-8 py-3 rounded-full">
          Get Started <ArrowRight className="inline ml-2" size={16} />
        </a>
      </div>

      {/* CONTACT */}
      <div id="contact" className="px-8 py-24 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <p className="mt-6"><Mail className="inline" /> info@lea-dex.com</p>
        <p><Phone className="inline" /> 0272651399</p>
      </div>

      <div className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} LeadEX
      </div>

    </div>
  );
}
