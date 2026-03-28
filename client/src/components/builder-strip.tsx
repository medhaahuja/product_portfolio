import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "AI Blog Studio",
    description: "Generate structured blog posts with AI — topic to full draft in seconds. Built with GPT-4 and a custom prompt pipeline.",
    url: "https://ai-blog-generator-medha.vercel.app/",
    tags: ["AI", "GPT-4", "React"],
  },
  {
    name: "Kudos Challenge",
    description: "Daily habits tracker with streak tracking and a kudos system to keep motivation high. Shipped solo, live users.",
    url: "https://medhaahuja.github.io/kudos-challenge/",
    tags: ["Habit tracking", "Gamification", "Vanilla JS"],
  },
];

export default function BuilderStrip() {
  return (
    <section className="py-20 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">

          {/* Left label */}
          <div className="lg:w-1/3 flex-shrink-0">
            <p className="text-xs font-medium tracking-[0.1em] uppercase text-purple mb-3">
              Side Projects
            </p>
            <h2 className="text-2xl font-semibold text-white leading-snug" style={{ letterSpacing: "-0.02em" }}>
              I don't just spec it —<br />I ship it.
            </h2>
            <p className="text-sm text-gray-500 mt-3 leading-6">
              Personal AI products built and deployed. Proof that product sense and builder instinct live in the same person.
            </p>
          </div>

          {/* Right cards */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface border border-white/5 hover:border-purple/30 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-amber border border-amber/20 bg-amber/5 px-2 py-0.5 rounded-full">
                      Live
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-gray-600 group-hover:text-purple transition-colors"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-500 leading-6">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-600 border border-white/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
