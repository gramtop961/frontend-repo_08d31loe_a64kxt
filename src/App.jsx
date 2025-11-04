import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aarmade from './components/Aarmade';
import LinksAndContact from './components/LinksAndContact';
import { ChevronUp } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [openAarmade, setOpenAarmade] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="bg-[linear-gradient(135deg,#0f0c29,#302b63,#24243e)]">
        <Navbar
          onToggleTheme={toggleTheme}
          theme={theme}
          onGoToAarmade={() => setOpenAarmade(true)}
        />

        <main className="pt-10 pb-24">
          <Hero onToggleAarmade={() => setOpenAarmade((v) => !v)} />
          <Aarmade open={openAarmade} />
          <LinksAndContact />
        </main>
      </div>

      {showTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 transition"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
