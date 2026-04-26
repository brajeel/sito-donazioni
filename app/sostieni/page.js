export default function SostieniPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]"></div>

        <div className="relative max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
            SOSTIENI
          </p>

          <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            SOSTIENI QUESTA MISSIONE
          </h1>

          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
            Se senti nel cuore di partecipare a questo percorso, puoi farlo con
            una donazione libera. Non è una richiesta forzata, ma una possibilità
            per sostenere ciò che Dio sta costruendo attraverso questa vita.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
            <h2 className="text-2xl font-bold uppercase mb-4">
              COSA STAI SOSTENENDO
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Stai sostenendo un percorso di fede, disciplina e testimonianza
              attraverso l’MMA: allenamenti, spostamenti, crescita personale,
              contenuti e missione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
            <h2 className="text-2xl font-bold uppercase mb-4">
              TRASPARENZA
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Ogni donazione viene usata per questo cammino, non per superficialità:
              palestra, benzina, treni, preparazione atletica e strumenti utili
              alla missione.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white text-black p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-black/50 mb-4">
            DONAZIONE LIBERA
          </p>

          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
            DATI PER SOSTENERE
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-black text-white p-6">
              <p className="text-white/50 text-sm uppercase mb-2">
                INTESTATARIO
              </p>
              <p className="text-2xl font-bold uppercase">
                DAVID DA SILVA
              </p>
            </div>

            <div className="rounded-2xl bg-black text-white p-6">
              <p className="text-white/50 text-sm uppercase mb-2">
                IBAN
              </p>
              <p className="font-mono text-lg break-all">
                IT56Y0306920103100000015628
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <p className="text-white/50 uppercase tracking-[0.2em]">
          GRAZIE A CHI SCEGLIERÀ DI SUPPORTARE QUESTO PERCORSO
        </p>
      </section>
    </main>
  );
}
