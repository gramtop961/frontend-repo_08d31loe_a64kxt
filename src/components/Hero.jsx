import Spline from '@splinetool/react-spline';
import { ExternalLink, Gamepad2, Link as LinkIcon, Globe } from 'lucide-react';

export default function Hero({ onToggleAarmade }) {
  return (
    <section id="home" className="relative pt-20 md:pt-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-fuchsia-900/40" />
        <div className="h-[380px] md:h-[460px]">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        <div className="mt-64 md:mt-72 text-center">
          <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=512&auto=format&fit=crop"
              alt="Alfi avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Alfi Ramadhan
          </h1>
          <p className="mt-2 text-white/70">Elegant maker. Building calm, premium digital experiences.</p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <a
              href="https://alfialiframadhan.my.id"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/40 bg-white/5 px-4 py-3 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.2)] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition"
            >
              <Globe className="h-4 w-4" /> My Website <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
            </a>

            <button
              onClick={onToggleAarmade}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/50 bg-white/5 px-4 py-3 text-white shadow-[0_0_0_1px_rgba(245,197,24,0.25)] hover:shadow-[0_0_20px_rgba(245,197,24,0.35)] transition"
            >
              <Gamepad2 className="h-4 w-4" /> Aarmade
            </button>

            <a
              href="https://example.com/course"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300/40 bg-white/5 px-4 py-3 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.2)] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition"
            >
              <LinkIcon className="h-4 w-4" /> Online Course
            </a>

            <a
              href="https://example.com/lynk"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300/40 bg-white/5 px-4 py-3 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.2)] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition"
            >
              <LinkIcon className="h-4 w-4" /> My Lynk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
