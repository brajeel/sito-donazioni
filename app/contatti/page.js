export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
          CONTATTI
        </p>

        <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-10">
          SEGUIMI / CONTATTAMI
        </h1>

        <div className="space-y-8">

          <div className="rounded-3xl border border-white/10 p-8 bg-black">
            <div className="space-y-2 text-white/75 leading-relaxed text-lg">
              <p>
                Se vuoi seguire il mio percorso o contattarmi direttamente,
                puoi farlo qui.
              </p>
              <p>
                Questo progetto non è solo mio, ma è qualcosa che può toccare
                anche la vita di altre persone.
              </p>
              <p>
                Se senti nel cuore di scrivermi, farlo con rispetto e verità.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-black">
            <h2 className="text-2xl font-bold uppercase mb-4">
              INSTAGRAM
            </h2>

            <p className="text-white/75 text-lg">
              <a
                href="https://instagram.com/brajeel.films"
                target="_blank"
                rel="noreferrer"
                className="underline text-white hover:opacity-80"
              >
                @BRAJEEEL
              </a>
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-black">
            <h2 className="text-2xl font-bold uppercase mb-4">
              MESSAGGIO FINALE
            </h2>

            <div className="space-y-2 text-white/75 leading-relaxed text-lg">
              <p>
                Grazie a chi sceglierà di seguire questo percorso.
              </p>
              <p>
                Anche solo una preghiera può fare più di quello che immaginiamo.
              </p>
              <p>
                Non sottovalutare mai ciò che Dio può fare attraverso una vita
                completamente arresa a Lui.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}