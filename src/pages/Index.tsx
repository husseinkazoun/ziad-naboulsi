import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Film, Tv, Camera, Globe } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import VideoCard from "@/components/VideoCard";
import VimeoEmbed from "@/components/VimeoEmbed";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects, getStandardProjects, getVerticalReels, clients } from "@/data/projects";
import { vimeoEmbeds } from "@/data/vimeoEmbeds";
import heroBg from "@/assets/hero-bg.jpg";
import showreelPoster from "@/assets/showreel-poster.jpg";
import stillHorse from "@/assets/still-horse.webp";

const Index = () => {
  const [reelPlaying, setReelPlaying] = useState(false);
  const featuredProjects = getFeaturedProjects();
  const standardProjects = getStandardProjects().slice(0, 6);
  const verticalReels = getVerticalReels();

  return (
    <Layout>
      <SEO />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center blur-[2px]"
        />
        <div className="absolute inset-0 bg-background/80" />

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

      {/* Showreel Section - Always visible embed */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-sm overflow-hidden bg-secondary"
          >
            {reelPlaying ? (
              <VimeoEmbed html={vimeoEmbeds["1160737812"]} />
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
                  <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-background ml-0.5" fill="currentColor" />
                  </div>
                  <span className="font-heading text-sm font-medium uppercase tracking-widest">
                    Play Showreel
                  </span>
                </div>
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Selected Work - Video Cards with Modal */}
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
              <VideoCard
                key={project.id}
                title={project.title}
                role={project.role}
                vimeoId={project.vimeoId}
                thumbnail={project.thumbnail}
                index={index}
              />
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

      {/* More Work - Standard Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">More Work</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
              Commercial, broadcast, and film projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {standardProjects.map((project, index) => (
              <VideoCard
                key={project.id}
                title={project.title}
                role={project.role}
                vimeoId={project.vimeoId}
                thumbnail={project.thumbnail}
                index={index}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vertical Reels Section */}
      {verticalReels.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Social Reels</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
                Vertical content for social platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
              {verticalReels.map((project, index) => (
                <VideoCard
                  key={project.id}
                  title={project.title}
                  role={project.role}
                  vimeoId={project.vimeoId}
                  thumbnail={project.thumbnail}
                  index={index}
                  isVertical
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section - Expanded */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-md overflow-hidden"
            >
              <img
                src={stillHorse}
                alt="On set"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                About Ziad
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over a decade of experience in video production, I bring a cinematic sensibility to every project—whether it's a 30-second commercial, a multi-episode documentary series, or a feature film. My work spans brands, broadcasters, NGOs, and independent filmmakers, always with a focus on visual storytelling that connects and resonates.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Film className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">10+ Years</p>
                    <p className="text-xs text-muted-foreground">Editing & Directing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">MENA Region</p>
                    <p className="text-xs text-muted-foreground">Lebanon, KSA, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Camera className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">Full Service</p>
                    <p className="text-xs text-muted-foreground">Edit, Color, Motion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Tv className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">Based in Beirut</p>
                    <p className="text-xs text-muted-foreground">Remote & On-Site</p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="text-sm font-medium hover:underline underline-offset-4 inline-flex items-center gap-1.5"
              >
                More About Me <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
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

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
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
