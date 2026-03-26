export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Sto dedicando la mia vita a Cristo e al campo di missione che Dio mi ha affidato.
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Allenamento, fede e disciplina. Questo è il mio percorso.
        </p>

        <a href="#donazioni" className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Sostieni questa missione
        </a>
      </section>

      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">La mia storia</h2>

        <p className="text-gray-300 leading-relaxed">
          Negli ultimi anni Dio ha acceso dentro di me una visione chiara: non vivere solo per me stesso,
          ma usare la mia vita per portare luce e testimonianza.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          L’MMA per me non è solo uno sport. È disciplina, sacrificio e crescita. È il campo in cui sto imparando
          a vivere con carattere e fede.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          In questo momento sto scegliendo di dedicarmi completamente a questo percorso.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">La mia missione</h2>

        <ul className="space-y-4 text-gray-300">
          <li><strong>Fede</strong> – vivere per Dio ogni giorno</li>
          <li><strong>Allenamento</strong> – crescere come fighter</li>
          <li><strong>Missione</strong> – influenzare gli altri con la mia vita</li>
        </ul>
      </section>

      <section id="donazioni" className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Sostieni questa missione</h2>

        <p className="text-gray-300 mb-8">
          Se senti nel cuore di sostenere questo percorso, puoi farlo con una donazione libera.
          Grazie per ogni supporto.
        </p>

        <div className="bg-white text-black p-6 rounded-2xl">
          <p className="font-semibold">DAVID DA SILVA</p>
          <p className="mt-2 break-all">IT56Y0306920103100000015628</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-gray-400">
          Grazie a chi sceglierà di supportarmi anche solo con una preghiera.
        </p>
      </section>

    </main>
  );
}