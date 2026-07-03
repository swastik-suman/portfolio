import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-text-dim tracking-wide">
          © {year} {profile.name}
        </p>
        <p className="font-mono text-[11px] text-text-dim tracking-wide">
          Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
        </p>
        <div className="flex items-center gap-4 font-mono text-[11px] tracking-widest">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-active transition-colors"
          >
            GITHUB
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-active transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text-dim hover:text-active transition-colors"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
