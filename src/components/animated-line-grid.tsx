"use client";

import { useState, useEffect } from "react";

export function AnimatedLineGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gridItems = Array.from({ length: 100 }, (_, i) => i);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" />
      <div className="absolute inset-0 grid grid-rows-[repeat(10,1fr)] opacity-10 md:grid-cols-[repeat(10,1fr)]">
        {gridItems.map((item) => (
          <div
            key={item}
            className="animate-ping border-slate-800 opacity-50"
            style={{
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              borderWidth: "0.2px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
