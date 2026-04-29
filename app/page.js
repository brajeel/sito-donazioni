export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-6">

        <img
          src="/david-mobile.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 md:hidden"
          alt="David Da Silva"
        />

        <img
          src="/david.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 hidden md:block"
          alt="David Da Silva"
        />

        {/* OVERLAY PIÙ LEGGERO */}
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-6">
            FEDE • MISSIONE • MMA
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95]">
            LA MISSIONE CHE CRISTO MI HA DATO
          </h1>

          <p className="mt-6 text-white/70 uppercase tracking-[0.25em]">
            NON È SOLO SPORT. È UNA CHIAMATA.
          </p>

          <p className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Dalla lotta interiore a una vita completamente dedicata a Dio.
            L’MMA è il campo in cui vivo questa chiamata ogni giorno.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/storia"
              className="rounded-full bg-white text-black px-8 py-4 font-bold uppercase hover:scale-105 transition"
            >
              LEGGI LA MIA STORIA
            </a>

            <a
              href="/sostieni"
              className="rounded-full border border-white/40 px-8 py-4 font-bold uppercase hover:bg-white hover:text-black transition"
            >
              SOSTIENI LA MISSIONE
            </a>
          </div>

        </div>
      </section>

      {/* VIDEO */}
      <section className="border-t border-white/10 px-6 py-28 bg-black relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_40%)]"></div>

        <div className="relative max-w-6xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-5">
            GUARDA
          </p>

          <h2 className="text-3xl md:text-6xl font-black uppercase mb-6">
            LA MIA MISSIONE
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Questo è quello che sto vivendo oggi.
            Non è una teoria, non è una cosa perfetta.
            È un percorso reale, fatto di fede, allenamento e scelte ogni giorno.
          </p>

          <div className="relative w-full overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.08)]">

            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MeAqloRdVdU"
                title="La missione che Cristo mi ha dato"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* CARDS */}
      <section className="border-t border-white/10 px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <a href="/storia" className="rounded-3xl border border-white/10 p-8 bg-white/[0.03] hover:bg-white/[0.08] transition">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">01</p>
            <h2 className="text-2xl font-bold uppercase mb-4">La mia storia</h2>
            <p className="text-white/70">
              Da una vita nel caos a una trasformazione reale in Cristo.
            </p>
          </a>

          <a href="/missione" className="rounded-3xl border border-white/10 p-8 bg-white/[0.03] hover:bg-white/[0.08] transition">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">02</p>
            <h2 className="text-2xl font-bold uppercase mb-4">Missione</h2>
            <p className="text-white/70">
              L’MMA come campo di fede, disciplina e testimonianza.
            </p>
          </a>

          <a href="/sostieni" className="rounded-3xl border border-white/20 p-8 bg-white/[0.06] hover:bg-white/[0.12] transition">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">03</p>
            <h2 className="text-2xl font-bold uppercase mb-4">Sostieni</h2>
            <p className="text-white/70">
              Partecipa concretamente a questa missione.
            </p>
          </a>

        </div>
      </section>

      {/* FINALE */}
      <section className="border-t border-white/10 px-6 py-24 text-center bg-black">
        <div className="max-w-4xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-5">
            IL CUORE DEL PROGETTO
          </p>

          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            UNA VITA ARRESA A DIO CAMBIA TUTTO.
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            Questo sito non è solo una storia. È un percorso reale.
            Una testimonianza di fede, disciplina, combattimento e trasformazione.
          </p>

        </div>
      </section>

    </main>
  );
}
