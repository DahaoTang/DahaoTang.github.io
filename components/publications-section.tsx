import { BookOpen } from "lucide-react";
import { PUBLICATIONS, PROFILE } from "@/lib/data";

export function PublicationsSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b pb-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Selected Publications</h3>
      </div>

      <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-foreground/80">
        {PUBLICATIONS.map((pub, index) => (
          <li key={index}>
            <span>
              {pub.authors.map((author, i) => {
                // Check if the author is the profile owner (case insensitive partial match)
                const isMe = author.toLowerCase().includes("tang");
                return (
                  <span key={i}>
                    {isMe ? (
                      <span className="font-medium text-foreground">
                        {author}
                      </span>
                    ) : (
                      author
                    )}
                    {i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </span>
            . &quot;{pub.title}&quot; <i>{pub.venue}</i>, {pub.year}.
          </li>
        ))}
      </ul>
    </section>
  );
}
