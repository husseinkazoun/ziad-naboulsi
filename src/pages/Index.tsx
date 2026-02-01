import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
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



    
    </Layout>;
};
export default Index;