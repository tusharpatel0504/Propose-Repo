import React from 'react';

const ProposalVideo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10 animate-fade-in">
      {/* Glassmorphism Container adjusted for Vertical Video (Shorts) */}
      <div className="max-w-sm w-full bg-white/60 backdrop-blur-md border-4 border-white/50 rounded-[2rem] p-4 shadow-2xl relative transform hover:scale-[1.01] transition-transform duration-500">
        
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl shadow-lg bg-black">
          <iframe 
            className="w-full h-full" 
            src="https://res.cloudinary.com/dr6hfovvv/video/upload/v1770570281/IMG_5159_mpcofd.mp4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </div>
        
        <div className="text-center mt-6">
           <h2 className="text-3xl font-cursive text-japan-red font-bold drop-shadow-sm">Dedicated to you 💖</h2>
        </div>
      </div>
    </div>
  );
};

export default ProposalVideo;
