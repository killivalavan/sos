import { motion } from "framer-motion";
export const heartAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, delay: 1, ease: "easeInOut" },
  },
};
