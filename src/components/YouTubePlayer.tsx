"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  videoId: string;
}

export default function YouTubePlayer({ videoId }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div
      className="w-full aspect-video rounded-xl overflow-hidden relative cursor-pointer group"
      onClick={() => setPlaying(true)}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Video thumbnail"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-breathe w-16 h-16 bg-[#e91e8c] rounded-full flex items-center justify-center shadow-lg shadow-[#e91e8c]/40 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* YouTube branding */}
      <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs text-white/60">
        ▶ YouTube
      </div>
    </div>
  );
}
