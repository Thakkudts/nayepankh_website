import { motion } from "framer-motion";

export default function Programs() {
  return (
    <div className="bg-[#F5E9DA] min-h-screen">

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.3em] text-[#AE6E4E] font-semibold mb-3">
              Join our
            </p>

            <h1 className="text-6xl md:text-7xl font-bold text-[#3A2518] mb-8">
              TEAM
            </h1>

            <p className="text-[#5A3A29] text-lg leading-relaxed mb-10">
              Join our team and make a difference in the lives of those in need.
              At NayePankh Foundation, we are committed to creating positive
              change and empowering communities.

              <br />
              <br />

              By joining our team, you will have the opportunity to contribute
              your time, skills, and ideas to help make a real impact. Whether
              you are passionate about education, health, or providing support
              during times of crisis, there is a place for you on our team.

              <br />
              <br />

              Join us today and be a part of an organization that is making a
              difference, one person at a time.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#8B5E3C] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#5A3A29] transition-all duration-300"
            >
              Join Us
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop"
              alt="NayePankh Volunteers"
              className="w-full h-[550px] object-cover rounded-3xl border-4 border-[#AE6E4E] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

        </div>
      </section>

    </div>
  );
}