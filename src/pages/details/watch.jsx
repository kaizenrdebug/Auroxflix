import React, { useState } from 'react';

const Watch = ({ title }) => {
  // Ad-free: No ad overlays/logos
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div className="w-full max-w-3xl">
        {/* Embed your movie stream iframe here */}
        <iframe
          src="https://your-movie-streaming-url-here"
          title={title}
          className="w-full h-[480px] rounded-lg shadow-lg border-0 transition-all duration-500"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4 text-green-400 text-lg">Enjoy your movie — 100% ad free!</div>
    </div>
  );
};

export default Watch;