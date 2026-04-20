import { useEffect, useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#f7f4ef]">
        <h1 className="text-4xl font-bold text-[#ff7a00]">LeadEX</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-gray-800 font-sans">

      {/* NAV */}
      <div className="sticky top-0 bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between">
        <div className="font-bold text-[#ff7a00] text-xl">LeadEX</div>
      </div>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Stop Chasing Leads. Start Closing Deals.
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          We help B2B companies connect with decision-makers and book sales-ready meetings.
        </p>

        <button className="mt-8 bg-[#ff7a00] text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
          Get Started <ArrowRight size={16} />
        </button>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-2xl font-bold text-center">What We Do</h2>

        <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
          {[
            "We identify your ideal clients",
            "We reach decision-makers directly",
            "We qualify leads",
            "We book meetings"
          ].map((item) => (
            <div key={item} className="p-4 bg-[#f7f4ef] rounded-xl text-center">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20 px-6">
        <h2 className="text-2xl font-bold">Contact</h2>

        <div className="mt-6 space-y-2">
          <p><Mail className="inline" /> info@lea-dex.com</p>
          <p><Phone className="inline" /> 0272651399</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} LeadEX
      </footer>

    </div>
  );
}
