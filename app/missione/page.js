export default function MissionePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]"></div>

        <div className="relative max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
            MISSIONE
          </p>

          <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            QUESTO NON È SOLO SPORT
          </h1>

          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
            L’MMA è il campo in cui sento di vivere la chiamata che Cristo mi ha dato:
            portare fede, disciplina, identità e testimonianza.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">01</p>
            <h2 className="text-2xl font-black uppercase mb-4">FEDE</h2>
            <p className="text-white/70 leading-relaxed">
              Vivere ogni giorno per Cristo, non solo con parole, ma con scelte reali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">02</p>
            <h2 className="text-2xl font-black uppercase mb-4">DISCIPLINA</h2>
            <p className="text-white/70 leading-relaxed">
              Allenarmi seriamente, crescere come fighter e restare fedele alla chiamata.
            </p>
          </div>

          <div className="rounded-3xl bg-white text-black p-8">
            <p className="text-black/40 uppercase tracking-[0.25em] text-xs mb-4">03</p>
            <h2 className="text-2xl font-black uppercase mb-4">IMPATTO</h2>
            <p className="text-black/70 leading-relaxed">
              Influenzare le persone attraverso una vita trasformata, non un’immagine costruita.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 p-8 md:p-10 bg-white/[0.03]">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
            PERCHÉ L’MMA
          </h2>

          <div className="space-y-3 text-white/70 text-lg leading-relaxed">
            <p>
              Dopo aver incontrato Dio, ho pregato molto per capire se questo percorso
              fosse davvero la Sua volontà per la mia vita.
            </p>
            <p>
              Per un periodo mi sono fermato dalle gare. Continuavo ad allenarmi,
              ma cercavo direzione, pregando e mettendo tutto davanti al Signore.
            </p>
            <p>
              Col tempo ho compreso che proprio questo era il campo in cui Dio voleva
              usare la mia vita.
            </p>
            <p>
              Il mondo degli sport da combattimento è pieno di emozioni forti,
              pressione, ego e identità costruite su cose esterne.
            </p>
            <p>
              Io stesso per anni ho idolatrato questo sport. Oggi invece voglio viverlo
              in modo diverso: non per gloria personale, ma per testimoniare Cristo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
            LA VERA FORZA VIENE DA CHI SEI IN CRISTO.
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Voglio dimostrare che si può combattere senza perdere sé stessi,
            essere disciplinati senza essere schiavi dell’ego, e vivere lo sport
            come una missione.
          </p>
        </div>
      </section>
    </main>
  );
}
