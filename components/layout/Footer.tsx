import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
export function Footer() {
  return (
    <footer className="border-border bg-accent/70 border-t">
      <div className="text-foreground/70 mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Phuc Tran. Open to junior/entry-level frontend roles.</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/hphuc112"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/tranhoangphucttb/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
