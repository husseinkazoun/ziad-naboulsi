import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Film, Tv, Camera, Globe } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import VideoCard from "@/components/VideoCard";
import VimeoEmbed from "@/components/VimeoEmbed";
import { Button } from "@/components/ui/button";
import { projects, clients } from "@/data/projects";
import { vimeoEmbeds } from "@/data/vimeoEmbeds";
import heroBg from "@/assets/hero-bg.jpg";
import showreelPoster from "@/assets/showreel-poster.jpg";
import stillHorse from "@/assets/still-horse.webp";
const Index = () => {
  const [reelPlaying, setReelPlaying] = useState(false);

  return <Layout>
      <SEO />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <img src={heroBg} alt="" loading="eager" className="absolute inset-0 w-full h-full object-cover object-right blur-[2px]" />
        <div className="absolute inset-0 bg-background/80 opacity-80" />

        <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10 max-w-7xl">
          <div className="max-w-2xl text-left ml-0 lg:-ml-8">
            <motion.p initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0,
            ease: [0.22, 1, 0.36, 1]
          }} className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70 mb-4">
          </motion.p>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1]
          }} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight">Videography, Photography & Editing

            <br />
              <span className="text-muted-foreground">Director</span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }} className="mt-8 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
              Crafting visual stories for brands, broadcasters, and filmmakers. From concept to final cut—commercials, documentaries, and everything in between.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }} className="mt-4 text-sm text-muted-foreground max-w-xl leading-relaxed">
          </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1]
          }} className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-6">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2 h-12 px-6">
                <a href="https://wa.me/96170664916" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Below Hero */}
      <section className="py-16 lg:py-20 border-b border-border/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
              About
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-5">I'm a videographer and editor based in Beirut, Lebanon.
I believe in the power of visual storytelling to create meaningful experiences.</p>
            <p className="text-base text-muted-foreground leading-relaxed">I have a background spanning commercials, broadcast television, and independent film. Whether it's a high-energy brand campaign or an intimate documentary, I approach each story with intention and craft.</p>
          </motion.div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Left Video Panel - 80% */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.98
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="w-full rounded-lg overflow-hidden bg-secondary shadow-2xl">
              <div style={{
              padding: "52.78% 0 0 0",
              position: "relative"
            }}>
                <iframe src="https://player.vimeo.com/video/1160737812?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&muted=1&loop=1&player_id=0&app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }} title="Showreel 2024" />
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-16">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Showreel
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Ali abboud- Album teaser</h3>
                <p className="text-base text-muted-foreground leading-relaxed">Role: Editor<br />Category: Commercial</p>
              </div>
              <a href="https://vimeo.com/1160737812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors group whitespace-nowrap sm:mt-8">
                Watch on Vimeo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} viewport={{
            once: true
          }} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img src={stillHorse} alt="On set" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} viewport={{
            once: true
          }}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                About
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ziad Naboulsi
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 text-[15px]">
                With over a decade of experience in video production, I bring a cinematic sensibility to every project—whether it's a 30-second commercial, a multi-episode documentary series, or a feature film. My work spans brands, broadcasters, NGOs, and independent filmmakers, always with a focus on visual storytelling that connects and resonates.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Film className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">10+ Years</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Editing & Directing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">MENA Region</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Lebanon, KSA, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">Full Service</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Edit, Color, Motion</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Tv className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">Based in Beirut</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Remote & On-Site</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group">
                More About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4
        }} viewport={{
          once: true
        }} className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
              What I Do
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-3xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.05
          }} viewport={{
            once: true
          }}>
              <h3 className="font-heading text-lg font-semibold mb-5">Post-Production</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Video Editing (Short & Long Form)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Color Grading
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Motion Graphics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Sound Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Subtitles & Localization
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <h3 className="font-heading text-lg font-semibold mb-5">Production</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Directing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Camera Operation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Lighting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Location Scouting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Project Management
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-center max-w-xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-10">
              Have a project in mind? I'm available for commercial work,
              long-form content, and creative collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 px-8">
                <a href="https://wa.me/96170664916" target="_blank" rel="noopener noreferrer">
                  WhatsApp →
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground/60">
              Typical reply within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Index;