import Link from "next/link";

interface TonicLogoProps {
  size?: "sm" | "lg";
  href?: string;
}

export default function TonicLogo({ size = "sm", href = "/" }: TonicLogoProps) {
  const isLarge = size === "lg";

  const logo = (
    <span
      className={`inline-flex items-center font-black tracking-tight text-white select-none ${
        isLarge ? "text-7xl md:text-8xl" : "text-3xl"
      }`}
      style={{ fontFamily: "var(--font-alfa)" }}
    >
      T
      {/* Flask replaces the ó */}
      <span
        className={`inline-flex items-center justify-center relative ${
          isLarge ? "mx-1 w-14 h-14 md:w-16 md:h-16" : "mx-0.5 w-7 h-7"
        }`}
      >
        <svg
          viewBox="0 0 40 56"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Flask neck */}
          <rect x="13" y="0" width="14" height="5" rx="2" />
          <rect x="15" y="4" width="10" height="16" rx="1" />
          {/* Flask shoulders */}
          <path d="M15 18 L6 36 Q4 40 6 44 Q8 52 20 52 Q32 52 34 44 Q36 40 34 36 L25 18 Z" />
          {/* Liquid fill */}
          <path
            d="M10 40 Q9 48 20 50 Q31 48 30 40 Q28 36 20 36 Q12 36 10 40 Z"
            fill="#e91e8c"
          />
        </svg>
      </span>
      nico
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        {logo}
      </Link>
    );
  }

  return logo;
}

