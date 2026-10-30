import Link from "next/link";
import { IconBrandGithub as Github } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/pragyankhanal5-blip"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Pragyan Khanal
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/pragyankhanal5-blip"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/pragyankhanal5-blip"
            target="_blank"
            rel="noreferrer"
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-0 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
