import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-heading text-lg font-bold tracking-tight"
            >
              ZIAD NABOULSI
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Videographer & Editor based in Lebanon. Crafting visual stories that connect.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/work" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                Work
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:hello@ziadnaboulsi.com"
                className="hover:underline underline-offset-4"
              >
                hello@ziadnaboulsi.com
              </a>
              <a
                href="https://wa.me/961XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                WhatsApp
              </a>
              <span>Beirut, Lebanon</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Ziad Naboulsi. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:underline underline-offset-4"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:underline underline-offset-4"
            >
              Vimeo
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:underline underline-offset-4"
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
