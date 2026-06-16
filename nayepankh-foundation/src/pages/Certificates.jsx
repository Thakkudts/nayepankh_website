import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "NGO Registration",
      description:
        "Official registration document recognizing NayePankh Foundation as a registered non-profit organization.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "80G Certificate",
      description:
        "Certification enabling eligible donors to claim tax benefits on their contributions.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "12A Certificate",
      description:
        "Certification supporting the NGO's tax-exempt status and compliance framework.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const stats = [
    { number: "500+", label: "Lives Impacted" },
    { number: "50+", label: "Volunteers" },
    { number: "20+", label: "Community Programs" },
    { number: "100%", label: "Commitment" },
  ];

  return (
    <div className="bg-[#F5E9DA] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-[#AE6E4E] font-semibold mb-4"
          >
            Transparency & Trust
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-[#3A2518] mb-6"
          >
            Our Certificates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-[#5A3A29]"
          >
            Building trust through transparency, accountability, and compliance.
            Our certifications reflect our commitment to creating meaningful
            social impact.
          </motion.p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#3A2518] mb-16"
          >
            Certificates & Registrations
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="bg-white rounded-3xl overflow-hidden border-4 border-[#AE6E4E] shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#3A2518] mb-4">
                    {certificate.title}
                  </h3>

                  <p className="text-[#5A3A29] leading-relaxed mb-6">
                    {certificate.description}
                  </p>

                  <button className="bg-[#8B5E3C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5A3A29] transition-all duration-300">
                    View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#5A3A29] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-7xl mb-6"
          >
            🛡️
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Trust & Transparency
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-[#F5E9DA] leading-relaxed"
          >
            Transparency is one of the core values of NayePankh Foundation.
            We strive to ensure accountability, ethical practices, and
            responsible management of every initiative we undertake for the
            communities we serve.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-[#E8D5C4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-4xl md:text-5xl font-bold text-[#3A2518] mb-16"
          >
            Our Impact
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl p-10 text-center shadow-lg"
              >
                <h3 className="text-5xl font-extrabold text-[#8B5E3C] mb-4">
                  {stat.number}
                </h3>

                <p className="text-[#5A3A29] text-lg font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section className="bg-[#5A3A29] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Our Commitment
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-[#F5E9DA]"
        >
          NayePankh Foundation remains committed to transparency,
          accountability, and creating meaningful social impact through
          every initiative we undertake.
        </motion.p>
      </div>
    </section>
  </div>
  )
}