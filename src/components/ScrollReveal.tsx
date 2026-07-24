"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealVariant = "fade-up" | "fade-scale" | "fade-in" | "slide-right";

type ScrollRevealProps = {
  children: ReactNode | ((visible: boolean) => ReactNode);
  className?: string;
  delay?: number;
  variant?: ScrollRevealVariant;
  as?: "div" | "li" | "article" | "header" | "footer" | "section" | "main";
  id?: string;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  as: Tag = "div",
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={ref as never}
      className={`scroll-reveal scroll-reveal--${variant} ${
        isVisible ? "scroll-reveal--visible" : "scroll-reveal--hidden"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </Tag>
  );
}
