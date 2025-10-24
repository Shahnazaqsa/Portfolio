import { motion } from "framer-motion";

export default function Section({ children, direction = "up" }) {
  const variants = {
    up: { opacity: 0, y: 80 },
    down: { opacity: 0, y: -80 },
    left: { opacity: 0, x: -80 },
    right: { opacity: 0, x: 80 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
