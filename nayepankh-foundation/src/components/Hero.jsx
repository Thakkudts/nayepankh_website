import { motion } from "framer-motion";

function Hero() {
  return (

    <section className="h-screen flex flex-col justify-center items-center bg-blue-50">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold text-center"
      >
        Empowering Every Child
      </motion.h1>

      <p className="mt-5 text-xl text-gray-600">
        Building brighter futures together.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Volunteer
        </button>

        <button className="bg-green-600 text-white px-6 py-3 rounded">
          Donate
        </button>
      </div>

    </section>
  );
}

export default Hero;

