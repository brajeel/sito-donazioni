import "./globals.css";
import MobileMenu from "./MobileMenu";

export const metadata = {
  title: "David Da Silva | Missione MMA",
  description: "Fede, missione e MMA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-black text-white">

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            <a href="/" className="font-bold uppercase">
              DAVID DA SILVA
            </a>

            <nav className="hidden md:flex gap-6 text-sm text-white/80">
              <a href="/storia">STORIA</a>
              <a href="/missione">MISSIONE</a>
              <a href="/sostieni">SOSTIENI</a>
            </nav>

            <MobileMenu />
          </div>
        </header>

        {children}

        {/* FOOTER PRO */}
        <footer className="border-t border-white/10 mt-20 px-6 py-16 bg-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

            {/* COLONNA 1 */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
                DAVID DA SILVA
              </p>

              <p className="text-white/70 leading-relaxed">
                Fede, missione e MMA.
                Un percorso reale, vissuto ogni giorno.
              </p>
            </div>

            {/* COLONNA 2 */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
                LINK RAPIDI
              </p>

              <div className="flex flex-col gap-2 text-white/70">
                <a href="/" className="hover:text-white">Home</a>
                <a href="/storia" className="hover:text-white">La mia storia</a>
                <a href="/missione" className="hover:text-white">Missione</a>
                <a href="/sostieni" className="hover:text-white">Sostieni</a>
              </div>
            </div>

            {/* COLONNA 3 */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
                SEGUIMI
              </p>

              <a
                href="https://instagram.com/brajeel.films"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                @brajeel.films
              </a>

              <p className="text-white/60 mt-6 text-sm leading-relaxed">
                Se vuoi seguire il percorso da vicino,
                vedere aggiornamenti e contenuti,
                puoi farlo anche da Instagram.
              </p>
            </div>

          </div>

          {/* FRASE FINALE */}
          <div className="max-w-4xl mx-auto text-center mt-16">
            <p className="text-white/40 uppercase tracking-[0.2em]">
              UNA VITA ARRESA A DIO PUÒ CAMBIARE TUTTO
            </p>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center mt-8 text-white/30 text-sm">
            © {new Date().getFullYear()} David Da Silva
          </div>

        </footer>

      </body>
    </html>
  );
}
