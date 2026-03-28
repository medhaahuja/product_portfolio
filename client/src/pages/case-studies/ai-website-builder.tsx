import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AiWebsiteBuilder() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-inter">
      <div className="max-w-2xl mx-auto px-7 pb-24">

        {/* Back nav */}
        <div className="py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
        </div>

        {/* Hero */}
        <section className="pt-8 pb-16 border-b border-white/5">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-purple mb-7">
            Product Case Study
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8" style={{ letterSpacing: "-0.02em" }}>
            AI Website Builder —<br />
            <span className="text-gray-400 font-normal">from 4 days to 24 hours</span>
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              { label: "Company", value: "Graphy (Unacademy)" },
              { label: "Role", value: "Product Manager" },
              { label: "Markets", value: "India + United States" },
              { label: "Type", value: "0 → 1 AI product" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-xs font-medium tracking-widest uppercase text-gray-600 mb-1">{m.label}</p>
                <p className="text-sm text-gray-400">{m.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stat bar */}
        <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden my-14">
          {[
            { number: "24h", label: "Average time to publish — down from 3–4 days" },
            { number: "+28%", label: "Improvement in onboarded-to-published rate" },
            { number: "0", label: "Developers required to build or edit a website" },
          ].map((s, i) => (
            <div key={i} className="bg-surface px-6 py-7 flex flex-col gap-2">
              <span className="text-3xl font-extrabold text-amber">{s.number}</span>
              <span className="text-xs text-gray-500 leading-5">{s.label}</span>
            </div>
          ))}
        </div>

        {/* 01 Problem */}
        <section className="py-14 border-b border-white/5">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 mb-3">01 — Problem</p>
          <h2 className="text-2xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
            Two markets, two different problems
          </h2>
          <p className="text-gray-400 leading-7 mb-8">
            Graphy serves creators in both the US and India — but the website builder was failing both segments, for entirely different reasons.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                segment: "US Creators",
                text: "Creators churned shortly after sign-up. The auto-generated website didn't reflect their brand or look professional enough to share. The first impression of their 'business' on Graphy was underwhelming — and they left before ever publishing.",
              },
              {
                segment: "India Creators",
                text: "The old builder offered templates and drag-and-drop editing — but meaningful customisation required a designer or developer. Website changes took 3 to 4 days. Creators were dependent on external resources for every update.",
              },
            ].map((c) => (
              <div key={c.segment} className="bg-surface border border-white/5 rounded-xl p-6">
                <p className="text-xs font-medium tracking-widest uppercase text-purple mb-3">{c.segment}</p>
                <p className="text-sm text-gray-400 leading-6">{c.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-amber pl-6">
            <p className="text-xl text-white leading-relaxed italic font-light">
              "Creators think in terms of 'start selling' — not 'set up a platform.' Every day spent on the website is a day not spent on their course."
            </p>
          </blockquote>
        </section>

        {/* 02 Solution */}
        <section className="py-14 border-b border-white/5">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 mb-3">02 — Solution</p>
          <h2 className="text-2xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
            A personalised website, generated in minutes
          </h2>
          <p className="text-gray-400 leading-7 mb-8">
            We redesigned the entire website creation experience around a single insight: the creator already has a brand — it lives in their social content. Our job was to surface it, not ask them to recreate it.
          </p>

          <div className="bg-surface-raised rounded-xl p-8">
            <p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 mb-6">How it works</p>
            <div className="relative flex flex-col gap-0">
              {[
                {
                  n: "1",
                  title: "Social data scraping",
                  desc: "During onboarding, creators share their social handles. We fetch their top posts and extract brand signals — tone, topics, content themes.",
                },
                {
                  n: "2",
                  title: "Vibe selection",
                  desc: "Creators choose a visual direction (Playful, Professional, Minimal, Creative), pre-mapped to their industry. This determines which section templates are eligible for their site.",
                },
                {
                  n: "3",
                  title: "Automated generation via stitching",
                  desc: "A background job assembles the homepage by stitching pre-built HTML section templates. An LLM fills static copy placeholders using scraped content; dynamic variables (course titles, pricing) are injected from the backend.",
                },
                {
                  n: "4",
                  title: "Chat-based editing",
                  desc: "Creators land in a chat-first editor. They type natural language instructions — 'make the tone more formal', 'add a pricing section' — and a multi-agent system handles the rest.",
                },
              ].map((step, i, arr) => (
                <div key={step.n} className="flex gap-4 relative">
                  {i < arr.length - 1 && (
                    <div className="absolute left-[14px] top-8 bottom-0 w-px bg-white/10"></div>
                  )}
                  <div className="w-7 h-7 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                    <span className="text-xs font-medium text-purple">{step.n}</span>
                  </div>
                  <div className="pb-8 flex-1">
                    <p className="text-sm font-medium text-gray-200 mb-1">{step.title}</p>
                    <p className="text-sm text-gray-500 leading-6">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 Architecture */}
        <section className="py-14 border-b border-white/5">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 mb-3">03 — Architecture</p>
          <h2 className="text-2xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
            Multi-agent system under the hood
          </h2>
          <p className="text-gray-400 leading-7 mb-8">
            The editor is powered by a coordinator-router pattern with three specialised sub-agents. Each agent has a single responsibility and operates on structured JSON patches — never raw HTML rewrites.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                name: "Coordinator agent",
                role: "Reads user intent, routes to exactly one sub-agent per turn. Never claims task completion without a confirmed tool call.",
                primary: true,
              },
              {
                name: "Editor agent",
                role: "Handles in-place edits — text, images, spacing, styles. Returns structured patches applied by the DOM layer.",
              },
              {
                name: "Section builder agent",
                role: "Adds new sections — either from the pre-built template library or generated from scratch for custom requests.",
              },
              {
                name: "Reorder agent",
                role: "Handles section ordering changes. Returns a new ordered list of section IDs; the DOM layer applies the reorder.",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className={`bg-surface border rounded-xl p-5 relative overflow-hidden ${agent.primary ? "border-purple/30" : "border-white/5"}`}
              >
                {agent.primary && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-purple"></div>
                )}
                <p className="text-sm font-medium text-white mb-2">{agent.name}</p>
                <p className="text-xs text-gray-500 leading-5">{agent.role}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-400 leading-7 mt-8">
            A key architectural decision was section-level granularity over full-page generation — this keeps LLM token costs low, enables surgical edits, and cleanly separates static (LLM-managed) and dynamic (backend-managed) content within each page.
          </p>
        </section>

        {/* 04 Impact */}
        <section className="py-14 border-b border-white/5">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 mb-3">04 — Impact</p>
          <h2 className="text-2xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
            Before and after
          </h2>
          <p className="text-gray-400 leading-7 mb-8">
            The shift wasn't incremental. For Indian creators, it removed the dependency on design resources entirely. For US creators, it closed the gap between signing up and having a site they'd actually share.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            <div className="bg-surface p-7">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-600 mb-5">Before</p>
              {[
                "3–4 days to set up a website",
                "Required a dedicated developer or designer",
                "Drag-and-drop with limited flexibility",
                "Generic templates, no personalisation",
                "US creators churning before first publish",
              ].map((item) => (
                <div key={item} className="flex gap-3 mb-3 text-sm text-gray-500 font-light">
                  <span className="text-gray-700 flex-shrink-0">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-purple/5 border-l border-purple/10 p-7">
              <p className="text-xs font-medium tracking-widest uppercase text-purple mb-5">After</p>
              {[
                "Average 24 hours to publish",
                "Zero external resources needed",
                "Natural language editing via chat",
                "Personalised from social content at onboarding",
                "28% improvement in onboarded-to-published rate",
              ].map((item) => (
                <div key={item} className="flex gap-3 mb-3 text-sm text-gray-300">
                  <span className="text-purple flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 Learnings */}
        <section className="py-14">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 mb-3">05 — Learnings</p>
          <h2 className="text-2xl font-semibold text-white mb-8" style={{ letterSpacing: "-0.02em" }}>
            What I'd do differently
          </h2>

          <div className="space-y-8">
            {[
              {
                n: "01",
                lead: "Validate churn root cause more rigorously.",
                body: "We acted on CSM feedback that creators left because the website didn't look good. In hindsight, we should have triangulated against behavioural data — session recordings, publish rates, exit surveys — before committing to the solution direction.",
              },
              {
                n: "02",
                lead: "Design for scale earlier.",
                body: "The template library is manually managed via an internal tool — workable at current size, but not at 10x. A template governance process and quality rubric should have been part of the v1 spec.",
              },
              {
                n: "03",
                lead: "Think about data compliance from day one.",
                body: "The social scraping approach requires careful review of API terms of service and applicable data regulations. This should be a first-class product concern, not an afterthought.",
              },
              {
                n: "04",
                lead: "Prompt engineering is product work.",
                body: "The coordinator's false-completion bug — claiming a task was done without calling a tool — was a product failure, not just an engineering one. Agent behaviour needs the same rigour as any other product surface.",
              },
            ].map((l) => (
              <div key={l.n} className="flex gap-5">
                <span className="text-2xl text-gray-700 font-light flex-shrink-0 w-8 leading-tight">{l.n}</span>
                <p className="text-gray-400 leading-7 text-[15px]">
                  <strong className="text-white font-medium">{l.lead}</strong>{" "}
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="border-t border-white/5 pt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
