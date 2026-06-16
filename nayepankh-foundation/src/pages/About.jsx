import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#F5E9DA] text-[#3A2518] overflow-hidden">

      {/* HERO */}
      <section className="py-28 px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4BC92,_transparent_70%)]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-5xl md:text-7xl font-bold"
        >
          About NayePankh Foundation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mt-6 text-[#5A3A29] max-w-3xl mx-auto text-lg md:text-xl"
        >
          A journey of youth, compassion, and change.
        </motion.p>
      </section>

      {/* HOW IT STARTED */}
      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 px-8 py-24 bg-[#5A3A29] items-center"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            How it started?
          </motion.h2>

          <p className="leading-relaxed text-[#F5E9DA] text-lg">
            As we all know, 2020 was a year the world was striving to survive
            the global pandemic of COVID-19. During these dire times we felt an
            urge to make an impact with whatever we had, and so we tried.

            <br /><br />

            We tried to uplift the underprivileged and help the needy with all
            the resources and materials we could arrange. It was tough, but we
            didn’t lose hope and kept going in order to bring change to society
            on a grassroots level.

            <br /><br />

            We started off as a group of high-school students but gradually
            grew into a passionate team from different parts of the city and
            state.

            <br /><br />

            On 28th March 2021, we officially began our journey to serve
            society as responsible youth, believing that the true hope of a
            nation lies in the hands of its young generation.
          </p>
        </div>

        <motion.img
          whileHover={{
            scale: 1.04,
            rotate: 1,
          }}
          transition={{ duration: 0.3 }}
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
          alt="Helping Community"
          className="rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] object-cover h-[450px] w-full border-4 border-[#AE6E4E]"
        />
      </motion.section>

      {/* WHAT IS NAYEPANKH */}
      <motion.section
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 px-8 py-24 bg-[#F5E9DA] items-center"
      >
        <motion.img
          whileHover={{
            scale: 1.04,
            rotate: -1,
          }}
          transition={{ duration: 0.3 }}
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.06-am-mp8eQ9De2eHjvE3j.jpeg"
          alt="NayePankh Activities"
          className="rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] object-cover h-[450px] w-full border-4 border-[#AE6E4E]"
        />

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-[#3A2518]"
          >
            What is NayePankh?
          </motion.h2>

          <p className="leading-relaxed text-[#5A3A29] text-lg">
            NayePankh Foundation was initiated to bring change and help people
            during the difficult times of COVID-19.

            <br /><br />

            As our vision expanded, so did our mission. We began supporting a
            larger section of society by providing food, clothing, sanitary
            napkins, educational support, and awareness campaigns focused on
            hygiene and well-being.

            <br /><br />

            Our efforts extend beyond humans as we also feed stray animals and
            work towards creating a compassionate ecosystem for all living
            beings.

            <br /><br />

            Till date, we have positively impacted more than two lakh lives.
            Though this milestone is significant, our mission continues with
            the same passion and determination.

            <br /><br />

            NayePankh is a 12A and 80G certified NGO and is proudly led by the
            youth of India, including students from schools and colleges.

            <br /><br />

            We are committed to building a better future and living up to our
            belief:

            <br /><br />

            <span className="font-bold text-[#AE6E4E] text-xl">
              “BADALTE BHARAT KI NAYI TASVEER”
            </span>
          </p>
        </div>
      </motion.section>

      {/* QUOTE SECTION */}
      <section className="py-32 px-8 bg-[#8B5E3C] text-center relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent_70%)]"
        />

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-6xl font-bold italic text-white max-w-5xl mx-auto"
        >
          “BADALTE BHARAT KI NAYI TASVEER”
        </motion.h2>

        <p className="relative text-[#F5E9DA] mt-6 text-lg">
          Giving wings to dreams, dignity, and hope.
        </p>
      </section>

      {/* GALLERY */}
      <section className="px-8 py-24 bg-[#E8D5C4]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#3A2518]"
        >
          Moments of Impact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCvuax7x44Sjq9CSBcheUrjG17-9CcoJkjw&s",
            "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=318,fit=crop/YKbL494Mv8Ip3qgy/img-20210530-wa0251_1622926825-mP4ZLjyn3ecJBJrR.jpg",
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
                src={img}
                alt={`Impact ${index + 1}`}
                className="rounded-3xl h-72 w-full object-cover border-4 border-[#AE6E4E] shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}