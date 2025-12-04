import { BookOpen } from "lucide-react";
import { PUBLICATIONS } from "@/lib/data";

export function PublicationsSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <BookOpen className="h-5 w-5 text-slate-900" />
        <h3 className="text-lg font-semibold text-slate-900">Publications</h3>
      </div>

      <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-600">
        {PUBLICATIONS.map((pub, index) => (
          <li key={index}>
            <span>
              {pub.authors.map((author, i) => {
                const isMe = author.toLowerCase().includes("tang");
                return (
                  <span key={i}>
                    {isMe ? (
                      <span className="font-medium text-slate-900">
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
            .{" "}
            <a
              href={pub.link}
              className="hover:underline text-slate-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              &quot;{pub.title}&quot;
            </a>{" "}
            <i>{pub.venue}</i>, {pub.year}.
          </li>
        ))}
      </ul>
    </section>
  );
}
