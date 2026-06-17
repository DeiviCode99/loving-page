import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Star = ({ className }) => (
  <Sparkles
    className={`absolute text-yellow-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] ${className}`}
    size={18}
    fill="currentColor"
  />
);

const TreasureButton = ({ children, disabled, onClick }) => {
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      whileTap={disabled ? {} : { scale: 0.92 }}
      whileHover={disabled ? {} : { scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="
        group
        relative
        w-full
        overflow-visible
        rounded-xl
        py-3
        my-3
        font-semibold
        text-red-600
        bg-white
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      <span className="relative z-10">{children}</span>

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-16 group-hover:-translate-y-10 transition-all duration-500" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 group-hover:-translate-y-14 transition-all duration-500" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-14 group-hover:-translate-y-4 transition-all duration-500" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-20 group-hover:translate-y-3 transition-all duration-500" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-12 group-hover:translate-y-6 transition-all duration-500" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 group-hover:translate-y-10 transition-all duration-500" />
    </motion.button>
  );
};

export default TreasureButton;