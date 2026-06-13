import { motion } from "framer-motion";
import { photos } from "../../data/MemoryPhotos.js"


 const MemoryFrame = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            delay: index * 0.2,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`absolute ${photo.className}`}
        >
          <div className="bg-white p-2 rounded-md shadow-2xl">
            <img
              src={photo.src}
              alt={`Recuerdo ${index + 1}`}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MemoryFrame;