const PushPin = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <div className="relative w-4 h-4 bg-gradient-to-b from-rose-400 to-rose-600 rounded-full shadow-md border border-rose-300/50">
      <div className="absolute top-0.5 left-1 w-1.5 h-1.5 bg-white/50 rounded-full" />
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gray-400/40 rounded-full" />
    </div>
  </div>
);

export default PushPin;
