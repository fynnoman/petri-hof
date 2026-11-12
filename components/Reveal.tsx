"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setV(true),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 1s ease-out, transform 1s ease-out",
        transitionDelay: `${delay}ms`,
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(14px)",
      }}
    >
      {children}
    </div>
  );
}
