import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="text-sm">
          <span className="font-extrabold tracking-tight text-foreground">
            Pacheco<span className="text-primary">Tech</span>
          </span>
          <span className="ml-2 text-muted-foreground">
            © {new Date().getFullYear()} — Páginas com estratégia.
          </span>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-foreground/80 hover:text-primary"
        >
          @{INSTAGRAM_HANDLE}
        </a>
      </div>
    </footer>
  );
}
