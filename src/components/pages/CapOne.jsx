import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Star,
  Gift,
  ChevronRight,
  Baby,
  CloudSun,
  Flower2,
  ToyBrick,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import capOneData from "../../data/capOneData.js";
import Letter from "../shared/Letter.jsx";
import Polaroid from "../shared/Polaroid.jsx";
import TreasureButton from "../shared/TreasureButtom.jsx";

/* ============ ÍCONOS FLOTANTES ============ */
const FloatingIcon = ({ Icon, className, delay = 0, size = 22 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.15, 0.6, 0.15],
      y: [-12, 12, -12],
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
    <Icon size={size} className="text-pink-300/40 drop-shadow-lg" />
  </motion.div>
);

/* ============ DIVISOR DECORATIVO ============ */
const SectionDivider = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-center justify-center gap-2 my-16"
  >
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300/60 to-transparent" />
    <Heart className="text-rose-300/60" size={16} fill="currentColor" />
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300/60 to-transparent" />
  </motion.div>
);

/* ============ HUELLITAS ============ */
const footprints = [
  { emoji: "👣", label: "Primer paso" },
  { emoji: "🧸", label: "Jugar" },
  { emoji: "🎨", label: "Descubrir" },
  { emoji: "📖", label: "Soñar" },
  { emoji: "🌟", label: "Brillar" },
];

/* ============ ANIMACIONES ============ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* =============================================== */
/*                  CAPÍTULO UNO                    */
/* =============================================== */
const CapOne = () => {
  const [answer, setAnswer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [factRevealed, setFactRevealed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === capOneData.answer.toLowerCase()) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 via-orange-50/80 via-rose-50 to-pink-100 overflow-hidden">
      {/* ===== FLOATING DECORATIONS ===== */}
      <FloatingIcon Icon={Star} className="top-12 left-8" delay={0} size={20} />
      <FloatingIcon Icon={Heart} className="top-16 right-16" delay={0.6} />
      <FloatingIcon Icon={Sparkles} className="bottom-32 left-14" delay={1.2} />
      <FloatingIcon Icon={Star} className="top-1/3 right-6" delay={1.8} size={16} />
      <FloatingIcon Icon={Heart} className="bottom-40 right-12" delay={2.4} />
      <FloatingIcon Icon={CloudSun} className="top-[15%] left-[12%]" delay={3} size={28} />
      <FloatingIcon Icon={Baby} className="bottom-20 left-[20%]" delay={0.8} size={18} />
      <FloatingIcon Icon={ToyBrick} className="top-[60%] right-[8%]" delay={2} size={18} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-4 py-10 md:py-16"
      >
        {/* ===== PROGRESO ===== */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <span className="inline-block px-5 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-sm text-rose-500 font-medium shadow-sm border border-rose-200/50">
            <Flower2 className="inline" size={14} /> Capítulo 1 de 5
          </span>
        </motion.div>

        {/* ===== TÍTULO ===== */}
        <motion.h1
          variants={itemVariants}
          className="text-center text-5xl md:text-7xl font-script font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-2"
        >
          {capOneData.title}
        </motion.h1>

        {/* ===== SUBTÍTULO ===== */}
        <motion.h2
          variants={itemVariants}
          className="text-center text-xl md:text-2xl text-gray-400 mb-6 font-light tracking-wide"
        >
          {capOneData.subtitle}
        </motion.h2>

        {/* ===== CITA INSPIRADORA ===== */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400/60 text-sm italic max-w-lg mx-auto mb-12"
        >
          "Cada gran historia tiene un comienzo pequeño. La tuya empezó con una sonrisa."
        </motion.p>

        {/* ===== CARTA ===== */}
        <motion.div variants={itemVariants}>
          <Letter text={capOneData.text} />
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.2} />

        {/* ===== CAMINO DE HUELLITAS ===== */}
        <motion.div variants={itemVariants}>
          <h3 className="text-center text-2xl font-semibold text-gray-600 mb-8">
            Los primeros pasitos ✨
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
            {footprints.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-3xl md:text-4xl"
                >
                  {f.emoji}
                </motion.div>
                <span className="text-xs text-gray-400 font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-1.5 mt-2">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                className="w-8 md:w-10 h-1.5 bg-gradient-to-r from-rose-200 to-orange-200 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.4} />

        {/* ===== GALERÍA DE RECUERDOS ===== */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2"
            >
              Galería de Recuerdos 📸
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              Pedacitos de tu infancia congelados en el tiempo
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            {capOneData.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, rotate: index % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? -2 : 2 }}
                className="flex flex-col items-center"
              >
                <Polaroid
                  src={photo}
                  rotate={index % 2 === 0 ? "-rotate-2" : "rotate-2"}
                />
                <span className="text-xs text-gray-400 mt-2 italic">
                  {index === 0 && "🌟 Una de las primeras"}
                  {index === 1 && "🧸 Tiernos momentos"}
                  {index === 2 && "🌸 Descubriendo el mundo"}
                  {index === 3 && "💫 Sonrisa que lo dice todo"}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.6} />

        {/* ===== DATO CURIOSO INTERACTIVO ===== */}
        <motion.div variants={itemVariants} className="max-w-lg mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-1">
              Un dato curioso 🧐
            </h3>
            <p className="text-gray-400 text-sm">
              Toca la tarjeta para descubrirlo
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFactRevealed(true)}
            className={`cursor-pointer rounded-2xl p-6 md:p-8 shadow-lg border transition-colors duration-500 ${
              factRevealed
                ? "bg-white border-rose-200 shadow-rose-200/30"
                : "bg-white/60 border-rose-100/50 hover:border-rose-200"
            }`}
          >
            {!factRevealed ? (
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="text-rose-300" size={36} />
                </motion.div>
                <p className="text-gray-400 text-sm text-center">
                  Toca para revelar un recuerdo especial...
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-4xl mb-3"
                >
                  🎀
                </motion.p>
                <p className="text-gray-700 leading-relaxed">
                  Cuando eras pequeña, tenías una forma muy especial de ver el
                  mundo. Cada sonrisa tuya era una pequeña obra de arte que
                  iluminaba todo a tu alrededor. Esa chispa sigue brillando hoy
                  más que nunca. 💖
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-4"
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.8} />

        {/* ===== PREGUNTA / DESBLOQUEO ===== */}
        <motion.div variants={itemVariants} className="max-w-xl mx-auto mt-4 mb-16">
          {!unlocked ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-white/50"
            >
              <div className="flex flex-col items-center gap-3 mb-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="text-rose-400" size={32} />
                </motion.div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 text-center">
                  {capOneData.question}
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
                        : "border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                    }`}
                  />
                </motion.div>

                <TreasureButton 
                  disabled={!answer}
                  
                >
                  <Sparkles className="inline" size={16} /> Desbloquear recuerdo
                </TreasureButton>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg"
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
                ¡Respuesta correcta! 💖
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Has desbloqueado el siguiente capítulo...
              </p>
              <button
                onClick={() => navigate("/capitulodos")}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-rose-300/50 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
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

export default CapOne;