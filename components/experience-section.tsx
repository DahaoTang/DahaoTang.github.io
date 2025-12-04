import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b pb-2">
        <Briefcase className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Experience</h3>
      </div>

      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((job, index) => (
          <div
            key={index}
            className="relative border-l-2 border-muted pl-4 ml-2"
          >
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-muted" />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h4 className="font-medium text-foreground">{job.role}</h4>
              <span className="text-sm text-muted-foreground">
                {job.period}
              </span>
            </div>
            <div className="text-sm text-primary font-medium mb-2">
              {job.company}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
