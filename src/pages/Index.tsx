import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects, projects, clients } from "@/data/projects";
import stillSunset from "@/assets/still-sunset.webp";
import stillTerraces from "@/assets/still-terraces.webp";
import stillHorse from "@/assets/still-horse.webp";
import showreelPoster from "@/assets/showreel-poster.jpg";

const Index = () => {
  const [reelPlaying, setReelPlaying] = useState(false);
  const featuredProjects = getFeaturedProjects();
  const allProjects = projects.slice(0, 6);

  return (
    <Layout>
      <SEO />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <img 
          src={stillSunset}
          alt=""
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Video Editor &
              <br />
              <span className="text-muted-foreground">Director</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Based in Beirut. I edit and direct video for brands, broadcasters, and independent filmmakers across the MENA region.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2">
                <a href="https://wa.me/96170664916" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Typical reply within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative aspect-[2.1/1] rounded-sm overflow-hidden bg-secondary"
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
                <img 
                  src={showreelPoster} 
                  alt="Showreel preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full border-2 border-foreground/60 flex items-center justify-center group-hover:border-foreground transition-colors">
                    <Play className="w-6 h-6 text-foreground ml-0.5" />
                  </div>
                  <span className="font-heading text-sm font-medium uppercase tracking-widest">
                    Play Showreel (60s)
                  </span>
                </div>
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-lg font-semibold">Selected Work</h2>
            <Link
              to="/work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center mb-8">
              Recent Collaborations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 lg:gap-x-12">
              {clients.map((client, index) => (
                <span
                  key={index}
                  className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Work */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">More Work</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
              Commercial, social, broadcast, and film projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 relative overflow-hidden">
        <img 
          src={stillTerraces}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
              Services
            </h2>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-3xl mx-auto">
              <div>
                <h3 className="font-heading text-base font-semibold mb-4">Post-Production</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Video Editing (Short & Long Form)</li>
                  <li>Color Grading</li>
                  <li>Motion Graphics</li>
                  <li>Sound Design</li>
                  <li>Subtitles & Localization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold mb-4">Production</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Directing</li>
                  <li>Camera Operation</li>
                  <li>Lighting</li>
                  <li>Location Scouting</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              About
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              10+ years editing and directing across commercial, broadcast, and independent film. 
              I bring a cinematic eye to every project—from 60-second spots to long-form documentaries.
            </p>
            <Link
              to="/about"
              className="text-sm font-medium hover:underline underline-offset-4 inline-flex items-center gap-1.5"
            >
              More About Me <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <img 
          src={stillHorse}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center max-w-lg mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Have a project in mind? I'm available for commercial work, 
              long-form content, and creative collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://wa.me/96170664916" target="_blank" rel="noopener noreferrer">
                  WhatsApp →
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Typical reply within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
