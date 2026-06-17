import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const LetterLove = ({ text }) => {
  const [phase, setPhase] = useState("closed");

  const handleClick = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    setTimeout(() => setPhase("open"), 900);
  };

  return (
    <div className="flex justify-center mb-10">
      <AnimatePresence mode="wait">
        {phase !== "open" ? (
          <motion.div
            key="envelope-love"
            exit={{ opacity: 0, scale: 0.8, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              whileHover={phase === "closed" ? { scale: 1.04 } : {}}
              onClick={handleClick}
              className={`relative w-80 h-48 cursor-pointer select-none ${
                phase === "opening" ? "pointer-events-none" : ""
              }`}
              style={{ perspective: "1200px" }}
            >
              {/* Sombra */}
              <div className="absolute -bottom-2 left-4 right-4 h-6 bg-black/10 rounded-full blur-md" />

              {/* Cuerpo del sobre */}
              <div className="absolute inset-0 bg-[#a8d5ba] rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              </div>

              {/* Ala inferior */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(50% 55%, 0 100%, 100% 100%)",
                  background: "#8fbfa0",
                }}
              />

              {/* Ala izquierda */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 40%, 50% 55%, 0 100%)",
                  background: "#9cc9ab",
                }}
              />

              {/* Ala derecha */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(100% 40%, 50% 55%, 100% 100%)",
                  background: "#9cc9ab",
                }}
              />

              {/* Carta dentro */}
              <motion.div
                animate={
                  phase === "opening"
                    ? { y: -100, opacity: 1, scale: 1 }
                    : { y: 0, opacity: 0.6, scale: 0.95 }
                }
                transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                className="absolute left-3 right-3 bottom-3 top-3 bg-[#f0fdf4] rounded-lg shadow-lg z-10 p-4 flex flex-col"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-6 h-0.5 bg-emerald-300 rounded-full mx-auto mb-2" />
                <p className="text-[11px] text-gray-500 leading-relaxed text-center flex-1 flex items-center justify-center font-light">
                  {text.slice(0, 80).trim()}...
                </p>
                <div className="w-6 h-0.5 bg-emerald-300 rounded-full mx-auto mt-2" />
              </motion.div>

              {/* Solapa superior */}
              <motion.div
                animate={
                  phase === "opening" ? { rotateX: -180 } : { rotateX: 0 }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 origin-top"
                style={{
                  clipPath: "polygon(50% 55%, 0 0, 100% 0)",
                  background: "#b8dfc8",
                  zIndex: 30,
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              </motion.div>

              {/* Sello de corazón especial */}
              <motion.div
                animate={
                  phase === "opening"
                    ? { scale: [1, 1.4, 0], opacity: [1, 1, 0] }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.4 }}
                className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 ring-2 ring-emerald-200/40">
                  <Heart
                    className="text-white drop-shadow-sm"
                    size={20}
                    fill="currentColor"
                  />
                </div>
              </motion.div>

              {/* Texto de ayuda */}
              {phase === "closed" && (
                <motion.span
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-emerald-600/60 text-sm font-medium whitespace-nowrap tracking-wide"
                >
                  <Heart className="inline mr-1" size={12} fill="currentColor" /> Toca el sobre para abrirlo
                </motion.span>
              )}
            </motion.div>
          </motion.div>
        ) : (
          /* === CARTA ABIERTA === */
          <motion.div
            key="letter-love"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-2xl"
          >
            <div className="bg-[#f0fdf4] p-8 md:p-10 rounded-xl shadow-2xl border border-[#bbf7d0] relative overflow-hidden">
              {/* Cintas decorativas especiales */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-100 rounded-full opacity-40" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-emerald-100 rounded-full opacity-40" />

              {/* Esquinas decorativas */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-300 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-300 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-300 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-300 rounded-br-lg" />

              {/* Línea decorativa superior */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <div className="relative">
                    <Heart
                      className="text-emerald-400 shrink-0"
                      size={24}
                      fill="currentColor"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-emerald-300 rounded-full blur-md -z-10"
                    />
                  </div>
                </motion.div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
              </div>

              {/* Texto */}
              <p className="text-gray-700 leading-8 whitespace-pre-line text-center text-lg md:text-xl font-light tracking-wide">
                {text}
              </p>

              {/* Firma decorativa */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 mt-8 justify-center"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                <span className="text-emerald-400 text-sm italic font-light">
                  — Con todo mi amor
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
              </motion.div>

              {/* Línea decorativa inferior */}
              <div className="flex items-center gap-3 mt-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                <Heart
                  className="text-emerald-300 shrink-0"
                  size={16}
                  fill="currentColor"
                />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LetterLove;
