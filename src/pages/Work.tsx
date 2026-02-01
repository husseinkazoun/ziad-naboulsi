import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory, projects } from "@/data/projects";

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

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold">Work</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              A collection of projects spanning commercials, social content, broadcast productions, 
              and independent films. Each piece crafted with intention.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
