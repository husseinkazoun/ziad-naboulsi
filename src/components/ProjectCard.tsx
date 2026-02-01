import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Link to={`/work/${project.id}`} className="group block">
        <div className="relative aspect-video overflow-hidden rounded-md bg-secondary">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-heading text-lg font-semibold group-hover:underline underline-offset-4 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
