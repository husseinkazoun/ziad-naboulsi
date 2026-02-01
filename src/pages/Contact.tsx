import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
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
    console.log("Form submitted");
  };

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Get in touch with Ziad Naboulsi for video production, editing projects, or collaborations. Based in Lebanon, working globally."
      />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mb-16"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? I'd love to hear about it. Drop me a message and 
              let's create something memorable.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              I typically respond within 24 hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary border-border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-xs uppercase tracking-wider text-muted-foreground">Email or WhatsApp</Label>
                    <Input
                      id="contact"
                      placeholder="How can I reach you?"
                      className="bg-secondary border-border rounded-md"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="project-type" className="text-xs uppercase tracking-wider text-muted-foreground">Project Type</Label>
                    <Select>
                      <SelectTrigger className="bg-secondary border-border rounded-md">
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
                    <Label htmlFor="deadline" className="text-xs uppercase tracking-wider text-muted-foreground">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      className="bg-secondary border-border rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-secondary border-border resize-none rounded-md"
                  />
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-heading text-lg font-semibold mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <a
                    href="mailto:hello@ziadnaboulsi.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="text-sm text-foreground mt-0.5">hello@ziadnaboulsi.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/96170664916"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                      <p className="text-sm text-foreground mt-0.5">+961 70 664 916</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="text-sm text-foreground mt-0.5">Beirut, Lebanon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-heading text-base font-semibold mb-4">Quick Connect</h3>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href="https://wa.me/96170664916"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-heading text-base font-semibold mb-4">Follow Along</h3>
                <div className="flex gap-6 text-sm">
                  <a
                    href="https://instagram.com/ziadnaboulsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline underline-offset-4"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://vimeo.com/ziadnaboulsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline underline-offset-4"
                  >
                    Vimeo
                  </a>
                  <a
                    href="https://linkedin.com/in/ziadnaboulsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline underline-offset-4"
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
