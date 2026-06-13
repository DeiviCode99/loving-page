import { Sparkles } from "lucide-react";

const Star = ({ className }) => (
  <Sparkles
    className={`absolute transition-all duration-700 text-yellow-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] ${className}`}
    size={18}
    fill="currentColor"
  />
);

const TreasureButton = ({ children, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
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
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
      "
    >
      <span className="relative z-10">{children}</span>

      {/* Estrellas */}
      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-16 group-hover:-translate-y-10" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 group-hover:-translate-y-14" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-14 group-hover:-translate-y-4" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-20 group-hover:translate-y-3" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-12 group-hover:translate-y-6" />

      <Star className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 group-hover:translate-y-10" />
    </button>
  );
};

export default TreasureButton;