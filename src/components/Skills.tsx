import React from 'react';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Development
    { name: "Flutter", category: "Mobile Development", icon: "📱" },
    { name: "Android Studio", category: "Mobile Development", icon: "🤖" },
    { name: "Node.js", category: "Backend Development", icon: "🟢" },
    { name: "Figma", category: "Rapid Prototyping", icon: "🎨" },
    
    // Communication & APIs
    { name: "Twilio", category: "Communication APIs", icon: "📞" },
    { name: "WhatsApp API", category: "Communication APIs", icon: "💬" },
    { name: "Telegram Bot", category: "Communication APIs", icon: "✈️" },
    
    // Systems & Security
    { name: "QR Code Systems", category: "Digital Systems", icon: "📊" },
    { name: "Google Sheets API", category: "Digital Systems", icon: "📋" },
    { name: "Database Management", category: "Digital Systems", icon: "🗄️" },
    { name: "Sophos", category: "Cybersecurity", icon: "🛡️" },
    { name: "SIEM", category: "Cybersecurity", icon: "🔍" },
    
    // Creative
    { name: "Graphic Design", category: "Creative", icon: "🎨" },
    { name: "Video Editing", category: "Creative", icon: "🎬" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="section-padding section-skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse toolkit spanning mobile development, cybersecurity, and creative design
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="card text-center hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                            style={{ 
                              width: `${Math.random() * 30 + 70}%`,
                              animationDelay: `${skillIndex * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600/20 via-primary-600/20 to-accent-600/20 rounded-2xl p-8 border border-primary-600/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="text-lg font-semibold text-primary-400">Rapid Prototyping</h4>
                <p className="text-gray-300 text-sm">Quick iteration and MVP development</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="text-lg font-semibold text-primary-400">Security-First</h4>
                <p className="text-gray-300 text-sm">Cybersecurity awareness and implementation</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="text-lg font-semibold text-primary-400">Impact-Driven</h4>
                <p className="text-gray-300 text-sm">Solutions that make a real difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
