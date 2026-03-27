import { motion } from "framer-motion";
import medhaImage from "@assets/medha_image_1753962130215.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 gradient-radial-hero pointer-events-none"></div>
      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 w-full">

          {/* Text */}
          <div className="flex-1 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-medium tracking-[0.1em] uppercase text-purple"
            >
              Product Manager, Bengaluru
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              I build AI products<br />that earn their keep.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              Three years shipping in edtech — from agentic AI features to
              national-scale launches. I measure my work in activations,
              revenue, and support tickets closed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('work')}
                className="bg-primary text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                See my work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-white/10 text-gray-300 px-7 py-3 rounded-lg text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-200"
              >
                Get in touch
              </button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img
              src={medhaImage}
              alt="Medha Ahuja — Product Manager"
              className="w-56 h-72 lg:w-64 lg:h-80 object-cover rounded-2xl border border-purple/20"
              style={{ boxShadow: "0 0 60px rgba(139, 92, 246, 0.08)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
