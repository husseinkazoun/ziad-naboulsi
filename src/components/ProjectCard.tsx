import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
        <div className="relative aspect-video overflow-hidden rounded-sm bg-secondary">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
          {/* Hover overlay with "View project" */}
          <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/80 to-transparent">
            <span className="text-sm text-foreground flex items-center gap-1.5">
              View project <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-heading text-base font-semibold leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">
            {project.role}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
