import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Development Dollar App",
      tagline: "Driving donations through digital giving.",
      description: "A mobile app built with Flutter & Android Studio, published on Google Playstore, that facilitates donations for the East Zimbabwe Conference SDA initiative to finish building churches.",
      fullDescription: "The Development Dollar App is a comprehensive mobile application designed to streamline the donation process for church construction projects. Built using Flutter and Android Studio, this app provides a secure and user-friendly platform for community members to contribute to the East Zimbabwe Conference SDA initiative. The app features secure payment processing, real-time donation tracking, and progress updates on construction projects. It's currently published on Google Play Store and has facilitated significant contributions towards completing church buildings across the region.",
      problem: "The East Zimbabwe Conference SDA initiative was struggling to collect donations for church construction projects. Traditional donation methods were inefficient, lacked transparency, and made it difficult for community members to track the progress of their contributions.",
      solution: "Developed a comprehensive Flutter mobile application with secure payment integration, real-time donation tracking, and progress visualization. The app provides a user-friendly interface for making donations while offering complete transparency about how funds are being used for church construction projects.",
      impact: "Successfully facilitated significant donations for church construction projects across the region. The app improved donation transparency, increased community engagement, and streamlined the fundraising process, helping complete multiple church buildings that serve local communities.",
      technologies: ["Flutter", "Android Studio", "Firebase", "Google Play Store", "Payment Integration"],
      image: `${process.env.PUBLIC_URL}/images/projects/development-dollar-app.jpg`
    },
    {
      id: 2,
      title: "Youth Big Sabbath Digital Ticketing",
      tagline: "Revolutionizing event access with secure QR-code tickets.",
      description: "Built a digital ticketing & verification system integrated with Google Sheets for 1,000+ attendees. Secure, real-time verification using QR codes.",
      fullDescription: "This digital ticketing system was developed to manage large-scale events efficiently and securely. The system generates unique QR codes for each ticket, integrates with Google Sheets for real-time attendee management, and provides instant verification at entry points. Capable of handling 1,000+ attendees, the system includes features like ticket validation, duplicate prevention, and real-time analytics. The QR code system ensures secure access while providing a seamless experience for both organizers and attendees.",
      problem: "Large-scale events like Youth Big Sabbath were facing challenges with manual ticket management, long entry queues, and difficulty preventing ticket fraud. The traditional paper-based system was inefficient and prone to errors, leading to poor attendee experience and security concerns.",
      solution: "Created a comprehensive digital ticketing system with QR code generation, Google Sheets integration for real-time data management, and instant verification capabilities. The system includes duplicate prevention, real-time analytics, and seamless entry point management for 1,000+ attendees.",
      impact: "Transformed event management by reducing entry time by 70%, eliminating ticket fraud, and providing real-time attendance analytics. The system successfully managed 1,000+ attendees with zero security incidents and significantly improved the overall event experience for both organizers and participants.",
      technologies: ["QR Code Generation", "Google Sheets API", "Real-time Verification", "Event Management", "Analytics"],
      image: `${process.env.PUBLIC_URL}/images/projects/youth-ticketing-system.jpg`
    },
    {
      id: 3,
      title: "AI Chatbot",
      tagline: "Affordable, private social + mental health support.",
      description: "A social impact chatbot prototype exploring WhatsApp API, Telegram, and PWA, designed to give youth access to safe, affordable, private help.",
      fullDescription: "This AI-powered chatbot prototype addresses the critical need for accessible mental health support among youth. The system integrates with popular messaging platforms like WhatsApp and Telegram, providing a familiar and comfortable interface for users seeking help. The chatbot offers private, 24/7 support for mental health concerns, crisis intervention, and general wellness guidance. Built as a Progressive Web App (PWA), it ensures accessibility across devices while maintaining user privacy and data security. The prototype explores innovative approaches to making mental health support more affordable and accessible.",
      problem: "Youth in Zimbabwe face significant barriers to accessing mental health support, including high costs, limited availability of professionals, and social stigma. Many young people need immediate, private, and affordable access to mental health resources but lack the means to obtain professional help.",
      solution: "Developed an AI-powered chatbot prototype that integrates with popular messaging platforms (WhatsApp, Telegram) and functions as a Progressive Web App. The system provides 24/7 private support, crisis intervention capabilities, and wellness guidance while maintaining strict privacy and data security standards.",
      impact: "Created a prototype that demonstrates the potential to make mental health support more accessible and affordable for youth. The solution addresses the critical gap in mental health services by providing immediate, private, and stigma-free support through familiar communication channels, potentially reaching thousands of young people who previously had no access to such resources.",
      technologies: ["AI/ML", "WhatsApp API", "Telegram Bot", "PWA", "Mental Health", "Privacy & Security"],
      image: `${process.env.PUBLIC_URL}/images/projects/ai-chatbot.jpg`
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding section-projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of impactful solutions that combine technology with purpose
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to initials if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback content */}
                <div className="w-full h-full flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">Project Preview</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-primary-400 font-semibold mb-3">{project.tagline}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <button className="w-full btn-primary">
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-primary-400 font-semibold text-lg">{selectedProject.tagline}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to initials if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback content */}
                <div className="w-full h-full flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">
                        {selectedProject.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <p className="text-gray-400">Project Visualization</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-red-400 text-lg">⚠️</span>
                      </div>
                      <h4 className="text-lg font-semibold text-red-400">Problem</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-blue-400 text-lg">💡</span>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-400">Solution</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-green-400 text-lg">🚀</span>
                      </div>
                      <h4 className="text-lg font-semibold text-green-400">Impact</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.impact}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-600/20 text-primary-400 border border-primary-600/30 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button onClick={closeModal} className="btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
