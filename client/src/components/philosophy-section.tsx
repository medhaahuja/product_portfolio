import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const principles = [
  {
    number: "01",
    title: "Users don't need features. They need progress.",
    essay:
      "Every feature I've shipped has been a hypothesis about what moves a user forward. At Graphy, redesigning the creator onboarding flow wasn't about adding steps — it was about removing the distance between 'just signed up' and 'first course live.' The 30% lift in signup-to-activation came from understanding what 'done' meant to a creator, not from adding more UI. If a feature doesn't move someone meaningfully closer to their goal, it's noise dressed as product.",
  },
  {
    number: "02",
    title: "AI should disappear into the experience.",
    essay:
      "The best AI feature I've shipped had a 60% reduction in support queries as its headline metric — not 'users engaged with AI.' That's intentional. When we built AI Avatars at Graphy, the measure of success was always: does the learner accomplish what they came to do faster? AI as spectacle — the chatbot you notice — fails that test. AI as infrastructure — the thing that quietly closes the gap between a learner's question and their next lesson — passes it. I design for the second kind.",
  },
  {
    number: "03",
    title: "Revenue is a proxy for value delivered.",
    essay:
      "My economics training taught me to look for the signal the market actually sends back. Revenue is imperfect but honest — it measures whether someone valued your product enough to pay for it. The ₹10M+ SCORE launch at Infinity Learn wasn't a revenue target I hit; it was confirmation that we'd correctly understood what students and parents were willing to pay for. I run both the empathy work and the P&L logic simultaneously, because neither is complete without the other.",
  },
  {
    number: "04",
    title: "The best insight is the one nobody has acted on yet.",
    essay:
      "Amplitude gave us data. The question was always: what is the data telling us that the roadmap hasn't heard yet? Integrating behavioral tracking at Infinity Learn uncovered the top three drop-off points in a flow that had been live for months with no one asking why. Implementing OpenSearch revealed 26% CTR on long-tail content that users wanted but couldn't find. The gap between what analytics shows and what the roadmap prioritizes is where I do my most interesting work.",
  },
];

export default function PhilosophySection() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section id="philosophy" className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs font-medium tracking-[0.1em] uppercase text-purple mb-4">
          How I think about product
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-12" style={{ letterSpacing: "-0.02em" }}>
          The principles I return to.
        </h2>

        <Accordion.Root
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
        >
          {principles.map((p) => (
            <Accordion.Item
              key={p.number}
              value={p.number}
              className="border-b border-white/5"
            >
              <Accordion.Trigger className="w-full flex items-center gap-6 py-6 text-left group">
                <span className="font-mono text-sm text-purple/40 flex-shrink-0 w-8">
                  {p.number}
                </span>
                <span className="flex-1 text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                  {p.title}
                </span>
                <span className="flex-shrink-0 text-gray-500 group-hover:text-gray-300 transition-colors">
                  {openItem === p.number ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="pb-8 pl-14 text-gray-400 leading-7 text-[15px]">
                  {p.essay}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
