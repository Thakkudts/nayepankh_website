import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import AutoGallery from "../components/AutoGallery";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#F5E9DA] text-[#2C1E14]">

    {/* HERO */}
  <section className="min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-8 w-full">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE (YOUR EXISTING CONTENT) */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[8px] text-[#8B5E3C] mb-6"
          >
            NayePankh Foundation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-tight text-[#2C1E14]"
          >
            Empowering
            <br />
            Communities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-2xl text-[#5A3E2B] text-xl leading-relaxed"
          >
            Creating opportunities, transforming lives, and building
            a brighter future through education, community support,
            and volunteer-driven initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex gap-4"
          >
            <Link to="/volunteer" className="bg-[#8B5E3C] text-white px-8 py-4 font-semibold rounded-lg hover:scale-105 transition">
              Volunteer
            </Link>

            <Link
              to="/donate"
              className="border border-[#5A3E2B] px-8 py-4 rounded-lg hover:bg-[#5A3E2B] hover:text-white transition"
            >
              Donate
            </Link>
          </motion.div>

        </div>

        {/* RIGHT SIDE (NEW IMAGE CARD) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E2C8AD]">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=560,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-25-at-10.35.08-am-dJol0XQeLzhGa6op.jpeg"
              alt="Community work"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* decorative background card */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#8B5E3C] rounded-3xl -z-10 opacity-20"></div>
        </motion.div>

      </div>
    </div>
  </section>

      {/* MISSION */}
      <FadeInSection>
        <section className="py-32 px-8 bg-[#E6D3BE]">
          <div className="max-w-6xl mx-auto">

            <p className="uppercase tracking-[8px] text-[#8B5E3C] mb-4">
              Our Mission
            </p>

            <h2 className="text-5xl font-bold mb-8 text-[#2C1E14]">
              Changing Lives Through Action
            </h2>

            <p className="text-[#5A3E2B] text-xl max-w-3xl leading-relaxed">
              NayePankh Foundation works to uplift communities through
              education, healthcare support, skill development, and
              volunteer engagement. Every initiative is driven by the
              belief that small actions can create lasting change.
            </p>

          </div>
        </section>
      </FadeInSection>

      {/* IMPACT */}
      <FadeInSection>
        <section className="py-32 px-8 bg-[#F5E9DA]">
          <div className="max-w-7xl mx-auto text-center">

            <p className="uppercase tracking-[8px] text-[#8B5E3C] mb-4">
              Our Impact
            </p>

            <h2 className="text-5xl font-bold mb-20 text-[#2C1E14]">
              Transforming Lives Every Day
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="bg-white p-10 rounded-2xl hover:-translate-y-2 transition duration-300">
                <h3 className="text-6xl font-bold text-[#8B5E3C] mb-4">
                  500+
                </h3>
                <p className="text-[#5A3E2B] text-lg">
                  Students Supported
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl hover:-translate-y-2 transition duration-300">
                <h3 className="text-6xl font-bold text-[#5A3E2B] mb-4">
                  100+
                </h3>
                <p className="text-[#5A3E2B] text-lg">
                  Active Volunteers
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl hover:-translate-y-2 transition duration-300">
                <h3 className="text-6xl font-bold text-[#8B5E3C] mb-4">
                  50+
                </h3>
                <p className="text-[#5A3E2B] text-lg">
                  Community Programs
                </p>
              </div>

            </div>

          </div>
        </section>
      </FadeInSection>

      {/* PROGRAMS */}
      <FadeInSection>
        <section className="py-32 px-8 bg-[#E6D3BE]">
          <div className="max-w-7xl mx-auto">

            <p className="uppercase tracking-[8px] text-[#8B5E3C] mb-4 text-center">
              Our Programs
            </p>

            <h2 className="text-5xl font-bold text-center mb-20 text-[#2C1E14]">
              Creating Lasting Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-2xl border border-[#E2C8AD] hover:border-[#8B5E3C] transition duration-300 hover:-translate-y-3">
                <div className="text-5xl mb-6">🎓</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#2C1E14]">
                  Education Support
                </h3>
                <p className="text-[#5A3E2B]">
                  Providing learning resources, mentorship, and opportunities
                  for students to thrive.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#E2C8AD] hover:border-[#5A3E2B] transition duration-300 hover:-translate-y-3">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#2C1E14]">
                  Community Development
                </h3>
                <p className="text-[#5A3E2B]">
                  Building stronger communities through outreach programs and
                  social initiatives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#E2C8AD] hover:border-[#8B5E3C] transition duration-300 hover:-translate-y-3">
                <div className="text-5xl mb-6">❤️</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#2C1E14]">
                  Volunteer Network
                </h3>
                <p className="text-[#5A3E2B]">
                  Connecting passionate volunteers with opportunities to make
                  a real difference.
                </p>
              </div>

            </div>

          </div>
        </section>
      </FadeInSection>

      {/* FOUNDER */}
      <FadeInSection>
        <section className="py-40 px-8 bg-[#F5E9DA]">
          <div className="max-w-5xl mx-auto text-center">

            <p className="uppercase tracking-[8px] text-[#8B5E3C] mb-6">
              Message From Our Founder
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10 text-[#2C1E14]">
              "If we all do something, then together there is no problem that we
              cannot solve!"
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#2C1E14]">
                Prashant Shukla
              </h3>

              <p className="text-[#8B5E3C] mt-2">
                Founder & President, NayePankh Foundation
              </p>
            </div>

            <p className="text-[#5A3E2B] text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              All our efforts are made possible only because of your support.
            </p>

            <p className="text-[#5A3E2B] text-lg max-w-3xl mx-auto leading-relaxed">
              Your donations are tax exempted under 80G of the Indian Income Tax Act.
            </p>

          </div>
        </section>
      </FadeInSection>

      {/* GALLERY */}
      <AutoGallery />

        <footer className="bg-[#2C1E14] border-t border-[#3B2A1E]">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <h2 className="text-3xl font-bold text-[#F5E9DA] mb-6">
              NayePankh Foundation
            </h2>

            <p className="text-[#CBB8A3] leading-relaxed max-w-md mb-8">
              Empowering communities through education,
              social welfare, and volunteer-driven initiatives.
            </p>

            <h4 className="text-[#F5E9DA] font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-6 text-[#CBB8A3]">
              <span className="hover:text-[#8B5E3C] cursor-pointer transition">
                Instagram
              </span>

              <span className="hover:text-[#8B5E3C] cursor-pointer transition">
                Facebook
              </span>

              <span className="hover:text-[#8B5E3C] cursor-pointer transition">
                LinkedIn
              </span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-10">

            <div>
              <h4 className="text-[#F5E9DA] font-semibold mb-4">
                Get In Touch
              </h4>

              <div className="space-y-3 text-[#CBB8A3]">
                <p>contact@nayepankh.com</p>
                <p>+91 8318500748</p>
              </div>
            </div>

            

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3B2A1E] mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between gap-4 text-[#CBB8A3] text-sm">

            <div className="flex flex-wrap gap-6">
              <span className="hover:text-[#8B5E3C] cursor-pointer transition">
                Terms & Conditions
              </span>
              <span className="hover:text-[#8B5E3C] cursor-pointer transition">
                Privacy Policy
              </span>
              <span className="hover:text-[#8B5E3C] cursor-pointer transition">
                Cancellation & Refund
              </span>
              <span className="hover:text-[#8B5E3C] cursor-pointer transition">
                Shipping & Exchange
              </span>
            </div>

            <p className="text-[#CBB8A3]">
              © 2025 NayePankh Foundation
            </p>

          </div>

        </div>

      </div>

  </footer>
    </div>
  );
}

export default Home;