import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Aman Raj",
      role: "Co-Founder & CEO",
      bio: "Healthcare technology visionary with 10+ years in digital health transformation"
    },
    {
      name: "Shwetaang Shekhar",
      role: "Co-Founder & COO",
      bio: "Operations strategist with deep expertise in hospital management systems"
    },
    {

      name: "Om Purushottam",
      role: "Co-Founder & CTO",
      bio: "AI/ML expert specializing in healthcare applications and predictive analytics"
    }
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-secondary mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders dedicated to transforming healthcare
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="p-6 text-center border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                <User className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-secondary mb-2">
                {founder.name}
              </h3>
              <p className="text-sm font-lato text-primary mb-3">
                {founder.role}
              </p>
              <p className="font-lato text-muted-foreground text-sm">
                {founder.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
