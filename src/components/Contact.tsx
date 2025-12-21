import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your healthcare facility? Let's talk.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-lato font-semibold text-secondary mb-2">
                  Name
                </label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="block font-lato font-semibold text-secondary mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block font-lato font-semibold text-secondary mb-2">
                  Message
                </label>
                <Textarea placeholder="Tell us about your needs..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
          <div className="space-y-6">
            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-secondary mb-1">
                    Address
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    Sf-03, L-280, Pratap Vihar<br />
                    Ghaziabad – Sector 12
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-secondary mb-1">
                    Phone
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    +91 8810605612
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-secondary mb-1">
                    Email
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    contact@ezzmed.in
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
