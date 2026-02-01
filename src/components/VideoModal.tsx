import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  embedHtml: string;
  title: string;
  isVertical?: boolean;
}

const VideoModal = ({ isOpen, onClose, embedHtml, title, isVertical = false }: VideoModalProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      // Lazy load: only render iframe when modal opens
      setShouldRender(true);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Add loading="lazy" to iframe
  const lazyEmbedHtml = embedHtml.replace(
    "<iframe",
    '<iframe loading="lazy"'
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/98 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`relative z-10 ${
              isVertical
                ? "w-full max-w-sm md:max-w-md"
                : "w-full max-w-5xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <p className="font-heading text-sm md:text-base font-medium text-foreground truncate pr-4">
                {title}
              </p>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video container */}
            <div
              className={`w-full rounded-lg overflow-hidden bg-black shadow-2xl ${
                isVertical ? "aspect-[9/16]" : ""
              }`}
            >
              {shouldRender && (
                <div dangerouslySetInnerHTML={{ __html: lazyEmbedHtml }} />
              )}
            </div>

            {/* Click outside hint */}
            <p className="text-center text-xs text-muted-foreground mt-4 opacity-60">
              Press ESC or click outside to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
