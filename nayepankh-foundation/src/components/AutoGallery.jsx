import { motion } from "framer-motion";

const images = [
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=386,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-15-at-9.17.30-pm-AVLPXr08jETq2nyv.jpeg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=963,fit=crop/YKbL494Mv8Ip3qgy/1-YD0yJ4erqEIN3ZWV.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZqXHPPJWYBWUCU5hv_LnraFQ6zBu3XuCFQ&s"
];

export default function AutoGallery() {
  return (
    <section className="py-32 bg-[#E6D3BE] overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[6px] text-[#8B5E3C] mb-4">
          Our Gallery
        </p>

        <h2 className="text-5xl font-bold text-[#2C1E14]">
          Moments That Matter
        </h2>
      </div>

      {/* SCROLL ROW */}
      <motion.div
        className="flex gap-6 mb-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-[400px] h-[280px] object-cover rounded-2xl flex-shrink-0 border border-[#E2C8AD] shadow-md"
          />
        ))}
      </motion.div>

    </section>
  );
}