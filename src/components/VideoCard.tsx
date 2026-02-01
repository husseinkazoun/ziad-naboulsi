import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import { getVimeoEmbed } from "@/data/vimeoEmbeds";

interface VideoCardProps {
  title: string;
  role: string;
  vimeoId: string;
  thumbnail: string;
  index?: number;
  isVertical?: boolean;
}

const VideoCard = ({
  title,
  role,
  vimeoId,
  thumbnail,
  index = 0,
  isVertical = false,
}: VideoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const embedHtml = getVimeoEmbed(vimeoId);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="group block w-full text-left"
        >
          <div
            className={`relative overflow-hidden rounded-sm bg-secondary ${
              isVertical ? "aspect-[9/16]" : "aspect-video"
            }`}
          >
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-foreground/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                <Play className="w-6 h-6 text-background ml-0.5" fill="currentColor" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="font-heading text-base font-semibold leading-tight group-hover:text-muted-foreground transition-colors">
              {title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">
              {role}
            </p>
          </div>
        </button>
      </motion.article>

      {embedHtml && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          embedHtml={embedHtml}
          title={title}
        />
      )}
    </>
  );
};

export default VideoCard;
