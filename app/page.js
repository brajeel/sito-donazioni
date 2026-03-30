export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
          FEDE • MISSIONE • MMA
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto uppercase">
          LA MISSIONE CHE CRISTO MI HA DATO
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
          Questo sito nasce per condividere la mia storia, il mio percorso
          nell’MMA e la chiamata che sento nel cuore.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/storia"
            className="rounded-2xl bg-white text-black px-6 py-3 font-semibold"
          >
            Scopri la mia storia
          </a>

          <a
            href="/sostieni"
            className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white"
          >
            Sostieni la missione
          </a>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 p-6 bg-black">
            <h2 className="text-2xl font-bold mb-3 text-white">La mia storia</h2>
            <p className="text-white/75 leading-relaxed">
              Un percorso reale di trasformazione, dall’oscurità a una vita
              consacrata a Dio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-6 bg-black">
            <h2 className="text-2xl font-bold mb-3 text-white">La missione</h2>
            <p className="text-white/75 leading-relaxed">
              L’MMA non è solo sport. È il campo in cui sento di essere chiamato
              a portare verità, disciplina e identità.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-6 bg-black">
            <h2 className="text-2xl font-bold mb-3 text-white">Sostegno</h2>
            <p className="text-white/75 leading-relaxed">
              Chi crede in questa visione può sostenerla concretamente e farne
              parte.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-lg text-white/75 leading-relaxed max-w-3xl mx-auto">
            Grazie a chi sceglierà di camminare con me, anche solo con una
            preghiera.
          </p>
        </div>
      </section>
    </main>
  );
}