import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { getVimeoEmbed } from "@/data/vimeoEmbeds";
import VimeoEmbed from "@/components/VimeoEmbed";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const embedHtml = project.vimeoId ? getVimeoEmbed(project.vimeoId) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-video overflow-hidden rounded-sm bg-secondary">
        {embedHtml ? (
          <VimeoEmbed html={embedHtml} />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <Link to={`/work/${project.id}`} className="block group">
        <div className="mt-3">
          <h3 className="font-heading text-base font-semibold leading-tight group-hover:underline underline-offset-2">
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
