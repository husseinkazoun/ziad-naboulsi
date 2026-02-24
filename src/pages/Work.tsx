import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import VideoCard from "@/components/VideoCard";
import { projects } from "@/data/projects";

// Import client thumbnails
import thumbWingsForHope from "@/assets/thumb-wings-for-hope.jpg";
import thumbMerehbi from "@/assets/thumb-merehbi.jpg";
import shahidLogo from "@/assets/shahid-logo.png";

// Import photography stills
import stillFruitVendor from "@/assets/still-fruit-vendor.jpg";
import stillChairsBw from "@/assets/still-chairs-bw.jpg";
import stillBaalbekTemple from "@/assets/still-baalbek-temple.jpg";
import stillBaalbekDetail from "@/assets/still-baalbek-detail.jpg";
import stillBaalbekColumns from "@/assets/still-baalbek-columns.jpg";
import stillBaalbekRuins from "@/assets/still-baalbek-ruins.jpg";
import stillBaalbekSky from "@/assets/still-baalbek-sky.jpg";

const clientVideos = [
  { name: "Wings for Hope", vimeoId: "1160738000", thumbnail: thumbWingsForHope },
  { name: "Merehbi Clothing Factory", vimeoId: "1160736857", thumbnail: thumbMerehbi },
];

const galleryImages = [
  { src: stillBaalbekTemple, alt: "Temple of Bacchus, Baalbek", orientation: "landscape" as const },
  { src: stillFruitVendor, alt: "Fruit vendor, street photography", orientation: "portrait" as const },
  { src: stillBaalbekColumns, alt: "Columns of Jupiter, Baalbek", orientation: "portrait" as const },
  { src: stillChairsBw, alt: "Two chairs, black and white", orientation: "portrait" as const },
  { src: stillBaalbekDetail, alt: "Carved stone detail, Baalbek", orientation: "portrait" as const },
  { src: stillBaalbekRuins, alt: "Temple ruins, Baalbek", orientation: "portrait" as const },
  { src: stillBaalbekSky, alt: "Columns against sky, Baalbek", orientation: "portrait" as const },
];

const Work = () => {
  const [activeClient, setActiveClient] = useState<string | null>(null);
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Fetch aspect ratios from Vimeo oEmbed
  useEffect(() => {
    const fetchAspectRatios = async () => {
      const ratios: Record<string, number> = {};
      await Promise.all(
        clientVideos.map(async (client) => {
          try {
            const response = await fetch(
              `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${client.vimeoId}`
            );
            if (response.ok) {
              const data = await response.json();
              ratios[client.vimeoId] = data.width / data.height;
            } else {
              ratios[client.vimeoId] = 16 / 9; // fallback
            }
          } catch {
            ratios[client.vimeoId] = 16 / 9; // fallback
          }
        })
      );
      setAspectRatios(ratios);
    };
    fetchAspectRatios();
  }, []);

  // Get projects for sections
  const allProjects = projects;
  const featuredProjects = allProjects.slice(0, 3);

  const activeClientVideo = clientVideos.find(c => c.name === activeClient);
  const activeAspectRatio = activeClientVideo 
    ? (aspectRatios[activeClientVideo.vimeoId] || 16 / 9)
    : 16 / 9;

  return (
    <Layout>
      <SEO
        title="Work"
        description="Explore a curated selection of video projects including commercials, social media content, broadcast work, and independent films."
      />

      {/* Showreel Section */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="flex flex-col gap-10 lg:gap-14">
            {/* SSC x Shahid Title */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-4 mb-2">
              <div className="flex items-center gap-4">
                <h2 className="font-heading text-2xl md:text-3xl font-bold">SSC x Shahid</h2>
                <img src={shahidLogo} alt="Shahid" className="h-8 md:h-10 object-contain" />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                Following athletes of all levels as they share their passion, challenges, and triumphs, the docuseries explores new horizons across the dynamic landscape of Saudi sports.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>Sports</span>
                <span>·</span>
                <span>Free Show</span>
              </div>
              <a href="https://shahid.mbc.net/en/shows/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9-%D9%88%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA/show-49923214668132" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors group">
                Watch on Shahid
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Video 1 - Kingdom Of Sport Diving */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="rounded-lg overflow-hidden bg-secondary shadow-2xl">
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe src="https://player.vimeo.com/video/1161526504?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=0&player_id=0&app_id=58479" frameBorder="0" allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Kingdom Of Sport - Diving" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Kingdom Of Sport - Diving | SSC x Shahid
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">Role: Video Editor</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Arts and Culture Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="flex flex-col gap-10 lg:gap-14">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Arts and Culture</h2>
            </motion.div>

            {/* Video 2 - Ali Abboud */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-4">
              <div className="rounded-lg overflow-hidden bg-secondary shadow-2xl">
                <div style={{ padding: "52.78% 0 0 0", position: "relative" }}>
                  <iframe src="https://player.vimeo.com/video/1160737812?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=0&player_id=0&app_id=58479" frameBorder="0" allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Ali abboud - Album teaser" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-16">
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Ali abboud- Album teaser</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">Role: Editor<br />Category: Commercial</p>
                </div>
                <a href="https://vimeo.com/1160737812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors group whitespace-nowrap sm:mt-8">
                  Watch on Vimeo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <motion.p initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4
              }} viewport={{
                once: true
              }} className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Portfolio
              </motion.p>
              <motion.h2 initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.05
              }} viewport={{
                once: true
              }} className="font-heading text-3xl md:text-4xl font-bold">
                Featured Work
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <VideoCard
                key={project.id}
                title={project.title}
                role={project.role}
                vimeoId={project.vimeoId}
                thumbnail={project.thumbnail}
                index={index}
                isFeatured
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-20 lg:py-28 border-t border-border/50 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="mb-12 lg:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3"
            >
              Photography
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold"
            >
              Stills
            </motion.h2>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 gap-4 lg:gap-5 space-y-4 lg:space-y-5">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative rounded-lg overflow-hidden bg-secondary">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Previous */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                className="absolute left-4 md:left-8 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-white rotate-180" />
              </button>
            )}

            {/* Next */}
            {lightboxIndex < galleryImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                className="absolute right-4 md:right-8 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects */}
      <section className="py-16 lg:py-20 border-y border-border/50 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70 text-center mb-10">
              Projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {clientVideos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-xs font-heading font-medium uppercase tracking-wider text-center text-muted-foreground">
                    {client.name}
                  </h3>
                  <div className="rounded-lg overflow-hidden bg-secondary shadow-xl">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${client.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=0&player_id=0&app_id=58479`}
                        frameBorder="0"
                        allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        title={client.name}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    
    </Layout>
  );
};

export default Work;
