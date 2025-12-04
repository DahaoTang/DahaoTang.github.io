import { ProfileSidebar } from "@/components/profile-sidebar";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";

export default function Home() {
  return (
    <section className="min-h-[80vh] py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 w-full">
        {/* --- LEFT COLUMN --- */}
        <ProfileSidebar />

        {/* --- RIGHT COLUMN --- */}
        <div className="md:col-span-8 flex flex-col gap-10">
          {/* Bio Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              About Me
            </h3>
            <p className="text-foreground/80 leading-relaxed text-base md:text-md">
              I believe biology holds the blueprint for Artificial General
              Intelligence (AGI). My work bridges two worlds: I use AI to solve
              biological problems, and I use biological insights to build
              smarter AI. Currently, I am a graduate researcher at the
              University of Sydney, working under the supervision of{" "}
              <a
                href="https://www.sydney.edu.au/science/about/our-people/academic-staff/david-james.html"
                className="hover:underline hover:text-slate-900"
              >
                Prof. David James
              </a>{" "}
              and{" "}
              <a
                href="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/jinman-kim.html"
                className="hover:underline hover:text-slate-900"
              >
                Prof. Jinman Kim
              </a>
              .
            </p>
          </div>

          <ExperienceSection />
          <PublicationsSection />
          <ProjectsSection />
        </div>
      </div>
    </section>
  );
}
