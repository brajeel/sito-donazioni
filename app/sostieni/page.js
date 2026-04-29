export default function SostieniPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
          SOSTIENI
        </p>

        <h1 className="text-4xl md:text-6xl font-black uppercase mb-8">
          SOSTIENI QUESTO PERCORSO
        </h1>

        <p className="text-white/75 text-lg leading-relaxed mb-10">
          Sto vivendo un percorso reale fatto di fede, allenamento e missione.
          Questo spazio nasce per dare la possibilita a chi lo sente nel cuore
          di sostenere questa chiamata.
        </p>

        <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03] mb-8">
          <h2 className="text-2xl font-black uppercase mb-4">
            COSA STAI SOSTENENDO
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Stai sostenendo allenamenti, spostamenti, viaggi, contenuti e il
            percorso che sto vivendo come missione davanti a Dio.
          </p>
        </div>

        <div className="rounded-3xl bg-white text-black p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-black/50 mb-4">
            DONAZIONE LIBERA
          </p>

          <p className="text-sm uppercase text-black/60 mb-2">
            INTESTATARIO
          </p>

          <p className="text-2xl font-bold uppercase mb-6">
            DAVID DA SILVA
          </p>

          <p className="text-sm uppercase text-black/60 mb-2">
            IBAN
          </p>

          <p className="font-mono text-lg break-all">
            IT56Y0306920103100000015628
          </p>
        </div>

        <p className="text-white/60 text-center mt-10">
          Grazie davvero a chi scegliera di sostenere questo percorso.
        </p>
      </section>
    </main>
  );
}
