import { Code, ArrowUpRight } from "lucide-react"; // Added ArrowUpRight
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <Code className="h-5 w-5 text-slate-900" />
        <h3 className="text-lg font-semibold text-slate-900">Projects</h3>
      </div>

      {/* Compressed List */}
      <div className="flex flex-col gap-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative pl-3 border-l-2 border-slate-100 hover:border-slate-400 transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <h4 className="font-medium text-slate-900 text-md">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline transition-colors inline-flex items-center gap-1"
                >
                  {project.title}
                  <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100" />
                </a>
              </h4>
              <span className="text-sm text-muted-foreground  whitespace-nowrap">
                {project.period}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-snug mt-0.5">
              {project.description}{" "}
              <span className="text-xs text-slate-400 font-mono mt-1 block sm:inline sm:mt-0">
                {/* Formatting tags as a clean string */}
                {`{ ${project.tags.join(" · ")} }`}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
