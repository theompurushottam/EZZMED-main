import logo from "@/assets/1000066001-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="EzzMed" className="h-12 w-auto mb-4" />
            <p className="font-lato text-white/80 text-sm">
              Empowering Healthcare with Intelligence
            </p>
          </div>
          <div>
            <h3 className="font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-lato text-sm">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#technology" className="text-white/80 hover:text-white transition-colors">Technology</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold mb-4">Company</h3>
            <ul className="space-y-2 font-lato text-sm">
              <li><a href="#team" className="text-white/80 hover:text-white transition-colors">Team</a></li>
              <li><a href="#investors" className="text-white/80 hover:text-white transition-colors">Investors</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 font-lato text-sm text-white/80">
              <li>+91 8810605612</li>
              <li>contact@ezzmed.in</li>
              <li>Ghaziabad, Sector 12</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center font-lato text-sm text-white/60">
          <p>&copy; 2025 EzzMed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
