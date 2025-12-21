import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Rocket } from "lucide-react";

const Investors = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Market Opportunity",
      description: "₹10,000 Cr+ Indian healthcare IT market growing at 15% CAGR"
    },
    {
      icon: Target,
      title: "Proven Traction",
      description: "50+ hospitals onboarded, 10K+ daily active users"
    },
    {
      icon: Rocket,
      title: "Growth Roadmap",
      description: "Expanding to 500+ hospitals across India by 2026"
    }
  ];

  return (
    <section id="investors" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-secondary mb-4">
            For Investors
          </h2>
          <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
            Join us in revolutionizing healthcare technology in India
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-secondary mb-2">
                {highlight.title}
              </h3>
              <p className="font-lato text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="text-base font-poppins">
            Request Investor Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investors;
