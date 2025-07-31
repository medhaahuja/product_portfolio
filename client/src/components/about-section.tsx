export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple/50 transition-all duration-300 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">Professional Background</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Self-described as an "accidental PM and economist" who focuses on creating user-delighting experiences. I have a genuine passion for understanding user needs and translating them into innovative solutions, with deep-rooted empathy for users.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently serving as Product Manager at Graphy Inc. (by Unacademy), where I've developed AI Avatars features, launched scalable onboarding flows, and integrated community modules that significantly improved user engagement and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple/20 to-pink/20 p-6 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-purple mb-2">AI & Analytics</h4>
              <p className="text-sm text-gray-300">Data-driven product decisions with AI integration</p>
            </div>
            <div className="bg-gradient-to-br from-blue/20 to-purple/20 p-6 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-blue mb-2">User Experience</h4>
              <p className="text-sm text-gray-300">Customer-centric solutions and optimization</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-white">Technical Skills</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm">Product Analytics</span>
                <span className="bg-pink/20 text-pink px-3 py-1 rounded-full text-sm">SQL</span>
                <span className="bg-blue/20 text-blue px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-orange/20 text-orange px-3 py-1 rounded-full text-sm">Tableau</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm">Figma</span>
                <span className="bg-pink/20 text-pink px-3 py-1 rounded-full text-sm">JIRA</span>
                <span className="bg-blue/20 text-blue px-3 py-1 rounded-full text-sm">Amplitude</span>
                <span className="bg-orange/20 text-orange px-3 py-1 rounded-full text-sm">Mixpanel</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm">ChatGPT</span>
                <span className="bg-pink/20 text-pink px-3 py-1 rounded-full text-sm">Claude</span>
                <span className="bg-blue/20 text-blue px-3 py-1 rounded-full text-sm">Power BI</span>
                <span className="bg-orange/20 text-orange px-3 py-1 rounded-full text-sm">Notion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
