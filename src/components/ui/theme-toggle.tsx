"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-16 h-6 rounded-full border border-stroke bg-surface" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex items-center w-16 h-6 rounded-full border border-stroke bg-surface transition-colors focus:outline-none hover:cursor-pointer"
      aria-label="Alternar tema"
    >
      <div
        className={`absolute left-1 flex items-center justify-center transition-transform duration-500 ease-in-out ${
          isDark ? "-translate-x-2" : "translate-x-8"
        }`}
      >
        <div className="absolute w-11 h-11 rounded-full bg-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

        <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-black shadow-sm transition-colors">
          
          <MoonStar 
            size={16} 
            className={`absolute transition-all duration-500 ease-in-out ${
              isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`} 
          />
          
          <Sun 
            size={16} 
            className={`absolute transition-all duration-500 ease-in-out ${
              isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`} 
          />
          
        </div>
      </div>
    </button>
  );
}