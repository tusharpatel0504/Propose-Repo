const Card = ({ children, blur = true }) => {
  return (
    <div className={`bg-white/70 border-2 border-white/60 shadow-xl rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-md w-full text-center hover:shadow-rose-400/30 transition-shadow duration-300 ${blur ? 'backdrop-blur-md' : ''}`}>
      {children}
    </div>
  );
};

export default Card;
