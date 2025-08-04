export default function LinkedInSection() {
  return (
    <section id="linkedin" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">Recent LinkedIn Insights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest thoughts on AI, product management, and strategic thinking
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple/20 to-pink/20 border border-purple/30 rounded-xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple mb-2">3+</div>
            <div className="text-white text-sm">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-blue/20 to-purple/20 border border-blue/30 rounded-xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue mb-2">20+</div>
            <div className="text-white text-sm">Major Projects</div>
          </div>
          <div className="bg-gradient-to-br from-pink/20 to-orange/20 border border-pink/30 rounded-xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-pink mb-2">3000+</div>
            <div className="text-white text-sm">LinkedIn Connections</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple/10 to-pink/10 border border-purple/30 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <svg className="w-16 h-16 text-purple mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <h3 className="text-2xl font-bold text-white mb-4">Connect with me on LinkedIn</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I regularly share insights about product management, AI integration, user experience design, and strategic thinking. Join 500+ professionals who follow my content for the latest in product innovation.
          </p>
          <a 
            href="https://linkedin.com/in/medha-ahuja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple to-pink text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
