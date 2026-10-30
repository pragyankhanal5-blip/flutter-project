import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold sm:inline-block">Pragyan Khanal</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
          <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
