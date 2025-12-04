import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  GoogleScholarIcon,
  LinkedinIcon,
} from "@/components/custom-icons";
import { PROFILE, EDUCATION } from "@/lib/data";

export function ProfileSidebar() {
  return (
    <div className="md:col-span-4 flex flex-col gap-6">
      {/* 1. Photo */}
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl shadow-sm bg-muted">
        <Image
          src={PROFILE.image}
          alt={PROFILE.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Name & Contact */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {PROFILE.name}
          </h1>
          <h2 className="pt-2 text-lg text-muted-foreground font-medium">
            {PROFILE.title}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${PROFILE.email}`}
                className="hover:text-primary transition-colors break-all"
              >
                {PROFILE.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Button variant="outline" size="icon" className="h-8 w-8" asChild>
              <Link
                href={PROFILE.social.github}
                target="_blank"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" asChild>
              <Link
                href={PROFILE.social.linkedin}
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" asChild>
              <Link
                href={PROFILE.social.googleScholar}
                target="_blank"
                aria-label="GoogleScholar"
              >
                <GoogleScholarIcon className="h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="icon" className="w-15" asChild>
              <a
                href={PROFILE.cvLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Download CV"
                title="Download CV"
                download
              >
                <FileText className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* 3. Education */}
      <div className="flex flex-col gap-3 pt-4 border-t">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Education</h3>
        </div>

        <div className="flex flex-col gap-4">
          {EDUCATION.map((edu, index) => (
            <div key={index}>
              <div className="text-sm font-medium text-foreground">
                {edu.degree}
              </div>
              <div className="text-xs text-muted-foreground">{edu.school}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
