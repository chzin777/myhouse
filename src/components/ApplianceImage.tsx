"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ApplianceImageProps = {
  src: string;
  alt: string;
  filename: string;
  priority?: boolean;
  className?: string;
};

export function ApplianceImage({
  src,
  alt,
  filename,
  priority = false,
  className = "",
}: ApplianceImageProps) {
  const [hasError, setHasError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const baseClass = `scroll-reveal scroll-reveal--image ${
    isVisible ? "scroll-reveal--visible" : "scroll-reveal--hidden"
  } relative min-h-[38dvh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-stone-50 via-white to-amber-50/50 ring-1 ring-stone-200/60 sm:min-h-[44dvh] lg:min-h-[52dvh] ${className}`;

  if (hasError) {
    return (
      <div
        ref={ref}
        className={`${baseClass} flex flex-col items-center justify-center gap-2 px-4 text-center`}
      >
        <svg
          aria-hidden="true"
          className="h-12 w-12 text-stone-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <p className="text-xs text-stone-400">Salve a imagem como</p>
        <code className="rounded bg-white px-2 py-1 font-mono text-xs text-stone-600 shadow-sm">
          {filename}
        </code>
      </div>
    );
  }

  return (
    <div ref={ref} className={baseClass}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-contain p-6 transition-transform duration-700 ease-out sm:p-8 ${
          isVisible ? "scale-100" : "scale-110"
        }`}
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
