"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <Link href="/">David Da Silva</Link>

      <button onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-black p-6 flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/storia">Storia</Link>
          <Link href="/missione">Missione</Link>
          <Link href="/sostieni">Sostieni</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
      )}
    </header>
  );
}