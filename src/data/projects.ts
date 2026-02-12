import thumbSocialSeries from "@/assets/thumb-social-series.jpg";
import thumbMusicVideo from "@/assets/thumb-music-video.jpg";
import thumbBroadcast from "@/assets/thumb-broadcast.jpg";
import thumbShortFilm from "@/assets/thumb-short-film.jpg";
import thumbCulinary from "@/assets/thumb-culinary.jpg";
import thumbMilqtour from "@/assets/thumb-milqtour.jpg";
import thumbSynaptikElrass from "@/assets/thumb-synaptik-elrass.jpg";
import thumbCornflex from "@/assets/thumb-cornflex.jpg";

export interface Project {
  id: string;
  title: string;
  category: "commercial" | "social" | "broadcast" | "film";
  thumbnail: string;
  videoUrl: string;
  vimeoId: string;
  description: string;
  role: string;
  year: string;
  deliverables: string;
  credits?: string;
  featured?: boolean;
  isVertical?: boolean;
}

export const projects: Project[] = [
  {
    id: "milqtour-main-promo",
    title: "MILQTOUR- main promo",
    category: "commercial",
    thumbnail: thumbMilqtour,
    videoUrl: "https://vimeo.com/1160745507",
    vimeoId: "1160745507",
    description: "Main promotional video for MILQTOUR. Dynamic visuals with high-energy editing.",
    role: "Videographer / Editor",
    year: "2024",
    deliverables: "Promo Video",
    featured: true,
  },
  {
    id: "synaptik-elrass-album",
    title: "Synaptik- ElRass Album release",
    category: "commercial",
    thumbnail: thumbSynaptikElrass,
    videoUrl: "https://vimeo.com/1160750533",
    vimeoId: "1160750533",
    description: "Album release video for Synaptik featuring ElRass. Cinematic storytelling meets music.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Music Video",
    featured: true,
  },
  {
    id: "cornflex-synaptik-milq",
    title: "Cornflex- Synaptik - milq.records",
    category: "commercial",
    thumbnail: thumbCornflex,
    videoUrl: "https://vimeo.com/1160749870",
    vimeoId: "1160749870",
    description: "Collaborative project for milq.records featuring Cornflex and Synaptik.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Music Video",
    featured: true,
  },
  {
    id: "merhbi-clothing-factory",
    title: "Merhbi Clothing Factory",
    category: "commercial",
    thumbnail: thumbShortFilm,
    videoUrl: "https://vimeo.com/1160745507",
    vimeoId: "1160745507",
    description: "Behind-the-scenes look at clothing manufacturing. Industrial aesthetics meet brand storytelling.",
    role: "Videographer / Editor",
    year: "2024",
    deliverables: "Brand Film",
    credits: "Client: Merhbi",
  },
  {
    id: "wings-for-hope",
    title: "Wings for Hope",
    category: "broadcast",
    thumbnail: thumbCulinary,
    videoUrl: "https://vimeo.com/1160749870",
    vimeoId: "1160749870",
    description: "Fundraising campaign for children's education in Lebanon. Documentary-style storytelling focused on impact and hope.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Hero Film • Social Package",
    credits: "Client: Wings for Hope NGO",
  },
  {
    id: "ssc-riyada-w-hkayat",
    title: "SSC Riyada w Hkayat",
    category: "broadcast",
    thumbnail: thumbBroadcast,
    videoUrl: "https://vimeo.com/1160750533",
    vimeoId: "1160750533",
    description: "Sports documentary series for Saudi Sports Channel exploring the human stories behind athletes. Intimate interviews combined with dynamic game footage.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Episode Series • Promos",
    credits: "Client: SSC • Production: Solo Films",
  },
  {
    id: "milq-records-reel-1",
    title: "Milq Records Reel 1",
    category: "social",
    thumbnail: thumbSocialSeries,
    videoUrl: "https://vimeo.com/1160736857",
    vimeoId: "1160736857",
    description: "Live performance series capturing emerging artists in stripped-back studio sessions. Raw audio meets cinematic visuals.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Social Reel",
    credits: "Client: Milq Records",
    isVertical: true,
  },
  {
    id: "milq-records-reel-2",
    title: "Milq Records Reel 2",
    category: "social",
    thumbnail: thumbMusicVideo,
    videoUrl: "https://vimeo.com/1160735239",
    vimeoId: "1160735239",
    description: "Continuation of the Milq Records session series. Showcasing musical talent through intimate visual storytelling.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Social Reel",
    credits: "Client: Milq Records",
    isVertical: true,
  },
];

export const clients = [
  "Merhbi",
  "Wings for Hope",
  "SSC",
  "Milq Records",
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Get standard (non-vertical) projects only
export const getStandardProjects = () => projects.filter((p) => !p.isVertical);

// Get vertical reels only
export const getVerticalReels = () => projects.filter((p) => p.isVertical);

export const getProjectsByCategory = (category: string) =>
  category === "all" ? projects : projects.filter((p) => p.category === category);

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const getAdjacentProjects = (id: string) => {
  const index = projects.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
};
