import Link from "next/link";
import { IconBrandGithub as Github } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-16 md:pb-12 md:pt-24 lg:pb-32 lg:pt-32" id="about">
      <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center px-4 md:px-8 mx-auto">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Hi, I&apos;m Pragyan Khanal
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A passionate developer showcasing expertise in web engineering, UI/UX design, and intelligent workflow automation. Check out my work below!
        </p>
        <div className="flex gap-4">
          <Link
            href="#projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
          >
            View Projects
          </Link>
          <Link
            href="https://github.com/pragyankhanal5-blip"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
