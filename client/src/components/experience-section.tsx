import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Product Manager, Product",
      company: "Graphy by Unacademy",
      location: "Bengaluru, India",
      duration: "Feb 2023 - Present",
      gradientClass: "gradient-purple-pink",
      borderColor: "border-purple/30",
      hoverBorderColor: "hover:border-purple/50",
      iconColor: "text-purple",
      achievements: [
        "Developed AI Avatars feature with agentic tools, reducing learners' support queries by 60% and driving 25% conversion to paid users",
        "Launched scalable self-serve onboarding flow that drove 30% increase in signup-to-activation rate and achieved adoption by 500+ creators",
        "Integrated community module leading to 18% increase in MRR and 2.5x boost in daily active sessions",
        "Executed data-driven SEO overhaul resulting in 10% organic traffic increase within 3 months"
      ]
    },
    {
      title: "Associate Product Manager, Product",
      company: "INFINITY LEARN",
      location: "Hyderabad, India",
      duration: "May 2022 - Feb 2023",
      gradientClass: "gradient-blue-purple",
      borderColor: "border-blue/30",
      hoverBorderColor: "hover:border-blue/50",
      iconColor: "text-blue",
      achievements: [
        "Launched flagship SCORE scholarship test, achieving ₹10 million+ in revenue and engaging over 10 lac users",
        "Revamped test UX boosting participation rates by 20% and reducing drop-offs by 35%",
        "Designed gamified learning loop increasing average session time by 30% and weekly retention by 22%",
        "Implemented search feature using OpenSearch, resulting in 26% CTR on learning content and 3x boost in long-tail content discovery"
      ]
    },
    {
      title: "Product Trainee, CEO's Office",
      company: "INFINITY LEARN",
      location: "Hyderabad, India",
      duration: "Jan 2022 - May 2022",
      gradientClass: "gradient-pink-orange",
      borderColor: "border-pink/30",
      hoverBorderColor: "hover:border-pink/50",
      iconColor: "text-pink",
      achievements: [
        "Built cross-functional analytics dashboard streamlining leadership reviews and cutting reporting time by 40%",
        "Integrated Amplitude for granular user behavior tracking, uncovering top 3 drop-off points"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 ${exp.borderColor} ${exp.hoverBorderColor} border rounded-2xl p-8 transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className={`${exp.iconColor} text-lg font-semibold`}>{exp.company} - {exp.location}</p>
                </div>
                <div className={`${exp.iconColor.replace('text-', 'bg-')}/20 ${exp.iconColor} px-4 py-2 rounded-full text-sm font-medium mt-4 lg:mt-0`}>
                  {exp.duration}
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <CheckCircle className={`${exp.iconColor} mt-1 mr-3 flex-shrink-0`} size={20} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
