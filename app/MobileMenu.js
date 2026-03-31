"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col gap-1"
        aria-label="Apri menu"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-white/10 bg-black px-6 py-4">
          <div className="flex flex-col gap-4 text-white/80 text-sm">
            <a href="/" className="hover:text-white transition uppercase">
              Home
            </a>
            <a href="/storia" className="hover:text-white transition uppercase">
              La mia storia
            </a>
            <a href="/missione" className="hover:text-white transition uppercase">
              Missione
            </a>
            <a href="/sostieni" className="hover:text-white transition uppercase">
              Sostieni
            </a>
            <a href="/contatti" className="hover:text-white transition uppercase">
              Contatti
            </a>
          </div>
        </div>
      )}
    </div>
  );
}