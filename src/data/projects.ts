export interface Project {
  id: string;
  title: string;
  category: "commercial" | "social" | "broadcast" | "film";
  thumbnail: string;
  videoUrl: string;
  description: string;
  role: string;
  year: string;
  deliverables: string;
  credits?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "brand-campaign-2024",
    title: "Brand Campaign 2024",
    category: "commercial",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "A cinematic brand campaign showcasing premium lifestyle products. Shot across multiple locations with a focus on visual storytelling and emotional connection.",
    role: "Director / Editor",
    year: "2024",
    deliverables: "60s Hero • 30s Cutdown • Social Cuts",
    credits: "Client: Premium Brand • Production: Solo Films",
    featured: true,
  },
  {
    id: "social-series-drops",
    title: "Social Series: Drops",
    category: "social",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.instagram.com/reel/example",
    description: "A series of short-form content pieces designed for maximum engagement on social platforms. Fast-paced editing with contemporary motion graphics.",
    role: "Editor / Motion Designer",
    year: "2024",
    deliverables: "12x Reels • Stories Package",
    featured: true,
  },
  {
    id: "documentary-short",
    title: "Behind The Craft",
    category: "broadcast",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "A documentary short exploring traditional craftsmanship in Lebanon. Intimate storytelling with a focus on preserving cultural heritage.",
    role: "Director / Editor / Colorist",
    year: "2023",
    deliverables: "15min Documentary",
    credits: "Aired on LBC • Award Nominee",
    featured: true,
  },
  {
    id: "music-video-echoes",
    title: "Echoes — Music Video",
    category: "film",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/watch?v=example2",
    description: "A visual journey through sound and emotion. Conceptual music video blending narrative and abstract imagery.",
    role: "Director / Editor",
    year: "2023",
    deliverables: "4min Music Video",
  },
  {
    id: "product-launch",
    title: "Tech Launch Event",
    category: "commercial",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    description: "Product reveal video for a major tech launch. Sleek visuals with dynamic motion graphics and 3D integration.",
    role: "Lead Editor",
    year: "2024",
    deliverables: "Launch Film • BTS Content",
  },
  {
    id: "fashion-lookbook",
    title: "Summer Lookbook",
    category: "social",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.instagram.com/reel/example2",
    description: "Fashion-forward content for a seasonal collection. Styled with bold colors and contemporary editing techniques.",
    role: "Editor",
    year: "2024",
    deliverables: "Campaign Video • Reels",
  },
  {
    id: "news-package",
    title: "Special Report: Innovation",
    category: "broadcast",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/watch?v=example4",
    description: "In-depth news package covering technological innovation in the region. Professional broadcast standards with compelling storytelling.",
    role: "Editor",
    year: "2023",
    deliverables: "8min News Package",
  },
  {
    id: "short-film-dawn",
    title: "Dawn — Short Film",
    category: "film",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/watch?v=example5",
    description: "A contemplative short film exploring themes of renewal and hope. Festival selection with critical acclaim.",
    role: "Editor / Colorist",
    year: "2022",
    deliverables: "12min Short Film",
    credits: "Official Selection: Beirut Film Festival",
  },
  {
    id: "restaurant-promo",
    title: "Culinary Stories",
    category: "commercial",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/watch?v=example6",
    description: "Mouth-watering promotional content for a fine dining establishment. Cinematic food photography meets storytelling.",
    role: "Director / Editor",
    year: "2024",
    deliverables: "Brand Film • Social Package",
  },
];

export const clients = [
  "LBC",
  "MTV Lebanon",
  "Advert Communications",
  "Solo Films",
  "Premium Brands",
  "Tech Startups",
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

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
