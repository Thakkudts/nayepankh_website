import React from "react";
import { motion } from "framer-motion";

const donationOptions = [
  {
    amount: "₹500",
    title: "Learning Materials",
    description:
      "Help provide notebooks, stationery, and educational resources for children.",
  },
  {
    amount: "₹1,000",
    title: "Community Support",
    description:
      "Support local initiatives and activities that uplift communities.",
  },
  {
    amount: "₹2,500",
    title: "Educational Programs",
    description:
      "Contribute towards organizing impactful workshops and learning sessions.",
  },
  {
    amount: "₹5,000+",
    title: "Long-Term Impact",
    description:
      "Help us create sustainable change through large-scale community projects.",
  },
];

const impactStats = [
  { number: "500+", label: "Lives Impacted" },
  { number: "100+", label: "Volunteers Engaged" },
  { number: "50+", label: "Community Initiatives" },
  { number: "10+", label: "Partner Organizations" },
];

const Donate = () => {
  return (
    <div className="bg-[#F5E9DA] overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#AE6E4E] uppercase tracking-[4px] font-semibold mb-4">
              Support A Cause
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#3A2518] leading-tight mb-6">
              Your Contribution
              <br />
              Creates Real Change
            </h1>

            <p className="text-lg text-[#5A3A29] leading-relaxed mb-8 max-w-xl">
              Every donation helps us provide education, community support,
              resources, and opportunities to those who need them most. Together,
              we can build a brighter future.
            </p>

            <a
              href="#donation-details"
              className="inline-block bg-[#8B5E3C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A3A29] transition-all duration-300"
            >
              Donate Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=533,fit=crop/YKbL494Mv8Ip3qgy/1682903595951-AE0qV567r4uXNPwx.jpg"
              alt="Donation"
              className="rounded-3xl shadow-2xl border-4 border-[#AE6E4E]"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Donations Matter */}
      <section className="bg-[#5A3A29] py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Why Your Donation Matters
          </motion.h2>

          <p className="text-[#F5E9DA] text-lg max-w-4xl mx-auto leading-relaxed">
            Donations empower us to continue our mission of creating positive
            social impact through education, awareness programs, community
            development initiatives, and volunteer-driven projects. Every
            contribution directly supports meaningful change.
          </p>
        </div>
      </section>

     
      {/* Donation Options */}
      <section className="bg-[#E8D5C4] py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-bold text-[#3A2518] mb-16"
          >
            Make A Difference
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationOptions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-4xl font-bold text-[#AE6E4E] mb-4">
                  {item.amount}
                </h3>

                <h4 className="text-xl font-semibold text-[#3A2518] mb-4">
                  {item.title}
                </h4>

                <p className="text-[#5A3A29] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Details */}
      <section
        id="donation-details"
        className="bg-[#F5E9DA] py-24 px-6 lg:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 lg:p-14 shadow-xl border border-[#E8D5C4]"
          >
            <h2 className="text-4xl font-bold text-[#3A2518] text-center mb-12">
              Donation Details
            </h2>

            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-6">
                  UPI Donation
                </h3>

                <p className="text-[#5A3A29] mb-3">
                  <strong>UPI ID:</strong> yourupi@bank
                </p>

                <p className="text-[#5A3A29]">
                  Scan your NGO QR code or use the UPI ID above to contribute.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-6">
                  Bank Transfer
                </h3>

                <p className="text-[#5A3A29] mb-2">
                  <strong>Account Name:</strong> NayePankh Foundation
                </p>

                <p className="text-[#5A3A29] mb-2">
                  <strong>Account Number:</strong> XXXXXXXXXXXX
                </p>

                <p className="text-[#5A3A29] mb-2">
                  <strong>IFSC Code:</strong> XXXXXXXX
                </p>

                <p className="text-[#5A3A29]">
                  <strong>Bank Name:</strong> Your Bank Name
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-[#E8D5C4] py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#3A2518] mb-12"
          >
            Trust & Transparency
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Registered NGO",
              "Transparent Utilization",
              "Community-Focused Initiatives",
              "Impact-Driven Programs",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#5A3A29]">
                  ✓ {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-[#5A3A29] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Together We Can Build
            <br />
            A Better Tomorrow
          </motion.h2>

          <p className="text-[#F5E9DA] text-lg leading-relaxed max-w-3xl mx-auto">
            Every contribution, big or small, helps transform lives and
            strengthen communities. Join us in creating opportunities and
            bringing hope to those who need it most.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;