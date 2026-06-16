import { motion } from "framer-motion";

export default function Volunteer() {
  const reasons = [
    {
      emoji: "🤝",
      title: "Community Impact",
      desc: "Contribute directly to initiatives that improve lives and strengthen communities.",
    },
    {
      emoji: "📚",
      title: "Skill Development",
      desc: "Build communication, leadership, teamwork, and organizational skills.",
    },
    {
      emoji: "🌍",
      title: "Social Change",
      desc: "Be part of meaningful projects that create positive and lasting impact.",
    },
    {
      emoji: "❤️",
      title: "Meaningful Experiences",
      desc: "Create memories, friendships, and experiences that truly matter.",
    },
  ];

  const opportunities = [
    {
      title: "Education Support",
      desc: "Assist students through learning programs and educational activities.",
    },
    {
      title: "Event Management",
      desc: "Help organize awareness campaigns, workshops, and community events.",
    },
    {
      title: "Social Media & Outreach",
      desc: "Spread awareness and engage with communities through digital platforms.",
    },
    {
      title: "Fundraising Support",
      desc: "Support initiatives that help mobilize resources for impactful programs.",
    },
  ];

  const benefits = [
    "Certificate of Participation",
    "Hands-on Experience",
    "Networking Opportunities",
    "Leadership Development",
    "Community Recognition",
    "Personal Growth",
  ];

  return (
    <div className="bg-[#F5E9DA] min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[5px] text-[#AE6E4E] font-semibold mb-4">
              Become a Volunteer
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#3A2518] mb-6">
              Your Time
              <br />
              Can Change Lives
            </h1>

            <p className="text-lg md:text-xl text-[#5A3A29] leading-relaxed mb-8">
              Join a passionate community dedicated to creating meaningful
              impact through education, awareness, and social initiatives.
              Together, we can build stronger communities and brighter futures.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#8B5E3C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A3A29] transition"
            >
              Join Our Team
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop"
              alt="Volunteers"
              className="w-full h-[550px] object-cover rounded-3xl border-4 border-[#AE6E4E] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="bg-[#E8D5C4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-[#3A2518] mb-16"
          >
            Why Volunteer With Us?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white p-8 rounded-3xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>

                <h3 className="text-xl font-bold text-[#3A2518] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#5A3A29]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-[#3A2518] mb-16"
          >
            Volunteer Opportunities
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border-l-8 border-[#AE6E4E] shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#3A2518] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#5A3A29]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#5A3A29] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16"
          >
            Volunteer Benefits
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#F5E9DA] rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-[#3A2518]">
                  ✓ {benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >
            <h2 className="text-4xl font-bold text-[#3A2518] text-center mb-10">
              Volunteer Registration
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none"
              />

              <input
                type="number"
                placeholder="Age"
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none"
              />

              <input
                type="text"
                placeholder="Area of Interest"
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none"
              />

              <textarea
                rows="5"
                placeholder="Tell us about yourself..."
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#8B5E3C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A3A29] transition"
              >
                Join Our Team
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-[#E8D5C4] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#3A2518] mb-8"
          >
            Every Helping Hand Creates
            <br />
            A Brighter Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#5A3A29] leading-relaxed"
          >
            Become a part of NayePankh Foundation and help us build
            stronger communities through compassion, dedication,
            and collective action.
          </motion.p>
        </div>
      </section>
    </div>
  );
}