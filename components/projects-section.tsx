import Link from "next/link";
import { Code } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b pb-2">
        <Code className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Selected Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 bg-card/50 hover:bg-card transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">{project.title}</h4>
                <Link
                  href={project.link}
                  className="text-xs text-primary hover:underline"
                >
                  View ↗
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-secondary px-2 py-1 rounded text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
