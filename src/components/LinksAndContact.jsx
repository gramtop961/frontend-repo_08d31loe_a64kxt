import { useState } from 'react';
import { ExternalLink, Copy, Mail } from 'lucide-react';

const links = [
  { label: 'Instagram', href: 'https://instagram.com/yourname' },
  { label: 'Notion', href: 'https://notion.so' },
  { label: 'WhatsApp', href: 'https://wa.me/6281234567890' },
  { label: 'GitHub', href: 'https://github.com/yourname' },
];

export default function LinksAndContact() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@alfialiframadhan.my.id';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <section id="links" className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center lg:text-left">Links & Info</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-xl hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{l.label}</span>
                    <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div id="contact" className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur-xl">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-1 text-white/70">Feel free to reach out anytime.</p>

            <div className="mt-4 rounded-xl bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-violet-300/40 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"
              >
                <Copy className="h-3.5 w-3.5" /> {copied ? 'Copied!' : 'Copy email'}
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-white/60">Made with 💜 by Alfi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
