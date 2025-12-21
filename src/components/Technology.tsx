import { Cpu, Cloud, Link2 } from "lucide-react";

const Technology = () => {
  const techStack = [
    {
      icon: Cpu,
      title: "AI Automation",
      description: "Machine learning algorithms optimize scheduling, predict equipment failures, and provide diagnostic support."
    },
    {
      icon: Cloud,
      title: "Cloud & Security",
      description: "Scalable cloud infrastructure with multi-layer security, automated backups, and 99.9% uptime guarantee."
    },
    {
      icon: Link2,
      title: "API Integrations",
      description: "Connect with labs, pharmacies, insurance providers, and medical equipment through our robust API platform."
    }
  ];

  return (
    <section id="technology" className="py-20 px-4 bg-secondary text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            Advanced Technology Stack
          </h2>
          <p className="text-lg font-lato text-white/80 max-w-2xl mx-auto">
            Built on cutting-edge infrastructure for reliability, security, and scalability
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <tech.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold mb-3">
                {tech.title}
              </h3>
              <p className="font-lato text-white/80 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
