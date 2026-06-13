import { motion } from "framer-motion";

const PostItNote = ({ text, rotate, color = "bg-yellow-200" }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className={`
      ${color} ${rotate}
      p-4 shadow-lg cursor-default select-none
      rounded-sm
    `}
    style={{
      width: 160,
      minHeight: 120,
      boxShadow: "3px 4px 10px rgba(0,0,0,0.12), inset 0 -1px 0 rgba(0,0,0,0.04)",
    }}
  >
    <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-center">
      {text}
    </p>
  </motion.div>
);

export default PostItNote;
