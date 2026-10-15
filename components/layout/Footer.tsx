export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        
        <div>
          <p className="text-lg font-semibold text-white">
            Tasnim Ghaleb<span className="text-white/30">.</span>
          </p>
          <p className="mt-1 text-sm text-white/40">
            Data × AI
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/40">
          <a
            href="#work"
            className="transition-colors hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#services"
            className="transition-colors hover:text-white"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-white/30">
          © 2026 Tasnim Ghaleb. All rights reserved.
        </p>

      </div>
    </footer>
  );
}