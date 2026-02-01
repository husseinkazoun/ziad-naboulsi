import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const categoryLabels: Record<string, string> = {
    commercial: "Commercial",
    social: "Social",
    broadcast: "Broadcast",
    film: "Film",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/work/${project.id}`}
        className="group block"
      >
        <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-sm font-medium text-foreground">View Project</span>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {categoryLabels[project.category]}
          </span>
          <h3 className="mt-1 font-heading text-lg font-semibold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
