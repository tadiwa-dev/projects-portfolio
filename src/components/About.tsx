import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding section-about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Story */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                As a <span className="text-primary-400 font-semibold">Hardware Engineering graduate</span>, I've discovered that the most meaningful solutions emerge at the intersection of technology and human need. My journey has led me to build applications that don't just function—they make a difference.
              </p>
              
              <p>
                From developing mobile apps that facilitate community donations to creating secure digital systems for large-scale events, I believe technology should serve a greater purpose. Each project I undertake is driven by a simple question: <span className="text-accent-400 font-semibold">"How can this make someone's life better?"</span>
              </p>
              
              <p>
                My approach combines the analytical mindset of an engineer with the creative problem-solving of a developer. Whether I'm working with Flutter to build cross-platform apps, implementing cybersecurity measures, or exploring AI for mental health support, I'm always thinking about the real-world impact.
              </p>
              
              <p>
                I'm passionate about creating <span className="text-primary-400 font-semibold">accessible, secure, and meaningful</span> digital solutions that bridge the gap between complex technology and everyday users. Every line of code I write is an opportunity to build something that matters.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                Let's Work Together
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="space-y-8 animate-slide-up">
            {/* Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  Purpose-Driven
                </h3>
                <p className="text-gray-300 text-sm">
                  Every project serves a meaningful cause, from community support to mental health accessibility.
                </p>
              </div>

              <div className="card text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  Security-First
                </h3>
                <p className="text-gray-300 text-sm">
                  Built-in cybersecurity awareness ensures every solution is secure and trustworthy.
                </p>
              </div>

              <div className="card text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-gray-300 text-sm">
                  Combining cutting-edge technology with creative problem-solving approaches.
                </p>
              </div>

              <div className="card text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  Collaboration
                </h3>
                <p className="text-gray-300 text-sm">
                  Working closely with communities and organizations to create impactful solutions.
                </p>
              </div>
            </div>

            {/* Education & Background */}
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-4">Background</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-400">Hardware Engineering Graduate</h4>
                    <p className="text-gray-300 text-sm">Strong foundation in systems thinking and technical problem-solving</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-accent-400">Self-Taught Developer</h4>
                    <p className="text-gray-300 text-sm">Passionate learner with hands-on experience in mobile and web development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-400">Social Impact Focus</h4>
                    <p className="text-gray-300 text-sm">Committed to using technology for positive community change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
