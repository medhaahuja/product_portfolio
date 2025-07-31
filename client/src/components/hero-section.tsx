import medhaImage from "@assets/medha_image_1753962130215.png";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToLinkedIn = () => {
    const element = document.getElementById('linkedin');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 gradient-radial-hero"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 animate-fade-in lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">Medha Ahuja</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200">AI-Focused Product Manager</h2>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Product management professional with over three years of experience driving customer-centric solutions and digital innovation in B2C and B2B settings. Passionate about building scalable AI-powered products that optimize user experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-purple to-pink text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple/30 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={scrollToLinkedIn}
                className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:border-purple hover:text-purple transition-all duration-300"
              >
                Connect on LinkedIn
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 animate-slide-up lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple to-pink rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={medhaImage} 
                alt="Medha Ahuja - AI-Focused Product Manager" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
