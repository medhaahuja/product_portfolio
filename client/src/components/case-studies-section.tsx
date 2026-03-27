import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

const otherWork = [
  { title: "B2C Quick Commerce Strategy", href: "#" },
  { title: "Improve Canva Onboarding", href: "#" },
  { title: "Account Aggregator Insights", href: "#" },
  { title: "PRD: Co-working Space App", href: "#" },
  { title: "Splitwise Product Teardown", href: "#" },
  { title: "Increase Blinkit's AOV", href: "#" },
];

export default function CaseStudiesSection() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <p className="text-xs font-medium tracking-[0.1em] uppercase text-purple mb-4">
          Selected Work
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-14" style={{ letterSpacing: "-0.02em" }}>
          Problems worth studying.
        </h2>

        <div className="space-y-6">
          {/* CS1 — AI Website Builder */}
          <div className="bg-surface border border-white/5 rounded-xl overflow-hidden border-l-4 border-l-primary">
            <div className="flex flex-col lg:flex-row">
              {/* Left panel */}
              <div className="lg:w-2/5 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                <div>
                  <p className="text-xs text-purple/60 font-medium mb-2">Graphy (Unacademy) · 2024</p>
                  <h3 className="text-xl font-semibold text-white mb-6 leading-snug">
                    AI Website Builder
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-amber flex-shrink-0" />
                      <div>
                        <span className="text-2xl font-bold text-amber">24h</span>
                        <span className="text-xs text-gray-500 ml-2">avg. publish time (was 3–4 days)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp size={14} className="text-amber flex-shrink-0" />
                      <div>
                        <span className="text-2xl font-bold text-amber">+28%</span>
                        <span className="text-xs text-gray-500 ml-2">onboarded-to-published rate</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={14} className="text-amber flex-shrink-0" />
                      <div>
                        <span className="text-2xl font-bold text-amber">0</span>
                        <span className="text-xs text-gray-500 ml-2">developers required</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/case-studies/ai-website-builder"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 border border-white/10 px-4 py-2 rounded-lg hover:border-primary hover:text-white transition-all duration-200"
                  >
                    Read case study
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right panel */}
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <p className="text-sm font-medium text-gray-300 mb-3">The problem</p>
                <p className="text-gray-400 leading-7 mb-6">
                  Graphy serves creators in both the US and India — and the website builder was failing both, for different reasons. US creators churned before publishing because auto-generated sites felt generic. India creators needed 3–4 days per website change because every edit required a developer. The product was supposed to help creators start selling. Instead, it was creating a bottleneck before they could.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["0→1 Product", "Multi-agent AI", "B2C", "Edtech"].map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 border border-white/5 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder — CS2 */}
          <div className="bg-surface border border-white/5 rounded-xl overflow-hidden border-l-4 border-l-white/10">
            <div className="p-8 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 font-medium mb-2">Coming soon</p>
                <h3 className="text-lg font-semibold text-gray-600">Next case study</h3>
              </div>
              <span className="text-xs text-gray-700 border border-white/5 px-3 py-1 rounded-full">In progress</span>
            </div>
          </div>
        </div>

        {/* Other work */}
        <div className="mt-14">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 mb-6">
            Other work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherWork.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center justify-between text-sm text-gray-500 hover:text-gray-300 py-2 border-b border-white/5 transition-colors group"
              >
                <span>{item.title}</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
