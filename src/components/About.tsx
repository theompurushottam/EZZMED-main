const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-secondary mb-4">
            About EzzMed
          </h2>
        </div>
        <div className="space-y-6 font-lato text-lg text-muted-foreground leading-relaxed">
          <p>
            <span className="font-semibold text-secondary">Our Mission:</span> To democratize access to 
            cutting-edge healthcare technology, making advanced hospital management systems accessible to 
            healthcare facilities of all sizes across India.
          </p>
          <p>
            <span className="font-semibold text-secondary">Our Vision:</span> To become India's leading 
            healthcare technology platform, connecting every hospital, clinic, and patient through 
            intelligent, secure, and efficient systems.
          </p>
          <p>
            Founded by healthcare and technology veterans Aman Raj, Shwetaang Shekhar, and Om Purushottam, 
            EzzMed was born from a simple observation: healthcare facilities spend too much time on 
            administrative tasks and not enough time on patient care. We're changing that with AI-powered 
            automation and seamless integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
