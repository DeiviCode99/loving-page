import { motion } from "framer-motion";
import {
  Heart,
  Star,
  Sparkles,
} from "lucide-react";
import capFiveData from "../../data/capFiveData.js";

const FloatingIcon = ({ Icon, className, delay = 0, size = 22 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.1, 0.4, 0.1],
      y: [-12, 12, -12],
    }}
    transition={{
      duration: 6 + delay,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className={`absolute pointer-events-none ${className}`}
  >
    <Icon size={size} className="text-rose-300/20 drop-shadow-lg" />
  </motion.div>
);

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CapFive = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0015] via-[#1a0010] to-[#0d001a] overflow-hidden">
      {/* Estrellas de fondo */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 5),
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 13 + 5) % 100}%`,
          }}
        />
      ))}

      <FloatingIcon Icon={Star} className="top-12 left-[8%]" delay={0} size={16} />
      <FloatingIcon Icon={Heart} className="top-24 right-[12%]" delay={0.8} size={18} />
      <FloatingIcon Icon={Sparkles} className="bottom-36 left-[10%]" delay={1.6} size={14} />
      <FloatingIcon Icon={Heart} className="top-[40%] right-[6%]" delay={2.4} size={16} />
      <FloatingIcon Icon={Star} className="bottom-28 right-[15%]" delay={3.2} size={12} />
      <FloatingIcon Icon={Sparkles} className="top-[60%] left-[5%]" delay={4} size={14} />

      {/* Brillo central */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500 rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto px-4 py-10 md:py-16"
      >
        <motion.div variants={itemVariants} className="text-center mb-6">
          <motion.span
            animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.1)", "0 0 0px rgba(255,255,255,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block px-5 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-rose-300 font-medium shadow-sm border border-rose-500/30"
          >
            <Heart className="inline" size={14} fill="currentColor" /> Capítulo 5 de 5 — Final
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-center text-6xl md:text-8xl font-script font-bold bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_30px_rgba(255,150,200,0.15)]"
        >
          {capFiveData.title}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-center text-2xl md:text-3xl text-white/40 mb-8 font-light tracking-[0.3em] uppercase"
        >
          {capFiveData.subtitle}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Heart className="text-rose-400/60" size={18} fill="currentColor" />
            </motion.div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
          </div>
          <p className="text-white/40 leading-8 whitespace-pre-line text-center text-lg font-light tracking-wide italic">
            {capFiveData.text}
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
            <Heart className="text-rose-400/40" size={14} fill="currentColor" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
          </div>
        </motion.div>

        {/* ===== VIDEO PLAYER ESTILIZADO ===== */}
        <motion.div variants={itemVariants} className="max-w-xs mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Brillo exterior */}
            <motion.div
              animate={{
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-amber-500/20 rounded-[3rem] blur-2xl"
            />

            {/* Marco exterior con gradiente */}
            <div className="relative p-[3px] rounded-[2.8rem] bg-gradient-to-br from-rose-400/60 via-purple-400/40 to-amber-300/60 shadow-[0_0_60px_rgba(255,100,150,0.08)]">
              {/* Marco interior blanco */}
              <div className="bg-gradient-to-br from-white/95 to-rose-50/95 rounded-[2.6rem] p-3 shadow-xl">
                {/* Esquinas decorativas */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rose-300/50 rounded-tl-xl pointer-events-none" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose-300/50 rounded-tr-xl pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose-300/50 rounded-bl-xl pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rose-300/50 rounded-br-xl pointer-events-none" />

                {/* Corazones decorativos en esquinas */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
                  className="absolute top-5 left-6 pointer-events-none"
                >
                  <Heart className="text-rose-300/40" size={14} fill="currentColor" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                  className="absolute top-5 right-6 pointer-events-none"
                >
                  <Heart className="text-rose-300/40" size={14} fill="currentColor" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                  className="absolute bottom-5 left-6 pointer-events-none"
                >
                  <Heart className="text-rose-300/40" size={14} fill="currentColor" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
                  className="absolute bottom-5 right-6 pointer-events-none"
                >
                  <Heart className="text-rose-300/40" size={14} fill="currentColor" />
                </motion.div>

                {/* Contenedor del video */}
                <div className="relative rounded-[2.2rem] overflow-hidden bg-black shadow-inner">
                  <iframe
                    src="https://www.youtube.com/embed/G22PWJZ3n7A"
                    title="Video final"
                    className="w-full aspect-[9/16]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Placa inferior */}
                <div className="text-center pt-4 pb-1 px-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="h-px w-6 bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="text-rose-300/50" size={14} fill="currentColor" />
                    </motion.div>
                    <div className="h-px w-6 bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />
                  </div>
                  <p className="text-gray-400 text-sm font-light tracking-wide italic">
                    Un momento especial para recordar siempre 💖
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cierre final */}
        <motion.div
          variants={itemVariants}
          className="text-center pb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-400/30 to-transparent" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="text-rose-300/30" size={20} />
            </motion.div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-400/30 to-transparent" />
          </div>
          <p className="text-white/30 text-sm font-light tracking-wider uppercase">
            Gracias por este hermoso viaje ❤️
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CapFive;
