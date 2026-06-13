import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Heart,
  Star,
  Sparkles,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import capThreeData from "../../data/capThreeData.js";
import LetterLove from "../shared/LetterLove.jsx";
import TreasureButton from "../shared/TreasureButtom.jsx";

/* ============ ÍCONOS FLOTANTES ============ */
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
    <Icon size={size} className="text-emerald-300/40 drop-shadow-lg" />
  </motion.div>
);

/* ============ DIVISOR ============ */
const SectionDivider = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-center justify-center gap-2 my-16"
  >
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
    <span className="text-emerald-300/60 text-lg">👷🏻</span>
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
  </motion.div>
);

/* ============ ANIMACIONES ============ */
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
  "rotate-2", "-rotate-3", "rotate-1",
];

/* =============================================== */
/*               CAPÍTULO TRES                      */
/* =============================================== */
const CapThree = () => {
  const [answer, setAnswer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === capThreeData.answer.toLowerCase()) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-teal-100 overflow-hidden">
      {/* ===== DECORACIONES FLOTANTES ===== */}
      <FloatingIcon Icon={Star} className="top-12 left-10" delay={0} size={18} />
      <FloatingIcon Icon={Heart} className="top-20 right-16" delay={0.6} />
      <FloatingIcon Icon={GraduationCap} className="bottom-32 left-14" delay={1.2} size={26} />
      <FloatingIcon Icon={Sparkles} className="top-1/3 right-8" delay={1.8} size={16} />
      <FloatingIcon Icon={BookOpen} className="bottom-40 right-12" delay={2.4} size={24} />
      <FloatingIcon Icon={Star} className="top-[60%] left-[8%]" delay={3} size={14} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-4 py-10 md:py-16"
      >
        {/* ===== PROGRESO ===== */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <span className="inline-block px-5 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-sm text-emerald-500 font-medium shadow-sm border border-emerald-200/50">
            🌱 Capítulo 3 de 5
          </span>
        </motion.div>

        {/* ===== TÍTULO ===== */}
        <motion.h1
          variants={itemVariants}
          className="text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent mb-2"
        >
          {capThreeData.title}
        </motion.h1>

        {/* ===== SUBTÍTULO ===== */}
        <motion.h2
          variants={itemVariants}
          className="text-center text-xl md:text-2xl text-gray-400 mb-6 font-light tracking-wide"
        >
          {capThreeData.subtitle}
        </motion.h2>

        {/* ===== CITA ===== */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400/60 text-sm italic max-w-lg mx-auto mb-12"
        >
          "El futuro pertenece a quienes creen en la belleza de sus sueños." — Eleanor Roosevelt
        </motion.p>

        {/* ===== GALERÍA UNIVERSITARIA ===== */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
              Amistades que florecieron en la U 🌸
            </h3>
            <p className="text-gray-400 text-sm">
              Momentos con esas personas que hicieron de esta etapa algo inolvidable
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {capThreeData.photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className={`break-inside-avoid ${photoRotations[i % photoRotations.length]}`}
              >
                <div className="bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={photo}
                    alt="Amigos universidad"
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.2} />

        {/* ===== CUALIDADES ===== */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
              Lo que la hace única ✨
            </h3>
            <p className="text-gray-400 text-sm">
              Cualidades que admiro y que la definen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {capThreeData.qualities.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-md border border-emerald-100/50 text-center"
              >
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  className="text-3xl block mb-3"
                >
                  {q.emoji}
                </motion.span>

                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  {q.title}
                </h4>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {q.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.4} />

        {/* ===== LOGROS ===== */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
              Todo lo que lograste 🏆
            </h3>
            <p className="text-gray-400 text-sm">
              Cada paso la llevó más lejos de lo que imaginaba
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {capThreeData.achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md border border-emerald-100/50 w-44 text-center"
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
                  className="text-3xl block mb-2"
                >
                  {ach.emoji}
                </motion.span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {ach.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.6} />

        {/* ===== CARTA ESPECIAL DE AMOR ===== */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-600 mb-1">
              Una carta muy especial 💚
            </h3>
            <p className="text-gray-400 text-sm">
              Porque fue en esta etapa donde nuestras vidas se encontraron
            </p>
          </div>

          <LetterLove text={capThreeData.text} />
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
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-emerald-200/50"
            >
              <div className="flex flex-col items-center gap-3 mb-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <GraduationCap className="text-emerald-400" size={36} />
                </motion.div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 text-center">
                  {capThreeData.question}
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
                        : "border-emerald-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                    }`}
                  />
                </motion.div>

                <TreasureButton disabled={!answer}>
                  ✨ Desbloquear recuerdo
                </TreasureButton>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 shadow-lg"
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
                ¡Respuesta correcta! 💚
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Has desbloqueado el siguiente capítulo...
              </p>
              <button
                onClick={() => navigate("/capitulocuatro")}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-400 to-green-500 text-white rounded-full font-semibold shadow-lg hover:shadow-emerald-300/50 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
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

export default CapThree;
