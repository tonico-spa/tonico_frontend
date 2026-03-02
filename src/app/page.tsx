import Link from "next/link";
import TonicLogo from "@/components/TonicLogo";

export default function LanguageSelect() {
  return (
    <main className="min-h-screen bg-[#060b28] flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-14">
        <TonicLogo size="lg" href="" />
      </div>

      {/* Language buttons */}
      <div className="flex gap-16">
        {/* Spanish */}
        <Link href="/es" className="flex flex-col items-center gap-3 group">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-white transition-all duration-200">
            <ChileanFlag />
          </div>
          <span className="text-white text-sm tracking-wide">Español</span>
        </Link>

        {/* English */}
        <Link href="/en" className="flex flex-col items-center gap-3 group">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-white transition-all duration-200">
            <USFlag />
          </div>
          <span className="text-white text-sm tracking-wide">English</span>
        </Link>
      </div>
    </main>
  );
}

function ChileanFlag() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="40" cy="40" r="40" fill="#d52b1e" />
      {/* Top half white */}
      <path d="M0,40 A40,40 0 0,1 80,40 Z" fill="white" />
      {/* Blue rectangle top-left */}
      <path d="M0,0 A40,40 0 0,1 0,40 L40,40 Z" fill="#0039a6" />
      {/* White star */}
      <polygon
        points="20,16 22.9,25 32,25 24.5,30.5 27.4,39.5 20,34 12.6,39.5 15.5,30.5 8,25 17.1,25"
        fill="white"
      />
    </svg>
  );
}

function USFlag() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <clipPath id="us-circle-clip">
          <circle cx="40" cy="40" r="40" />
        </clipPath>
      </defs>
      <g clipPath="url(#us-circle-clip)">
        {/* Red base */}
        <rect width="80" height="80" fill="#b22234" />
        {/* White stripes */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x="0" y={i * 12 + 6} width="80" height="6" fill="white" />
        ))}
        {/* Blue canton */}
        <rect x="0" y="0" width="34" height="43" fill="#3c3b6e" />
        {/* Stars rows 1,3,5 — 6 stars */}
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <circle
              key={`a${row}-${col}`}
              cx={2.8 + col * 5.2}
              cy={3.5 + row * 8}
              r="1.1"
              fill="white"
            />
          ))
        )}
        {/* Stars rows 2,4 — 5 stars offset */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4].map((col) => (
            <circle
              key={`b${row}-${col}`}
              cx={5.4 + col * 5.2}
              cy={7.5 + row * 8}
              r="1.1"
              fill="white"
            />
          ))
        )}
      </g>
    </svg>
  );
}
