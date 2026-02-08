import { Link } from "react-router-dom";

const Buttons = ({ yesLink, noLink, noId }) => {
  return (
    <div className="flex gap-6 justify-center mt-6">
      <Link
        to={yesLink}
        className="px-8 py-3 rounded-full bg-japan-red text-white font-bold text-lg shadow-lg hover:bg-pink-700 transition hover:scale-110 duration-300 animate-pulse"
      >
        Yes 💖
      </Link>

      <Link
        to={noLink}
        id={noId}
        className="px-8 py-3 rounded-full bg-white text-gray-700 font-bold text-lg shadow-md hover:bg-gray-100 transition border border-gray-200"
      >
        No 💔
      </Link>
    </div>
  );
};

export default Buttons;
