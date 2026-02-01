import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects, projects, clients } from "@/data/projects";

const Index = () => {
  const [reelPlaying, setReelPlaying] = useState(false);
  const featuredProjects = getFeaturedProjects();
  const allProjects = projects.slice(0, 6);

  return (
    <Layout>
      <SEO />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Cinematic Stories
              <br />
              <span className="text-muted-foreground">That Connect</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Videographer & Editor based in Lebanon. Crafting visual narratives for brands, 
              broadcasters, and filmmakers who want to make an impact.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setReelPlaying(true)}
                className="gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Reel
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2">
                <Link to="/work">
                  View Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work Mini-Strip */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading text-xl font-semibold">Selected Work</h2>
            <Link
              to="/work"
              className="text-sm text-muted-foreground hover:underline underline-offset-4 flex items-center gap-2"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative aspect-video max-w-5xl mx-auto rounded-md overflow-hidden bg-secondary"
          >
            {reelPlaying ? (
              <iframe
                src="https://player.vimeo.com/video/example?autoplay=1&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setReelPlaying(true)}
                className="absolute inset-0 w-full h-full flex items-center justify-center group"
              >
                <div className="relative z-10 w-16 h-16 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-foreground/60 transition-colors">
                  <Play className="w-6 h-6 text-foreground ml-0.5" />
                </div>
                <span className="absolute bottom-8 left-8 font-heading text-xl font-semibold">
                  2024 Showreel
                </span>
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-muted-foreground text-center mb-10">
              Trusted by
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              {clients.map((client, index) => (
                <span
                  key={index}
                  className="text-base font-heading font-medium text-muted-foreground"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Work Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">More Work</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              A selection of projects across commercial, social, broadcast, and film.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
              Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
              <div>
                <h3 className="font-heading text-lg font-semibold mb-5">Post-Production</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>Video Editing (Short & Long Form)</li>
                  <li>Color Grading</li>
                  <li>Motion Graphics</li>
                  <li>Sound Design & Mixing</li>
                  <li>Subtitles & Localization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-5">Production</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>Directing</li>
                  <li>Camera Operation</li>
                  <li>Lighting & Grip</li>
                  <li>Location Scouting</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              The Storyteller Behind the Lens
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              With years of experience across commercial, broadcast, and independent film, 
              I bring a cinematic eye and meticulous craft to every project. Based in Beirut, 
              working globally.
            </p>
            <Link
              to="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              More About Me →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Let's Build Your Next Video
            </h2>
            <p className="text-muted-foreground mb-10">
              Whether it's a brand campaign, social content, or a passion project — 
              I'm ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://wa.me/961XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  WhatsApp →
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
