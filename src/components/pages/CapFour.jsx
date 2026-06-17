import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Heart,
  Star,
  Sparkles,
  Gift,
  Moon,
  Sun,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import capFourData from "../../data/capFourData.js";
import Letter from "../shared/Letter.jsx";
import Polaroid from "../shared/Polaroid.jsx";
import TreasureButton from "../shared/TreasureButtom.jsx";

const FloatingIcon = ({ Icon, className, delay = 0, size = 22 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.15, 0.5, 0.15],
      y: [-10, 10, -10],
    }}
    transition={{
      duration: 5 + delay,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className={`absolute pointer-events-none ${className}`}
  >
    <Icon size={size} className="text-yellow-300/40 drop-shadow-lg" />
  </motion.div>
);

const SectionDivider = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-center justify-center gap-2 my-16"
  >
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
    <Sun className="text-yellow-300/60" size={16} />
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const photoRotations = [
  "-rotate-2", "rotate-3", "-rotate-3", "rotate-2",
  "-rotate-4", "rotate-3", "-rotate-2", "rotate-4",
  "rotate-1", "-rotate-3", "rotate-4", "-rotate-2",
  "rotate-2", "-rotate-3", "rotate-1", "rotate-3",
  "-rotate-2", "rotate-1",
];

const CapFour = () => {
  const [answer, setAnswer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [dadRevealed, setDadRevealed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === capFourData.answer.toLowerCase()) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-100 overflow-hidden">
      <FloatingIcon Icon={Star} className="top-12 left-10" delay={0} size={18} />
      <FloatingIcon Icon={Heart} className="top-20 right-16" delay={0.6} />
      <FloatingIcon Icon={Moon} className="bottom-32 left-14" delay={1.2} size={20} />
      <FloatingIcon Icon={Sparkles} className="top-1/3 right-8" delay={1.8} size={16} />
      <FloatingIcon Icon={Star} className="bottom-40 right-12" delay={2.4} />
      <FloatingIcon Icon={Heart} className="top-[60%] left-[8%]" delay={3} size={14} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-4 py-10 md:py-16"
      >
        <motion.div variants={itemVariants} className="text-center mb-6">
          <span className="inline-block px-5 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-sm text-yellow-600 font-medium shadow-sm border border-yellow-200/50">
            <Star className="inline" size={14} fill="currentColor" /> Capítulo 4 de 5
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-center text-5xl md:text-7xl font-script font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-2"
        >
          {capFourData.title}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-center text-xl md:text-2xl text-gray-400 mb-6 font-light tracking-wide"
        >
          {capFourData.subtitle}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400/60 text-sm italic max-w-lg mx-auto mb-12"
        >
          "La familia no es solo sangre, es el lugar donde la vida comienza y el amor nunca termina."
        </motion.p>

        <motion.div variants={itemVariants}>
          <Letter text={capFourData.text} />
        </motion.div>

        <SectionDivider delay={0.2} />

        <motion.div variants={itemVariants}>
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2"
            >
              Álbum Familiar 📸
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              Los momentos más cálidos junto a los que más la aman
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            {capFourData.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, rotate: index % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? -2 : 2 }}
              >
                <Polaroid
                  src={photo}
                  rotate={photoRotations[index % photoRotations.length]}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <SectionDivider delay={0.4} />

        <motion.div variants={itemVariants} className="max-w-lg mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-1">
              Su estrella en el cielo 🌟
            </h3>
            <p className="text-gray-400 text-sm">
              Toca la tarjeta para encender su luz
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setDadRevealed(true)}
            className={`cursor-pointer rounded-2xl p-6 md:p-8 shadow-lg border transition-colors duration-500 ${
              dadRevealed
                ? "bg-white border-yellow-300 shadow-yellow-200/30"
                : "bg-white/60 border-yellow-100/50 hover:border-yellow-200"
            }`}
          >
            {!dadRevealed ? (
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star
                    className="text-yellow-400 drop-shadow-[0_0_12px_rgba(255,200,0,0.4)]"
                    size={48}
                    fill="currentColor"
                  />
                </motion.div>
                <p className="text-gray-400 text-sm text-center">
                  Toca para encender su luz...
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-5xl mb-4"
                >
                  ⭐
                </motion.div>
                <p className="text-gray-700 leading-relaxed">
                  {capFourData.dadMemory}
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mt-4"
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <SectionDivider delay={0.6} />

        <motion.div variants={itemVariants} className="max-w-xl mx-auto mt-4 mb-16">
          {!unlocked ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-yellow-200/50"
            >
              <div className="flex flex-col items-center gap-3 mb-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="text-yellow-500" size={32} />
                </motion.div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 text-center">
                  {capFourData.question}
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                <motion.div
                  animate={error ? { x: [-8, 8, -8, 8, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Escribe tu respuesta..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className={`w-full rounded-xl border-2 px-4 py-3 bg-white/60 outline-none transition-all text-gray-700 placeholder:text-gray-400 text-center ${
                      error
                        ? "border-red-300 bg-red-50"
                        : "border-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                    }`}
                  />
                </motion.div>

                <TreasureButton disabled={!answer}>
                  <Sparkles className="inline" size={16} /> Desbloquear recuerdo
                </TreasureButton>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-lg"
            >
              <motion.p
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="text-5xl mb-4"
              >
                🎉
              </motion.p>
              <p className="text-gray-600 mb-1 text-lg font-medium">
                ¡Respuesta correcta! 💛
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Has desbloqueado el siguiente capítulo...
              </p>
              <button
                onClick={() => navigate("/capitulocinco")}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full font-semibold shadow-lg hover:shadow-yellow-300/50 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                Siguiente capítulo
                <ChevronRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CapFour;
