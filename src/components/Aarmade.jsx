import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const games = [
  {
    title: 'Friend Edition',
    desc: 'Lighthearted prompts to spark fun with your friends.',
    href: '/friend.html',
  },
  {
    title: 'Relationship Edition',
    desc: 'Dive deeper with meaningful Truth or Dare moments.',
    href: '/relationship.html',
  },
  {
    title: 'Couple Edition',
    desc: 'Cute, spicy, and playful — for couples only.',
    href: '/couple.html',
  },
  {
    title: 'Self Edition',
    desc: 'Reflect and challenge yourself with solo prompts.',
    href: '/self.html',
  },
];

export default function Aarmade({ open }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.maxHeight = open ? `${el.scrollHeight}px` : '0px';
  }, [open]);

  return (
    <section id="aarmade" className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 mt-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Aarmade</h2>
          <p className="mt-2 text-white/60">Truth or Dare collections — elegant and playful.</p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-500 overflow-hidden ${open ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition"
              >
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-1 text-sm text-white/70">{g.desc}</p>
                <a
                  href={g.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-300/40 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"
                >
                  Play Game <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
