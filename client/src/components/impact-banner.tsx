const metrics = [
  { number: "60%", label: "reduction in\nsupport queries" },
  { number: "30%", label: "increase in\nsignup-to-activation" },
  { number: "₹10M+", label: "revenue\ngenerated at scale" },
  { number: "500+", label: "creators\nonboarded" },
];

export default function ImpactBanner() {
  return (
    <section className="bg-surface-raised border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`py-10 px-6 flex flex-col gap-2 ${i < metrics.length - 1 ? "border-r border-white/5" : ""}`}
            >
              <span className="text-4xl lg:text-5xl font-extrabold text-white">
                {m.number}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest leading-5 whitespace-pre-line">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
