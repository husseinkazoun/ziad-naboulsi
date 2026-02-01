import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getProjectById, getAdjacentProjects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  const { prev, next } = getAdjacentProjects(id || "");

  if (!project) {
    return (
      <Layout>
        <SEO title="Project Not Found" />
        <div className="py-24 text-center">
          <h1 className="font-heading text-3xl font-bold mb-6">Project Not Found</h1>
          <Link to="/work" className="text-sm hover:underline underline-offset-4">
            ← Back to Work
          </Link>
        </div>
      </Layout>
    );
  }

  const categoryLabels: Record<string, string> = {
    commercial: "Commercial",
    social: "Social",
    broadcast: "Broadcast",
    film: "Film",
  };

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
      />

      <article className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
              {categoryLabels[project.category]}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              {project.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {project.role} · {project.year} · {project.deliverables}
            </p>
          </motion.header>

          {/* Video Embed Area */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="relative aspect-video bg-secondary rounded-md overflow-hidden mb-12"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Watch on {project.videoUrl.includes("instagram") ? "Instagram" : project.videoUrl.includes("vimeo") ? "Vimeo" : "YouTube"}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-lg font-semibold mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>

            {project.credits && (
              <div className="mt-10 pt-10 border-t border-border">
                <h3 className="font-heading text-base font-semibold mb-3">Credits</h3>
                <p className="text-muted-foreground text-sm">{project.credits}</p>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-20 pt-10 border-t border-border flex justify-between items-center"
          >
            {prev ? (
              <Link
                to={`/work/${prev.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div>
                  <span className="text-xs uppercase tracking-wider">Previous</span>
                  <p className="font-heading text-sm font-medium">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`/work/${next.id}`}
                className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider">Next</span>
                  <p className="font-heading text-sm font-medium">{next.title}</p>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </motion.nav>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
