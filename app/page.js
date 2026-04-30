export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
          SELECT LANGUAGE
        </p>

        <h1 className="text-3xl md:text-5xl font-black uppercase mb-12">
          SCEGLI LA LINGUA
        </h1>

        <div className="grid grid-cols-2 gap-4">

          <a href="/it" className="border border-white/20 p-4 rounded-xl hover:bg-white hover:text-black transition">
            🇮🇹 Italiano
          </a>

          <a href="/en" className="border border-white/20 p-4 rounded-xl hover:bg-white hover:text-black transition">
            🇬🇧 English
          </a>

          <a href="/fr" className="border border-white/20 p-4 rounded-xl hover:bg-white hover:text-black transition">
            🇫🇷 Français
          </a>

          <a href="/de" className="border border-white/20 p-4 rounded-xl hover:bg-white hover:text-black transition">
            🇩🇪 Deutsch
          </a>

          <a href="/zh" className="border border-white/20 p-4 rounded-xl hover:bg-white hover:text-black transition">
            🇨🇳 中文
          </a>

          <a href="/ja" className="border border-white/20 p-4 rounded-xl hover:bg-white hover:text-black transition">
            🇯🇵 日本語
          </a>

          <a href="/pt" className="border border-white/20 p-4 rounded-xl hover:bg-white hover:text-black transition col-span-2">
            🇵🇹 Português
          </a>

        </div>

      </div>

    </main>
  );
}
