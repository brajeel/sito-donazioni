export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
          FEDE • MISSIONE • MMA
        </p>

        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight mb-6">
          LA MISSIONE CHE CRISTO MI HA DATO
        </h1>

        <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
          Dalla lotta interiore a una vita completamente dedicata a Dio.
          L’MMA è il campo in cui vivo questa chiamata ogni giorno.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/storia"
            className="rounded-2xl bg-white text-black px-6 py-3 font-semibold"
          >
            LEGGI LA MIA STORIA
          </a>

          <a
            href="/sostieni"
            className="rounded-2xl border border-white/20 px-6 py-3 font-semibold"
          >
            SOSTIENI LA MISSIONE
          </a>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
            COSA STO FACENDO
          </h2>

          <p className="text-white/75 text-lg leading-relaxed max-w-3xl mx-auto">
            Sto dedicando la mia vita a Dio e al percorso che sento nel cuore.
            Allenamento, disciplina e fede sono parte della mia vita ogni giorno.
            Non è solo sport. È una missione.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
            PERCHÉ QUESTO SITO
          </h2>

          <p className="text-white/75 text-lg leading-relaxed max-w-3xl mx-auto">
            Questo sito nasce per condividere la mia storia e per dare la possibilità
            a chi lo desidera di sostenere questo percorso.
          </p>
        </div>
      </section>

    </main>
  );
}
