interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  label = "Image",
  className = "",
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-[#1a1f4e] border border-[#2a3070] flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <svg
        className="w-10 h-10 text-[#3a4080]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-[#3a4080] text-sm font-medium uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
