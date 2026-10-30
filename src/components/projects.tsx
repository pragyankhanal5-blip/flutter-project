import { IconBrandGithub as Github } from "@tabler/icons-react";
import Link from "next/link";

const projects = [
  {
    name: "MY-PORTFOLIO",
    description: "Pragyan Khanal's portfolio website is a modern, single-page platform showcasing expertise in web engineering, UI/UX design, and intelligent workflow automation.",
    url: "https://github.com/pragyankhanal5-blip/MY-PORTFOLIO",
    language: "HTML",
  },
  {
    name: "frontend-collaboration-project",
    description: "Project to create login sign up page to learn using git and github for collabrative work.",
    url: "https://github.com/pragyankhanal5-blip/frontend-collaboration-project",
    language: "N/A",
  },
  {
    name: "aura-project",
    description: "Personal aura project showcasing some functionality.",
    url: "https://github.com/pragyankhanal5-blip/aura-project",
    language: "HTML",
  },
  {
    name: "flutter-project",
    description: "A flutter project for mobile application development.",
    url: "https://github.com/pragyankhanal5-blip/flutter-project",
    language: "Flutter",
  },
  {
    name: "Nature-project",
    description: "Nature related project to display some content.",
    url: "https://github.com/pragyankhanal5-blip/Nature-project",
    language: "CSS",
  }
];

export function Projects() {
  return (
    <section id="projects" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto px-4 md:px-8">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          Featured Projects
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Here are some of the open-source projects I&apos;ve worked on. You can find more on my GitHub profile.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative overflow-hidden rounded-lg border bg-background p-2 flex flex-col"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description || "No description provided."}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-xs text-muted-foreground font-medium">
                    {project.language || "Other"}
                  </span>
                </div>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub Repo</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
