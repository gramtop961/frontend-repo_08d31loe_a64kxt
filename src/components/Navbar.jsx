import { useEffect, useState } from 'react';
import { Home, Link as LinkIcon, Gamepad2, Mail, Sun, Moon } from 'lucide-react';

export default function Navbar({ onToggleTheme, theme, onGoToAarmade }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBase =
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl';
  const navStyle = scrolled
    ? 'bg-black/50 dark:bg-black/40 shadow-lg'
    : 'bg-white/10 dark:bg-black/30';

  const linkCls =
    'px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors';

  return (
    <nav className={`${navBase} ${navStyle}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 shadow-md" />
            <span className="text-white/95 font-semibold tracking-wide">Alfi's Space</span>
          </a>

          <div className="flex items-center gap-1">
            <a href="#home" className={linkCls}>
              <Home className="h-4 w-4 inline mr-1" /> Home
            </a>
            <a href="#links" className={linkCls}>
              <LinkIcon className="h-4 w-4 inline mr-1" /> Links
            </a>
            <button
              className={`${linkCls} inline-flex items-center`}
              onClick={(e) => {
                e.preventDefault();
                onGoToAarmade?.();
                const el = document.getElementById('aarmade');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <Gamepad2 className="h-4 w-4 mr-1" /> Aarmade
            </button>
            <a href="#contact" className={linkCls}>
              <Mail className="h-4 w-4 inline mr-1" /> Contact
            </a>

            <button
              aria-label="Toggle theme"
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
