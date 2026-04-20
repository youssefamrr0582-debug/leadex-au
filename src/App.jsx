      {/* PROCESS */}
      <div id="process" className="px-8 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>

        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6 text-gray-600">
          {[
            "Discovery & Targeting",
            "Lead Research",
            "Outreach",
            "Qualification",
            "Booking",
            "Delivery"
          ].map((i) => (
            <div key={i} className="p-5 bg-[#f7f4ef] rounded-xl">
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div id="industries" className="px-8 py-24">
        <h2 className="text-3xl font-bold text-center">Industries</h2>

        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          {[
            "Telecom",
            "SaaS",
            "Cybersecurity",
            "Cleaning Services",
            "Logistics",
            "Business Mobile"
          ].map((i) => (
            <div key={i} className="p-5 bg-white border rounded-xl shadow-sm">
              ● {i}
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="px-8 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>

        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold">Custom Strategy</h3>
            <p className="mt-2 text-gray-600">
              Pricing depends on your target market, volume, and campaign size.
            </p>
          </div>

          <div className="p-6 rounded-xl border shadow-sm bg-[#fff7ed]">
            <h3 className="font-bold">Tailored Solution</h3>
            <p className="mt-2 text-gray-600">
              Every business gets a custom outbound system designed for conversion.
            </p>
          </div>

          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold">No Fixed Packages</h3>
            <p className="mt-2 text-gray-600">
              We don’t use fixed pricing because every campaign is different.
            </p>
          </div>
        </div>
      </div>

      {/* GUARANTEE */}
      <div id="guarantee" className="px-8 py-24">
        <h2 className="text-3xl font-bold text-center">Guarantee</h2>

        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-center">
          <div className="p-4 bg-green-50 rounded-xl">
            We replace unqualified meetings
          </div>
          <div className="p-4 bg-orange-50 rounded-xl">
            70%+ show-up rate target
          </div>
          <div className="p-4 bg-yellow-50 rounded-xl">
            Extra meetings if performance drops
          </div>
        </div>
      </div>
