import React from 'react';

const ProposalVideo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10 animate-fade-in">
      {/* Glassmorphism Container specifically for the large video */}
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-md border-4 border-white/50 rounded-[2rem] p-6 shadow-2xl relative transform hover:scale-[1.01] transition-transform duration-500">
        
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg bg-pink-50">
          <iframe 
            className="w-full h-full" 
            src="https://drive.google.com/file/d/13rXi0DPZWD-2TtTALl6PKC3iLJTR2CpQ/preview"
            allow="autoplay"
            allowFullScreen
          >
          </iframe>
        </div>
        
        <div className="text-center mt-6">
           <h2 className="text-4xl font-cursive text-japan-red font-bold drop-shadow-sm">For you, my love 💖</h2>
        </div>
      </div>
    </div>
  );
};

export default ProposalVideo;
