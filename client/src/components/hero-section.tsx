import { motion } from "framer-motion";
import medhaImage from "@assets/medha_image_1753962130215.png";

const stats = [
  { value: "₹50L+ GMV/month" },
  { value: "60% fewer support queries" },
  { value: "30% activation lift" },
  { value: "500+ creators" },
];

const tags = ["Solo PM", "AI-native", "Economist"];

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
          <div className="flex-1 space-y-7">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-medium tracking-[0.1em] uppercase text-purple"
            >
              Product Manager · 3+ Years · B2B &amp; B2C
            </motion.p>

            {/* Identity tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-400 bg-white/5 border border-white/8 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Solo PM. Full-stack.<br />0→1 to ₹50L+ GMV/month.
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-base text-gray-400 leading-7 max-w-xl"
            >
              Economist by training. I build AI-native products end-to-end —
              user research, PRDs, GTM, and customer success — across Pre-seed
              to Series H startups. Currently shipping at Graphy by Unacademy.
            </motion.p>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
              className="flex flex-wrap gap-2"
            >
              {stats.map((s) => (
                <span
                  key={s.value}
                  className="text-xs text-amber border border-amber/20 bg-amber/5 px-3 py-1.5 rounded-full font-medium"
                >
                  {s.value}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.38 }}
              className="flex flex-wrap gap-4 pt-1"
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

          {/* Photo — circular to match source image format */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div
              className="w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-1 ring-purple/20"
              style={{ boxShadow: "0 0 48px rgba(139, 92, 246, 0.12)" }}
            >
              <img
                src={medhaImage}
                alt="Medha Ahuja — Product Manager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
