import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form is visual-only for now
    console.log("Form submitted");
  };

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Get in touch with Ziad Naboulsi for video production, editing projects, or collaborations. Based in Lebanon, working globally."
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? I'd love to hear about it. Drop me a message and 
              let's create something memorable.
            </p>
            <p className="mt-4 text-sm text-accent font-medium">
              ⚡ I typically respond within 24 hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Email or WhatsApp</Label>
                    <Input
                      id="contact"
                      placeholder="How can I reach you?"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select>
                      <SelectTrigger className="bg-secondary border-border">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="social">Social Content</SelectItem>
                        <SelectItem value="broadcast">Broadcast</SelectItem>
                        <SelectItem value="film">Film / Documentary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-secondary border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-xl font-semibold mb-6">Contact Details</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@ziadnaboulsi.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">hello@ziadnaboulsi.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/961XXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-foreground">+961 XX XXX XXX</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Beirut, Lebanon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Button */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-heading font-semibold mb-4">Quick Connect</h3>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  <a
                    href="https://wa.me/961XXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Message on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-heading font-semibold mb-4">Follow Along</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Vimeo
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
