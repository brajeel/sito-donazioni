export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.13),transparent_35%)]"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-5">
            FEDE • MISSIONE • MMA
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
            LA MISSIONE CHE CRISTO MI HA DATO
          </h1>

          <p className="mt-6 text-white/50 uppercase tracking-[0.25em] text-sm md:text-base">
            NON È SOLO SPORT. È UNA CHIAMATA.
          </p>

          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
            Dalla lotta interiore a una vita completamente dedicata a Dio.
            L’MMA è il campo in cui vivo questa chiamata ogni giorno.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/storia"
              className="rounded-full bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:scale-105 transition"
            >
              Leggi la mia storia
            </a>

            <a
              href="/sostieni"
              className="rounded-full border border-white/25 px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition"
            >
              Sostieni la missione
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <a href="/storia" className="group rounded-3xl border border-white/10 p-8 bg-white/[0.03] hover:bg-white/[0.07] transition">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">01</p>
            <h2 className="text-2xl font-bold uppercase mb-4">La mia storia</h2>
            <p className="text-white/70 leading-relaxed">
              Da una vita segnata dal vuoto a un cammino trasformato da Cristo.
            </p>
          </a>

          <a href="/missione" className="group rounded-3xl border border-white/10 p-8 bg-white/[0.03] hover:bg-white/[0.07] transition">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">02</p>
            <h2 className="text-2xl font-bold uppercase mb-4">La missione</h2>
            <p className="text-white/70 leading-relaxed">
              L’MMA come campo di missione: disciplina, fede, identità e testimonianza.
            </p>
          </a>

          <a href="/sostieni" className="group rounded-3xl border border-white/10 p-8 bg-white text-black hover:scale-[1.02] transition">
            <p className="text-black/40 uppercase tracking-[0.25em] text-xs mb-4">03</p>
            <h2 className="text-2xl font-bold uppercase mb-4">Sostieni</h2>
            <p className="text-black/70 leading-relaxed">
              Partecipa concretamente a questa missione attraverso una donazione libera.
            </p>
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
            UNA VITA ARRESA A DIO PUÒ DIVENTARE TESTIMONIANZA.
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Questo sito non nasce per raccontare un’immagine perfetta, ma un percorso reale:
            fede, cadute, trasformazione, disciplina e una chiamata da vivere ogni giorno.
          </p>
        </div>
      </section>
    </main>
  );
}
