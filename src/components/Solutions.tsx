import { Laptop, ShoppingCart, Factory } from "lucide-react";
import { Card } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      icon: Laptop,
      title: "Medical Software Services",
      description: "Cutting-edge software solutions for healthcare management, patient records, diagnostics, and hospital operations with AI-driven automation."
    },
    {
      icon: ShoppingCart,
      title: "Medical Equipment Dealership",
      description: "Premium medical equipment sourcing and supply chain management. From diagnostic devices to surgical instruments, we deliver quality healthcare technology."
    },
    {
      icon: Factory,
      title: "Medical Products Production",
      description: "In-house manufacturing of medical-grade products and supplies. Quality-controlled production ensuring compliance with healthcare standards."
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-secondary mb-4">
            Our Solutions
          </h2>
          <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare technology solutions designed for modern medical facilities
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-card">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-secondary mb-3">
                {solution.title}
              </h3>
              <p className="font-lato text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
