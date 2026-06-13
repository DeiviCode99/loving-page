import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Music,
  Star,
  Heart,
  Sparkles,
  Gift,
  Headphones,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import capTwoData from "../../data/capTwoData.js";
import LetterMusic from "../shared/LetterMusic.jsx";
import PushPin from "../shared/PushPin.jsx";
import PostItNote from "../shared/PostItNote.jsx";
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
    <Icon size={size} className="text-violet-300/40 drop-shadow-lg" />
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
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
    <span className="text-violet-300/60 text-lg">🎵</span>
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
  </motion.div>
);

/* ============ DATOS INLINE ============ */
const friendQuotes = [
  { emoji: "💕", text: "Siempre alegrando el salón con tu sonrisa" },
  { emoji: "📚", text: "La mejor compañera de estudios y aventuras" },
  { emoji: "🌟", text: "Amiga incondicional, hermana de la vida" },
];

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
  "-rotate-3",
  "rotate-2",
  "-rotate-4",
  "rotate-3",
  "-rotate-2",
  "rotate-4",
];

const noteRotations = ["-rotate-2", "rotate-3", "-rotate-1"];

const CapTwo = () => {
  const [answer, setAnswer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [memoryRevealed, setMemoryRevealed] = useState(false);
  //const [songRevealed, setSongRevealed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === capTwoData.answer.toLowerCase()) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-violet-50 to-purple-100 overflow-hidden">
      {/* ===== DECORACIONES FLOTANTES ===== */}
      <FloatingIcon Icon={Star} className="top-12 left-10" delay={0} size={18} />
      <FloatingIcon Icon={Heart} className="top-20 right-16" delay={0.6} />
      <FloatingIcon Icon={Music} className="bottom-32 left-14" delay={1.2} size={20} />
      <FloatingIcon Icon={Sparkles} className="top-1/3 right-8" delay={1.8} size={16} />
      <FloatingIcon Icon={Headphones} className="bottom-40 right-12" delay={2.4} />
      <FloatingIcon Icon={Star} className="top-[60%] left-[8%]" delay={3} size={14} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-4 py-10 md:py-16"
      >
        {/* ===== PROGRESO ===== */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <span className="inline-block px-5 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-sm text-violet-500 font-medium shadow-sm border border-violet-200/50">
            💜 Capítulo 2 de 5
          </span>
        </motion.div>

        {/* ===== TÍTULO ===== */}
        <motion.h1
          variants={itemVariants}
          className="text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent mb-2"
        >
          {capTwoData.title}
        </motion.h1>

        {/* ===== SUBTÍTULO ===== */}
        <motion.h2
          variants={itemVariants}
          className="text-center text-xl md:text-2xl text-gray-400 mb-6 font-light tracking-wide"
        >
          {capTwoData.subtitle}
        </motion.h2>

        {/* ===== CITA ===== */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400/60 text-sm italic max-w-lg mx-auto mb-12"
        >
          "La música es el lenguaje del alma. Y la tuya siempre supo la melodía perfecta para cada corazón que tocó."
        </motion.p>

        {/* ===== TABLERO DE CORCHO ===== */}
        <motion.div variants={itemVariants} className="mb-16">
          <div
            className="relative rounded-2xl p-6 md:p-10 shadow-inner border border-amber-800/20"
            style={{
              backgroundColor: "#c89d6a",
              backgroundImage: `
                radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px),
                radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px, 30px 30px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          >
            <div className="absolute inset-0 rounded-2xl border-4 border-amber-900/20 pointer-events-none" />

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {capTwoData.photos.slice(0, 3).map((photo, i) => (
                <motion.div
                  key={`photo-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  whileHover={{ scale: 1.06, zIndex: 20 }}
                  className={`relative ${photoRotations[i]} hover:shadow-2xl transition-shadow duration-300`}
                >
                  <PushPin />
                  <div className="bg-white p-2.5 shadow-lg rounded-sm">
                    <img
                      src={photo}
                      alt="Amistad"
                      className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-sm"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.06, zIndex: 20 }}
                className={`relative ${photoRotations[3]} hover:shadow-2xl transition-shadow duration-300`}
              >
                <PushPin />
                <div className="bg-white p-2.5 shadow-lg rounded-sm">
                  <img
                    src={capTwoData.photos[3]}
                    alt="Amistad"
                    className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-sm"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <PostItNote
                  text={capTwoData.notes[0].text}
                  rotate={noteRotations[0]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.4 }}
                whileHover={{ scale: 1.06, zIndex: 20 }}
                className={`relative ${photoRotations[4]} hover:shadow-2xl transition-shadow duration-300`}
              >
                <PushPin />
                <div className="bg-white p-2.5 shadow-lg rounded-sm">
                  <img
                    src={capTwoData.photos[4]}
                    alt="Amistad"
                    className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-sm"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <PostItNote
                  text={capTwoData.notes[1].text}
                  rotate={noteRotations[1]}
                  color="bg-green-200"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.4 }}
                whileHover={{ scale: 1.06, zIndex: 20 }}
                className={`relative ${photoRotations[5]} hover:shadow-2xl transition-shadow duration-300`}
              >
                <PushPin />
                <div className="bg-white p-2.5 shadow-lg rounded-sm">
                  <img
                    src={capTwoData.photos[5]}
                    alt="Amistad"
                    className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-sm"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <PostItNote
                  text={capTwoData.notes[2].text}
                  rotate={noteRotations[2]}
                  color="bg-blue-200"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.2} />

        {/* ===== CARTA CON SOBRE ===== */}
        <motion.div variants={itemVariants}>
          <LetterMusic text={capTwoData.text} />
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.4} />

        {/* ===== RECUERDO ESPECIAL INTERACTIVO ===== */}
        <motion.div variants={itemVariants} className="max-w-lg mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-1">
              Un recuerdo de esa etapa 🎀
            </h3>
            <p className="text-gray-400 text-sm">
              Toca la tarjeta para revivirlo
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMemoryRevealed(true)}
            className={`cursor-pointer rounded-2xl p-6 md:p-8 shadow-lg border transition-colors duration-500 ${
              memoryRevealed
                ? "bg-white border-violet-200 shadow-violet-200/30"
                : "bg-white/60 border-violet-100/50 hover:border-violet-200"
            }`}
          >
            {!memoryRevealed ? (
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="text-violet-400" size={36} />
                </motion.div>
                <p className="text-gray-400 text-sm text-center">
                  Toca para descubrir un recuerdo especial...
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
                  🎻
                </motion.p>
                <p className="text-gray-700 leading-relaxed">
                  En aquellos años, cada vez que tocabas el violín, no solo
                  hacías música — hacías que quienes te rodeaban sintieran algo
                  especial. Tus amigas te admiraban, tu talento las llenaba de
                  orgullo. Esa pasión por la música y por compartirla con los
                  demás es parte de lo que te hace única. 💜
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent mt-4"
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* ===== DIVISOR ===== */}
        <SectionDivider delay={0.6} />

        {/* =AMA a tus amigas ===== */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-600 mb-1">
              Ellas también fueron parte de tu historia 👭
            </h3>
            <p className="text-gray-400 text-sm">
              Pequeños fragmentos de lo que vivieron juntas
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {friendQuotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md border border-violet-100/50 w-52 text-center"
              >
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                  className="text-2xl block mb-2"
                >
                  {q.emoji}
                </motion.span>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{q.text}"
                </p>
              </motion.div>
            ))}
          </div>
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
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-violet-200/50"
            >
              <div className="flex flex-col items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Music className="text-violet-400" size={32} />
                </motion.div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 text-center">
                  {capTwoData.question}
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
                        : "border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
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
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-violet-200/50 shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="inline-block mb-6"
              >
                <div className="bg-white p-2.5 shadow-xl rounded-md rotate-2 hover:scale-105 transition-transform duration-300">
                  <img
                    src={capTwoData.insPhoto}
                    alt="Su instrumento"
                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded"
                  />
                  <p className="text-[11px] text-gray-500 text-center mt-1.5 font-light italic">
                    🎵 La música que siempre la acompañó
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="text-5xl mb-4"
              >
                🎉
              </motion.p>
              <p className="text-gray-600 mb-1 text-lg font-medium">
                ¡Respuesta correcta! 💜
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Has desbloqueado el siguiente capítulo...
              </p>
              <button
                onClick={() => navigate("/capitulotres")}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-400 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-violet-300/50 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
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

export default CapTwo;
