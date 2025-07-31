export default function AchievementsSection() {
  const stats = [
    { number: "3+", label: "Years Experience", gradientClass: "bg-gradient-to-r from-purple to-pink" },
    { number: "₹10M+", label: "Revenue Generated", gradientClass: "bg-gradient-to-r from-blue to-purple" },
    { number: "50L+", label: "Users Impacted", gradientClass: "bg-gradient-to-r from-pink to-orange" },
    { number: "7+", label: "Major Projects", gradientClass: "bg-gradient-to-r from-orange to-pink" }
  ];

  const achievements = [
    {
      year: "2021",
      title: "CET Rank 23",
      description: "Achieved second-highest percentage in Master's Economics program",
      gradientClass: "gradient-purple-pink",
      borderColor: "border-purple/30",
      textColor: "text-purple"
    },
    {
      year: "2022",
      title: "Product Analytics Certification",
      description: "Completed advanced product analytics program from The Product Folks",
      gradientClass: "gradient-blue-purple",
      borderColor: "border-blue/30",
      textColor: "text-blue"
    },
    {
      year: "2023",
      title: "AI Avatars Feature Launch",
      description: "Successfully launched AI-powered feature reducing support queries by 60%",
      gradientClass: "gradient-pink-orange",
      borderColor: "border-pink/30",
      textColor: "text-pink"
    },
    {
      year: "2025",
      title: "ProductSuite Co-Founder",
      description: "Co-founded AI survey platform with 50+ beta users in first 2 weeks",
      gradientClass: "gradient-orange-pink",
      borderColor: "border-orange/30",
      textColor: "text-orange"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">Awards & Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto"></div>
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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple to-pink"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-between">
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <div className={`bg-gradient-to-br from-purple/20 to-pink/20 p-6 rounded-xl ${achievement.borderColor} border`}>
                        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                        <p className="text-gray-300 mb-2">{achievement.description}</p>
                        <span className={`${achievement.textColor} text-sm`}>{achievement.year}</span>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple to-pink rounded-full border-4 border-deep-black"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue to-purple rounded-full border-4 border-deep-black"></div>
                    </div>
                    <div className="w-5/12 pl-8">
                      <div className={`bg-gradient-to-br from-blue/20 to-purple/20 p-6 rounded-xl ${achievement.borderColor} border`}>
                        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                        <p className="text-gray-300 mb-2">{achievement.description}</p>
                        <span className={`${achievement.textColor} text-sm`}>{achievement.year}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
