export default function HomeEN() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
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

        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-6">
            FAITH • MISSION • MMA
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95]">
            THE MISSION CHRIST GAVE ME
          </h1>

          <p className="mt-6 text-white/70 uppercase tracking-[0.25em]">
            THIS IS NOT JUST SPORT. IT IS A CALLING.
          </p>

          <p className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From inner battles to a life fully dedicated to God. MMA is the field
            where I live this calling every day.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/en/story"
              className="rounded-full bg-white text-black px-8 py-4 font-bold uppercase hover:scale-105 transition"
            >
              READ MY STORY
            </a>

            <a
              href="/en/support"
              className="rounded-full border border-white/40 px-8 py-4 font-bold uppercase hover:bg-white hover:text-black transition"
            >
              SUPPORT THE MISSION
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-28 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-5">
            WATCH
          </p>

          <h2 className="text-3xl md:text-6xl font-black uppercase mb-6">
            MY MISSION
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            This is what I am living today. A real journey made of faith,
            training and daily choices.
          </p>

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MeAqloRdVdU"
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <a href="/en/story" className="border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition">
            <h2 className="text-2xl font-bold uppercase mb-4">My Story</h2>
            <p className="text-white/70">My real transformation.</p>
          </a>

          <a href="/en/mission" className="border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition">
            <h2 className="text-2xl font-bold uppercase mb-4">Mission</h2>
            <p className="text-white/70">The calling I live every day.</p>
          </a>

          <a href="/en/support" className="border border-white/20 p-8 rounded-2xl hover:bg-white/10 transition">
            <h2 className="text-2xl font-bold uppercase mb-4">Support</h2>
            <p className="text-white/70">Be part of this journey.</p>
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            A LIFE SURRENDERED TO GOD CHANGES EVERYTHING
          </h2>

          <p className="text-white/80 text-lg">
            This is not just a website. It is a real journey.
          </p>
        </div>
      </section>
    </main>
  );
}
