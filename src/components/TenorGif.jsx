import { useEffect } from "react";

const TenorGif = ({ postId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative group overflow-hidden rounded-xl">
      {/* Mask layer */}
      <div className="absolute top-0 right-0 w-20 h-12 bg-white opacity-0 group-hover:opacity-100 transition z-10" />

      {/* GIF */}
      <div
        className="tenor-gif-embed pointer-events-none group-hover:scale-105 transition-transform duration-300"
        data-postid={postId}
        data-share-method="host"
        data-width="100%"
      />
    </div>
  );
};

export default TenorGif;
