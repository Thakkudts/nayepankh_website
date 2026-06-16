import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-[#F5E9DA] min-h-screen">
      {/* Hero Section */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[5px] text-[#AE6E4E] font-semibold mb-4"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-[#3A2518] mb-6"
          >
            Let's Create
            <br />
            Change Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-[#5A3A29]"
          >
            Whether you want to volunteer, donate, collaborate, or learn
            more about our initiatives, we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white rounded-3xl p-8 text-center shadow-lg border-2 border-[#AE6E4E]"
          >
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-[#3A2518] mb-3">
              Email
            </h3>
            <p className="text-[#5A3A29] break-all">
              contact@nayepankh.com
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white rounded-3xl p-8 text-center shadow-lg border-2 border-[#AE6E4E]"
          >
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold text-[#3A2518] mb-3">
              Phone
            </h3>
            <p className="text-[#5A3A29]">
              +91 8318500748
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white rounded-3xl p-8 text-center shadow-lg border-2 border-[#AE6E4E]"
          >
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-[#3A2518] mb-3">
              Location
            </h3>
            <p className="text-[#5A3A29]">
              Serving Communities Across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Image */}
      <section className="px-6 py-24 bg-[#E8D5C4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >
            <h2 className="text-4xl font-bold text-[#3A2518] mb-8">
              Send Us a Message
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
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-[#AE6E4E] outline-none resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-[#8B5E3C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A3A29] transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png"
              alt="NGO Volunteers"
              className="w-full h-[600px] object-cover rounded-3xl border-4 border-[#AE6E4E] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Connect */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-[#3A2518] mb-16"
          >
            Why Connect With Us?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Volunteer Opportunities",
              "Partnerships",
              "Support & Donations",
              "Community Programs",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg text-center"
              >
                <h3 className="font-bold text-xl text-[#3A2518]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-[#5A3A29] py-24 px-6">
        <div className="flex justify-center gap-6 flex-wrap">
  <a
    href="https://www.instagram.com/nayepankhfoundation/"
    target="_blank"
    rel="noreferrer"
    className="bg-white px-6 py-4 rounded-full text-[#8B5E3C] font-semibold hover:scale-110 transition"
  >
    📸 Instagram
  </a>

  <a
    href="https://www.linkedin.com/company/nayepankh/"
    target="_blank"
    rel="noreferrer"
    className="bg-white px-6 py-4 rounded-full text-[#8B5E3C] font-semibold hover:scale-110 transition"
  >
    💼 LinkedIn
  </a>

  <div className="bg-white px-6 py-4 rounded-full text-[#8B5E3C] font-semibold hover:scale-110 transition">
    📘 Facebook
  </div>

  <div className="bg-white px-6 py-4 rounded-full text-[#8B5E3C] font-semibold hover:scale-110 transition">
    ▶️ YouTube
  </div>

  <div className="bg-white px-6 py-4 rounded-full text-[#8B5E3C] font-semibold hover:scale-110 transition">
    𝕏 Twitter
  </div>
</div>
      </section>
    </div>
  );
}