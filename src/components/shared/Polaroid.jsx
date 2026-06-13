const Polaroid = ({ src, rotate }) => {
  return (
    <div
      className={`
        bg-white
        p-3
        shadow-xl
        hover:scale-110
        transition-all
        duration-300
        ${rotate}
      `}
    >
      <img
        src={src}
        alt="Recuerdo"
        className="w-52 h-52 object-cover"
      />
    </div>
  );
};

export default Polaroid;