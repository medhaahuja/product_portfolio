import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText("medha.ahuja7@gmail.com").then(() => {
      toast({
        title: "Copied",
        description: "Email address copied to clipboard.",
      });
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.1em] uppercase text-purple mb-4">
          Contact
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
          Let's talk product.
        </h2>
        <p className="text-gray-400 leading-7 mb-10">
          Open to PM roles at FAANG, growth-stage startups, and AI-first companies.<br />
          I reply within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 border border-white/10 text-gray-300 px-6 py-3 rounded-lg text-sm hover:border-primary hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            medha.ahuja7@gmail.com
          </button>
          <a
            href="https://linkedin.com/in/medha-ahuja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
          Currently open to opportunities — Bengaluru-based, open to remote
        </div>
      </div>
    </section>
  );
}
