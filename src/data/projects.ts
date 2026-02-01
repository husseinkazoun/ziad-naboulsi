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
  description: string;
  role: string;
  year: string;
  deliverables: string;
  credits?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ssc-sports-stories",
    title: "SSC رياضة وحكايات",
    category: "broadcast",
    thumbnail: thumbBrandCampaign,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "A sports documentary series for Saudi Sports Channel exploring the human stories behind athletes. Intimate interviews combined with dynamic game footage.",
    role: "Director / Editor",
    year: "2024",
    deliverables: "12-Episode Series • Promos",
    credits: "Client: SSC • Production: Solo Films",
    featured: true,
  },
  {
    id: "milq-records-sessions",
    title: "Milq Records Sessions",
    category: "social",
    thumbnail: thumbSocialSeries,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "Live performance series capturing emerging artists in stripped-back studio sessions. Raw audio meets cinematic visuals.",
    role: "Director / Editor",
    year: "2024",
    deliverables: "8x Sessions • Social Cuts",
    credits: "Client: Milq Records",
    featured: true,
  },
  {
    id: "wings-for-hope",
    title: "Wings for Hope Campaign",
    category: "commercial",
    thumbnail: thumbDocumentary,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "Fundraising campaign for children's education in Lebanon. Documentary-style storytelling focused on impact and hope.",
    role: "Director / Editor / Colorist",
    year: "2024",
    deliverables: "Hero Film • Social Package",
    credits: "Client: Wings for Hope NGO",
    featured: true,
  },
  {
    id: "echoes-music-video",
    title: "Echoes — Music Video",
    category: "film",
    thumbnail: thumbMusicVideo,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "Conceptual music video exploring themes of memory and loss. Choreographed movement in atmospheric locations.",
    role: "Director / Editor",
    year: "2023",
    deliverables: "4min Music Video",
  },
  {
    id: "advert-tech-launch",
    title: "Advert Communications Launch",
    category: "commercial",
    thumbnail: thumbTechLaunch,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "Brand launch video for Advert Communications' rebrand. Sleek corporate storytelling with motion graphics integration.",
    role: "Lead Editor / Motion",
    year: "2024",
    deliverables: "Launch Film • Internal Cut",
    credits: "Client: Advert Communications",
  },
  {
    id: "summer-lookbook",
    title: "Summer Lookbook",
    category: "social",
    thumbnail: thumbFashion,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "Fashion-forward content for a seasonal collection. Mediterranean locations with contemporary editing.",
    role: "Editor",
    year: "2024",
    deliverables: "Campaign Video • Reels",
  },
  {
    id: "lbc-special-report",
    title: "LBC Special Report",
    category: "broadcast",
    thumbnail: thumbBroadcast,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "In-depth news package covering technological innovation in the region. Broadcast-standard storytelling.",
    role: "Editor",
    year: "2023",
    deliverables: "8min News Package",
    credits: "Client: LBC",
  },
  {
    id: "dawn-short-film",
    title: "Dawn — Short Film",
    category: "film",
    thumbnail: thumbShortFilm,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "Contemplative short film exploring renewal and hope. Official selection at Beirut Film Festival.",
    role: "Editor / Colorist",
    year: "2022",
    deliverables: "12min Short Film",
    credits: "Selection: Beirut Film Festival",
  },
  {
    id: "culinary-stories",
    title: "Culinary Stories",
    category: "commercial",
    thumbnail: thumbCulinary,
    videoUrl: "https://www.youtube.com/watch?v=example",
    description: "Promotional content for fine dining. Cinematic food photography meets chef-driven storytelling.",
    role: "Director / Editor",
    year: "2024",
    deliverables: "Brand Film • Social Package",
  },
];

export const clients = [
  "SSC رياضة وحكايات",
  "Milq Records",
  "Wings for Hope",
  "Advert Communications",
  "Solo Films",
  "LBC",
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
