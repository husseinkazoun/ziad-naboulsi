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
  isFeatured?: boolean;
}

const VideoCard = ({
  title,
  role,
  vimeoId,
  thumbnail,
  index = 0,
  isVertical = false,
  isFeatured = false,
}: VideoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const embedHtml = getVimeoEmbed(vimeoId);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        viewport={{ once: true, margin: "-50px" }}
        className={isFeatured ? "md:col-span-1" : ""}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 rounded-md"
        >
          <div
            className={`relative overflow-hidden rounded-md bg-secondary ${
              isVertical ? "aspect-[9/16]" : "aspect-video"
            }`}
          >
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Play button - always visible but subtle, more prominent on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`
                ${isFeatured ? "w-20 h-20" : "w-14 h-14"}
                rounded-full bg-foreground/80 backdrop-blur-sm
                flex items-center justify-center
                opacity-70 group-hover:opacity-100
                scale-90 group-hover:scale-100
                transition-all duration-300 ease-out
                shadow-2xl
              `}>
                <Play
                  className={`${isFeatured ? "w-8 h-8" : "w-6 h-6"} text-background ml-1`}
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
          <div className={`${isFeatured ? "mt-5" : "mt-4"}`}>
            <h3 className={`
              font-heading font-semibold leading-tight
              group-hover:text-muted-foreground transition-colors duration-200
              ${isFeatured ? "text-lg md:text-xl" : "text-base"}
            `}>
              {title}
            </h3>
            <p className={`
              mt-1.5 text-muted-foreground uppercase tracking-wider
              ${isFeatured ? "text-xs" : "text-[11px]"}
            `}>
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
          isVertical={isVertical}
        />
      )}
    </>
  );
};

export default VideoCard;
