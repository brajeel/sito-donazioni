export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <section className="relative min-h-[100vh] flex items-center justify-center px-6">

        <img
          src="/david-mobile.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35 md:hidden"
          alt="David Da Silva"
        />

        <img
          src="/david.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35 hidden md:block"
          alt="David Da Silva"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-6">
            FEDE • MISSIONE • MMA
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95]">
            LA MISSIONE CHE CRISTO MI HA DATO
          </h1>

          <p className="mt-6 text-white/50 uppercase tracking-[0.25em]">
            NON È SOLO SPORT. È UNA CHIAMATA.
          </p>

          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
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
              className="rounded-full border border-white/25 px-8 py-4 font-bold uppercase hover:bg-white hover:text-black transition"
            >
              SOSTIENI LA MISSIONE
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <a href="/storia" className="rounded-3xl border border-white/10 p-8 bg-white/[0.03] hover:bg-white/[0.07] transition">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">01</p>
            <h2 className="text-2xl font-bold uppercase mb-4">La mia storia</h2>
            <p className="text-white/70">
              Da una vita nel caos a una trasformazione reale in Cristo.
            </p>
          </a>

          <a href="/missione" className="rounded-3xl border border-white/10 p-8 bg-white/[0.03] hover:bg-white/[0.07] transition">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">02</p>
            <h2 className="text-2xl font-bold uppercase mb-4">Missione</h2>
            <p className="text-white/70">
              L’MMA come campo di fede, disciplina e testimonianza.
            </p>
          </a>

          <a href="/sostieni" className="rounded-3xl bg-white text-black p-8 hover:scale-[1.02] transition">
            <p className="text-black/40 uppercase tracking-[0.25em] text-xs mb-4">03</p>
            <h2 className="text-2xl font-bold uppercase mb-4">Sostieni</h2>
            <p className="text-black/70">
              Partecipa concretamente a questa missione.
            </p>
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            UNA VITA ARRESA A DIO CAMBIA TUTTO.
          </h2>

          <p className="text-white/70 text-lg">
            Questo sito non è solo una storia. È un percorso reale.
            E tu puoi farne parte.
          </p>
        </div>
      </section>

    </main>
  );
}
