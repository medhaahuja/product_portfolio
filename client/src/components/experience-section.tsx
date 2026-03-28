const experiences = [
  {
    duration: "Feb 2023 – Present",
    title: "Product Manager",
    company: "Graphy by Unacademy",
    location: "Bengaluru",
    bullets: [
      "Built AI Avatars with agentic tool-use, reducing learner support queries by 60% and driving 25% free-to-paid conversion",
      "Launched self-serve onboarding flow — 30% signup-to-activation lift, adopted by 500+ creators",
      "Integrated community module: 18% MRR increase, 2.5x daily active sessions",
    ],
    chips: ["60% support reduction", "30% activation lift", "18% MRR↑"],
  },
  {
    duration: "May 2022 – Feb 2023",
    title: "Associate Product Manager",
    company: "Infinity Learn",
    location: "Hyderabad",
    bullets: [
      "Launched SCORE scholarship test — ₹10M+ revenue, 10 lakh+ users engaged",
      "Revamped test UX: 20% higher participation, 35% fewer drop-offs",
      "Implemented OpenSearch: 26% CTR on long-tail content, 3x content discovery boost",
    ],
    chips: ["₹10M+ revenue", "+20% participation", "26% CTR"],
  },
  {
    duration: "Jan 2022 – May 2022",
    title: "Product Trainee, CEO's Office",
    company: "Infinity Learn",
    location: "Hyderabad",
    bullets: [
      "Built cross-functional analytics dashboard — cut leadership reporting time by 40%",
      "Integrated Amplitude, uncovering top 3 drop-off points in core user flows",
    ],
    chips: ["40% reporting time saved"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs font-medium tracking-[0.1em] uppercase text-purple mb-4">
          Career
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-14" style={{ letterSpacing: "-0.02em" }}>
          How I got here.
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-0 w-px bg-white/10"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12">
                {/* Node */}
                <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full border border-purple bg-[#0A0A0A] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple"></div>
                </div>

                <p className="text-xs text-gray-500 mb-2">{exp.duration}</p>
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <p className="text-sm text-purple/80 mb-4">{exp.company} · {exp.location}</p>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-400 leading-6 flex gap-2">
                      <span className="text-white/20 flex-shrink-0 mt-1">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-xs text-purple border border-purple/20 bg-purple/10 px-2 py-0.5 rounded"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
