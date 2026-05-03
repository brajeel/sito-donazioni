export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-6">

        <img
          src="/david-mobile.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 md:hidden"
        />

        <img
          src="/david.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 hidden md:block"
        />

        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-6">
            FEDE • MISSIONE • MMA
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase">
            LA MISSIONE CHE CRISTO MI HA DATO
          </h1>

          <p className="mt-6 text-white/70 uppercase tracking-[0.25em]">
            NON È SOLO SPORT. È UNA CHIAMATA.
          </p>

          <p className="mt-8 text-lg text-white/90 max-w-3xl mx-auto">
            Dalla lotta interiore a una vita completamente dedicata a Dio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/storia" className="bg-white text-black px-6 py-3 rounded-full font-bold">
              LEGGI LA MIA STORIA
            </a>

            <a href="/sostieni" className="border border-white px-6 py-3 rounded-full">
              SOSTIENI
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
