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
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Cinematic Stories
              <br />
              <span className="text-muted-foreground">That Connect</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Videographer & Editor based in Lebanon. Crafting visual narratives for brands, 
              broadcasters, and filmmakers who want to make an impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setReelPlaying(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Reel
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/work">
                  View Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work Mini-Strip */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-2xl font-semibold">Selected Work</h2>
            <Link
              to="/work"
              className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden bg-secondary"
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" />
                </div>
                <span className="absolute bottom-8 left-8 font-heading text-2xl font-semibold">
                  2024 Showreel
                </span>
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center mb-10">
              Trusted by Leading Brands & Studios
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              {clients.map((client, index) => (
                <span
                  key={index}
                  className="text-lg font-heading font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Work Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">More Work</h2>
            <p className="mt-3 text-muted-foreground">
              A selection of projects across commercial, social, broadcast, and film.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/work">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">Post-Production</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Video Editing (Short & Long Form)</li>
                  <li>Color Grading</li>
                  <li>Motion Graphics</li>
                  <li>Sound Design & Mixing</li>
                  <li>Subtitles & Localization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">Production</h3>
                <ul className="space-y-2 text-muted-foreground">
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
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              The Storyteller Behind the Lens
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience across commercial, broadcast, and independent film, 
              I bring a cinematic eye and meticulous craft to every project. Based in Beirut, 
              working globally.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                More About Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Let's Build Your Next Video
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Whether it's a brand campaign, social content, or a passion project — 
              I'm ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
              >
                <a href="https://wa.me/961XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  WhatsApp
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
