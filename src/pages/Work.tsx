import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import VideoCard from "@/components/VideoCard";
import { projects, clients, getProjectsByCategory } from "@/data/projects";

const categories = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "social", label: "Social" },
  { id: "broadcast", label: "Broadcast" },
  { id: "film", label: "Film" },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  // Get projects for sections
  const allProjects = projects;
  const featuredProjects = allProjects.slice(0, 3);
  const moreProjects = allProjects.filter(p => !p.isVertical).slice(3, 7);
  const verticalReels = allProjects.filter(p => p.isVertical);

  // Separate standard and vertical projects for filter view
  const standardProjects = filteredProjects.filter((p) => !p.isVertical);
  const verticalProjectsFiltered = filteredProjects.filter((p) => p.isVertical);

  return (
    <Layout>
      <SEO
        title="Work"
        description="Explore a curated selection of video projects including commercials, social media content, broadcast work, and independent films."
      />

      {/* Showreel Section */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Video Panel */}
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

      {/* Featured Work Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <motion.p initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4
              }} viewport={{
                once: true
              }} className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Portfolio
              </motion.p>
              <motion.h2 initial={{
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
              }} className="font-heading text-3xl md:text-4xl font-bold">
                Featured Work
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <VideoCard
                key={project.id}
                title={project.title}
                role={project.role}
                vimeoId={project.vimeoId}
                thumbnail={project.thumbnail}
                index={index}
                isFeatured
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 lg:py-20 border-y border-border/50 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70 text-center mb-10">
              Trusted By
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 lg:gap-x-14">
              {clients.map((client, index) => (
                <span
                  key={index}
                  className="text-xs font-heading font-medium text-muted-foreground/80 uppercase tracking-wider hover:text-foreground transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Work */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
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
          }} className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">More Work</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Commercial, broadcast, and film projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {moreProjects.map((project, index) => (
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

      {/* Vertical Reels Section */}
      {verticalReels.length > 0 && (
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
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
            }} className="text-center mb-12 lg:mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Social
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Vertical Reels</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Short-form content for Instagram, TikTok, and YouTube Shorts.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-xl mx-auto">
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

      {/* All Work - Filterable */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">All Work</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A collection of projects spanning commercials, social content, broadcast productions,
              and independent films. Each piece crafted with intention.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors border rounded-md ${
                  activeCategory === category.id
                    ? "border-foreground text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Standard Projects Grid (16:9) */}
          {standardProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
          )}

          {/* Vertical Projects Grid (9:16) */}
          {verticalProjectsFiltered.length > 0 && (
            <div className="mt-16">
              <h3 className="font-heading text-xl font-semibold mb-8">Social Reels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl">
                {verticalProjectsFiltered.map((project, index) => (
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
          )}

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-24">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
