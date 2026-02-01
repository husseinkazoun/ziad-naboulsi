import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-heading text-xl font-bold tracking-tight hover:text-accent transition-colors"
            >
              ZIAD NABOULSI
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Videographer & Editor based in Lebanon. Crafting visual stories that connect.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="mailto:hello@ziadnaboulsi.com"
                className="hover:text-foreground transition-colors"
              >
                hello@ziadnaboulsi.com
              </a>
              <a
                href="https://wa.me/961XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
              <span>Beirut, Lebanon</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Ziad Naboulsi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Vimeo
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
