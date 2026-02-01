import thumbBrandCampaign from "@/assets/thumb-brand-campaign.jpg";
import thumbSocialSeries from "@/assets/thumb-social-series.jpg";
import thumbDocumentary from "@/assets/thumb-documentary.jpg";
import thumbMusicVideo from "@/assets/thumb-music-video.jpg";
import thumbTechLaunch from "@/assets/thumb-tech-launch.jpg";
import thumbFashion from "@/assets/thumb-fashion.jpg";
import thumbBroadcast from "@/assets/thumb-broadcast.jpg";
import thumbShortFilm from "@/assets/thumb-short-film.jpg";
import thumbCulinary from "@/assets/thumb-culinary.jpg";

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
    thumbnail: thumbBrandCampaign,
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
    thumbnail: thumbTechLaunch,
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
    thumbnail: thumbDocumentary,
    videoUrl: "https://vimeo.com/1160749870",
    vimeoId: "1160749870",
    description: "Collaborative project for milq.records featuring Cornflex and Synaptik.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Music Video",
    featured: true,
  },
  {
    id: "the-crow-outlet-sportswear",
    title: "The Crow Outlet Sportswear",
    category: "commercial",
    thumbnail: thumbFashion,
    videoUrl: "https://vimeo.com/1160737812",
    vimeoId: "1160737812",
    description: "Dynamic sportswear commercial showcasing athletic apparel. High-energy visuals with contemporary editing style.",
    role: "Videographer / Editor",
    year: "2024",
    deliverables: "Commercial Spot",
    credits: "Client: The Crow Outlet",
  },
  {
    id: "trading-ad",
    title: "Trading Ad",
    category: "commercial",
    thumbnail: thumbBroadcast,
    videoUrl: "https://vimeo.com/1160738000",
    vimeoId: "1160738000",
    description: "Fast-paced trading platform advertisement. Sleek motion graphics and dynamic editing for fintech.",
    role: "Video Editor",
    year: "2024",
    deliverables: "Commercial Spot",
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
  {
    id: "solo-films",
    title: "Solo Films",
    category: "film",
    thumbnail: thumbShortFilm,
    videoUrl: "https://vimeo.com/1160733719",
    vimeoId: "1160733719",
    description: "Collaborative film project showcasing cinematic storytelling. On-set production work spanning camera and lighting.",
    role: "Spark / 1st Camera / Gaffer",
    year: "2024",
    deliverables: "Film Production",
    credits: "Production: Solo Films",
  },
  {
    id: "sakr-furniture",
    title: "Sakr Furniture",
    category: "commercial",
    thumbnail: thumbCulinary,
    videoUrl: "https://vimeo.com/1160737642",
    vimeoId: "1160737642",
    description: "Elegant furniture showcase highlighting craftsmanship and design. Clean visuals with attention to detail.",
    role: "Editor",
    year: "2024",
    deliverables: "Commercial Spot",
    credits: "Client: Sakr Furniture",
  },
];

export const clients = [
  "The Crow Outlet",
  "Merhbi",
  "Wings for Hope",
  "SSC",
  "Milq Records",
  "Solo Films",
  "Sakr Furniture",
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
