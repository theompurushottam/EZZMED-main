import { Card } from "@/components/ui/card";

const Impact = () => {
  const metrics = [
    { number: "50+", label: "Hospitals Connected" },
    { number: "10K+", label: "Patients Served Daily" },
    { number: "60%", label: "Time Saved" },
    { number: "₹50L+", label: "Cost Reduction" }
  ];

  return (
    <section id="impact" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-secondary mb-4">
            Our Impact
          </h2>
          <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
            Transforming healthcare delivery across India
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center border-border bg-card">
              <div className="text-4xl font-poppins font-bold text-primary mb-2">
                {metric.number}
              </div>
              <div className="font-lato text-muted-foreground">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-poppins font-semibold text-secondary mb-6 text-center">
            What Healthcare Providers Say
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-accent/30 rounded-xl">
              <p className="font-lato text-foreground mb-4 italic">
                "EzzMed has revolutionized how we manage our hospital. The AI-driven scheduling alone has saved us countless hours."
              </p>
              <p className="font-poppins font-semibold text-secondary">
                Dr. Sharma, Apollo Hospital
              </p>
            </div>
            <div className="p-6 bg-accent/30 rounded-xl">
              <p className="font-lato text-foreground mb-4 italic">
                "The equipment integration is seamless. We now have real-time visibility into all our medical devices."
              </p>
              <p className="font-poppins font-semibold text-secondary">
                Dr. Patel, Fortis Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
