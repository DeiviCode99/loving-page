import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import TreasureButton from "../shared/TreasureButtom.jsx";
import MemoryFrame from "../shared/MemoryFrame.jsx";

const BIRTHDAY_DATE = "20604";

const FloatingHeart = ({ className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0, 0.5, 0],
      y: [-10, -50, -100],
      x: [0, 12, -8],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className={`absolute pointer-events-none ${className}`}
  >
    <Heart size={12} fill="currentColor" className="text-white/20" />
  </motion.div>
);

const Login = () => {
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (date.trim() === BIRTHDAY_DATE) {
      setError(false);
      setSuccess(true);
      setShowConfetti(true);
      localStorage.setItem("love-auth", "true");
      setTimeout(() => navigate("/capitulouno"), 2500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-600 via-pink-700 to-red-800 overflow-hidden">
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={400}
          colors={["#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#fff"]}
        />
      )}

      {/* Overlay animado */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corazones flotando */}
      <FloatingHeart className="top-1/4 left-[15%]" delay={0} />
      <FloatingHeart className="top-1/3 right-[18%]" delay={1.2} />
      <FloatingHeart className="bottom-1/3 left-[12%]" delay={2.4} />
      <FloatingHeart className="bottom-1/4 right-[14%]" delay={3.6} />

      <MemoryFrame />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: success ? 1.03 : 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <motion.div
            animate={
              success
                ? {
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 60px rgba(255,255,255,0.25)",
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 1.5, repeat: success ? Infinity : 0 }}
            className="bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8"
          >
            {!success ? (
              <>
                <div className="flex flex-col items-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative mb-4">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                      />
                      <Heart
                        className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] relative"
                        size={50}
                        fill="currentColor"
                      />
                    </div>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg"
                  >
                    Un Recorrido por tu Vida
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-white/50 text-sm mt-3 text-center"
                  >
                    Ingresa tu fecha especial para comenzar este viaje ✨
                  </motion.p>
                </div>

                <form onSubmit={handleSubmit}>
                  <label className="block mb-2 text-white/80 font-medium text-sm">
                    Tu cumple 🎉
                  </label>

                  <motion.div
                    animate={error ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all ${
                        error
                          ? "border-red-400 bg-red-500/10"
                          : "border-white/20 bg-white/10 focus-within:border-white/50 focus-within:bg-white/[0.15]"
                      }`}
                    >
                      <LockKeyhole
                        className={`transition-colors shrink-0 ${
                          error ? "text-red-300" : "text-white/60"
                        }`}
                        size={20}
                      />

                      <input
                        type="text"
                        placeholder="Cuando nació la bb más linda del mundo"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-transparent outline-none text-white placeholder:text-white/40"
                      />
                    </div>
                  </motion.div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-200 text-sm mt-2"
                    >
                      Esa no es nuestra fecha especial ❤️
                    </motion.p>
                  )}

                  <TreasureButton disabled={!date}>✨ Desbloquear</TreasureButton>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center py-6"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Heart
                    className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                    size={72}
                    fill="currentColor"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-xl font-semibold mt-6 text-center"
                >
                  ¡Bienvenida, mi amor! 💖
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/50 text-sm mt-2 text-center"
                >
                  Prepara tu corazón para este viaje...
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 1.2 }}
                  className="h-0.5 bg-white/30 rounded-full mt-6 w-48 origin-left"
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;