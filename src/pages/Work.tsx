import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/data/projects";

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

  return (
    <Layout>
      <SEO
        title="Work"
        description="Explore a curated selection of video projects including commercials, social media content, broadcast work, and independent films."
      />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold">Work</h1>
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

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
