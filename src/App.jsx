import { useEffect, useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#f7f4ef]">
        <div className="text-4xl font-bold text-[#ff7a00]">
          LeadEX
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f4ef] text-[#2b2b2b] font-sans">

      {/* NAV */}
      <div className="flex justify-between items-center px-8 py-5 border-b bg-white">
        <div className="text-2xl font-bold text-[#ff7a00]">LeadEX</div>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div className="px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Stop Chasing Leads. Start Closing Deals.
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We help B2B companies in Australia get qualified meetings with real decision-makers.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 bg-[#ff7a00] text-white px-6 py-3 rounded-full"
        >
          Get Started <ArrowRight size={16} className="inline ml-2" />
        </a>
      </div>

      {/* SERVICES */}
      <div id="services" className="px-8 py-16 bg-white">
        <h2 className="text-2xl font-bold text-center">What We Do</h2>

        <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto text-gray-700">
          <div className="p-4 bg-[#f7f4ef] rounded">Lead generation</div>
          <div className="p-4 bg-[#f7f4ef] rounded">Outbound calling</div>
          <div className="p-4 bg-[#f7f4ef] rounded">Appointment setting</div>
          <div className="p-4 bg-[#f7f4ef] rounded">Qualified meetings</div>
        </div>
      </div>

      {/* PROCESS */}
      <div id="process" className="px-8 py-16">
        <h2 className="text-2xl font-bold text-center">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
          {["Targeting", "Outreach", "Booking"].map((step) => (
            <div key={step} className="p-6 bg-white rounded shadow text-center">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="px-8 py-16 text-center">
        <h2 className="text-2xl font-bold">Contact Us</h2>

        <div className="mt-6">
          <p><Mail className="inline" /> info@lea-dex.com</p>
          <p><Phone className="inline" /> 0272651399</p>
        </div>

        <form className="mt-8 max-w-md mx-auto space-y-3">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded h-28" placeholder="Message" />
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
