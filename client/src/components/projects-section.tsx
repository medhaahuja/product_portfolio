import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "B2C Quick Commerce Strategy",
      description: "Comprehensive market analysis and strategic framework for quick commerce expansion, focusing on customer acquisition and retention strategies.",
      category: "strategy",
      tags: ["Market Research", "Strategy", "Analytics"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradientClass: "gradient-purple-pink",
      link: "https://drive.google.com/file/d/1o-bK4mWDemCiVYK2YfMtkurgJDv-CfvW/view"
    },
    {
      id: 2,
      title: "Improve Canva Onboarding",
      description: "UX analysis and optimization recommendations for Canva's user onboarding flow to reduce drop-offs and improve activation rates.",
      category: "product",
      tags: ["UX Design", "User Research", "Optimization"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradientClass: "gradient-blue-purple",
      link: "https://drive.google.com/file/d/1LPGMdXDYUvtfp-1dqFYgU5ZtKDKzUy9k/view"
    },
    {
      id: 3,
      title: "Account Aggregator Insights Tool",
      description: "AI-powered financial analytics platform that aggregates account data to provide personalized insights and recommendations.",
      category: "ai",
      tags: ["AI/ML", "FinTech", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradientClass: "gradient-pink-orange",
      link: "https://drive.google.com/file/d/11aaEXZpHLACQtSIZZINleSCIXRr9rK6c/view"
    },
    {
      id: 4,
      title: "PRD Co-working Space App",
      description: "Comprehensive Product Requirements Document for a co-working space management application with booking and community features.",
      category: "product",
      tags: ["PRD", "Mobile App", "Community"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradientClass: "gradient-purple-blue",
      link: "https://drive.google.com/file/d/17s-KE-4INfUWMWKrBAAyHgxaujM38IqS/view"
    },
    {
      id: 5,
      title: "Splitwise Product Teardown",
      description: "In-depth analysis of Splitwise's product features, user experience, and competitive positioning with improvement recommendations.",
      category: "product",
      tags: ["Product Analysis", "UX Audit", "FinTech"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradientClass: "gradient-orange-pink",
      link: "https://drive.google.com/file/d/1bXmWQzU1Eo9k8EydIhwtB4dyhKz0zHDS/view"
    },
    {
      id: 6,
      title: "Swiggy 'What to Eat' Solution",
      description: "AI-powered food recommendation system to solve decision fatigue and improve order completion rates through personalized suggestions.",
      category: "ai",
      tags: ["AI Recommendations", "Food Tech", "UX Innovation"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradientClass: "gradient-blue-purple",
      link: "https://drive.google.com/file/d/1souul29ZLozinVbvWULzEssygO0iGIaJ/view"
    },
    {
      id: 7,
      title: "Increase Blinkit's AOV",
      description: "Strategic initiatives to increase Average Order Value through bundling, cross-selling, and personalized recommendations.",
      category: "strategy",
      tags: ["Revenue Growth", "E-commerce", "Strategy"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradientClass: "gradient-pink-orange",
      link: "https://drive.google.com/file/d/1nuKFZ3CYsKgVm_hyWO5wS2Bx0SwphZT3/view"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'product', label: 'Product' },
    { id: 'ai', label: 'AI/Tech' }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of strategic product initiatives and innovative solutions that drove significant business impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === button.id
                  ? 'bg-gradient-to-r from-purple to-pink text-white'
                  : 'border border-gray-600 text-gray-300 hover:border-purple hover:text-purple'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${project.gradientClass} rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple/30 relative group`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(236, 72, 153, 0.9)), url('${project.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="p-8 h-full flex flex-col min-h-[400px]">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-center backdrop-blur-sm inline-flex items-center justify-center gap-2"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
