import "./globals.css";
import MobileMenu from "./MobileMenu";

export const metadata = {
  title: "David Da Silva | Missione MMA",
  description:
    "Fede, missione e MMA. Il percorso di David Da Silva e la possibilità di sostenere questa chiamata.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-black text-white">

        <header className="sticky top-0 z-50 border-b border-white/10 bg-black relative">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            <a href="/" className="text-white font-bold text-lg tracking-wide uppercase">
              DAVID DA SILVA
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="/" className="hover:text-white uppercase">Home</a>
              <a href="/storia" className="hover:text-white uppercase">La mia storia</a>
              <a href="/missione" className="hover:text-white uppercase">Missione</a>
              <a href="/sostieni" className="hover:text-white uppercase">Sostieni</a>
              <a href="/contatti" className="hover:text-white uppercase">Contatti</a>
            </nav>

            <MobileMenu />
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-10 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
              DAVID DA SILVA
            </p>

            <p className="text-white/60 mb-6">
              FEDE • MISSIONE • MMA
            </p>

            <a
              href="https://instagram.com/brajeel.films"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              @brajeel.films
            </a>

            <p className="text-white/30 text-sm mt-6">
              © {new Date().getFullYear()} — Tutti i diritti riservati
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}
