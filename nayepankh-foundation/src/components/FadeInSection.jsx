import { motion } from "framer-motion";

export default function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{
  opacity: 0,
  y: 100,
  scale: 0.95
}}
      whileInView={{
  opacity: 1,
  y: 0,
  scale: 1
}}
      viewport={{ once: false }}
      transition={{
  duration: 0.8,
  ease: "easeOut"
}}
    >
      {children}
    </motion.div>
  );
}