import { Brain, Shield, Zap, Network } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyEzzMed = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven",
      description: "Intelligent automation that learns and adapts to your hospital's workflow"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with HIPAA compliance and end-to-end encryption"
    },
    {
      icon: Zap,
      title: "Efficient",
      description: "Streamline operations and reduce administrative burden by up to 60%"
    },
    {
      icon: Network,
      title: "Connected",
      description: "Seamless integration with existing equipment and healthcare systems"
    }
  ];

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-secondary mb-4">
            Why Choose EzzMed?
          </h2>
          <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
            We're revolutionizing healthcare management with cutting-edge technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="font-lato text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEzzMed;
