export default function AchievementsSection() {
  const stats = [
    { number: "3+", label: "Years Experience", gradientClass: "bg-gradient-to-r from-purple to-pink" },
    { number: "7+", label: "Major Projects", gradientClass: "bg-gradient-to-r from-orange to-pink" },
    { number: "500+", label: "LinkedIn Connections", gradientClass: "bg-gradient-to-r from-blue to-purple" },
    { number: "5M+", label: "Platform Users Reached", gradientClass: "bg-gradient-to-r from-pink to-orange" }
  ];

  const linkedinPosts = [
    {
      id: 1,
      title: "AI in Product Building",
      excerpt: "AI is reshaping how we build products. From understanding user needs to creating personalized experiences, AI is not just a tool—it's becoming the foundation of modern product strategy.",
      date: "December 2024",
      link: "https://www.linkedin.com/posts/medha-ahuja_ai-productbuilding-activity-7348231760054272000-r11E?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzAW0wBRL21bUofTdFTfYVtbovMVRqLKcE",
      gradientClass: "gradient-purple-pink",
      borderColor: "border-purple/30",
      textColor: "text-purple"
    },
    {
      id: 2,
      title: "AI Design & Product Management",
      excerpt: "The intersection of AI and design thinking is where magic happens. As product managers, we need to understand not just what AI can do, but how it can enhance human experiences.",
      date: "November 2024",
      link: "https://www.linkedin.com/posts/medha-ahuja_ai-aidesign-aiproductmanagement-activity-7316799758927286273-Qy8A?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzAW0wBRL21bUofTdFTfYVtbovMVRqLKcE",
      gradientClass: "gradient-blue-purple",
      borderColor: "border-blue/30",
      textColor: "text-blue"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
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

        {/* Stats Counter */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl lg:text-5xl font-bold ${stat.gradientClass} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* LinkedIn Posts */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {linkedinPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 ${post.borderColor} border rounded-2xl p-8 hover:border-opacity-100 transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{post.title}</h3>
                <span className={`${post.textColor} text-sm`}>{post.date}</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${post.textColor.replace('text-', 'bg-')}/20 ${post.textColor} px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Read on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
