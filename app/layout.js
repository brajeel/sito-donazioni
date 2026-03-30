import "./globals.css";

export const metadata = {
  title: "David Da Silva | Missione MMA",
  description:
    "Fede, missione e MMA. Il percorso di David Da Silva e la possibilità di sostenere questa chiamata.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-white font-bold text-lg tracking-wide">
              DAVID DA SILVA
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="/" className="hover:text-white transition">Home</a>
              <a href="/storia" className="hover:text-white transition">La mia storia</a>
              <a href="/missione" className="hover:text-white transition">Missione</a>
              <a href="/sostieni" className="hover:text-white transition">Sostieni</a>
              <a href="/contatti" className="hover:text-white transition">Contatti</a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}