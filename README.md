# Ziad Naboulsi — Video Editor & Director

A minimal, cinematic portfolio showcasing video editing, directing, and production work across commercial, broadcast, and independent film.

![Portfolio Preview](src/assets/hero-bg.jpg)

## 🎬 About

This portfolio presents selected work for clients including SSC, Milq Records, Wings for Hope, Advert Communications, and LBC. Based in Beirut, Lebanon.

**Services:**
- Video Editing (Short & Long Form)
- Directing & Camera Operation
- Color Grading
- Motion Graphics
- Sound Design

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router
- **UI Components:** shadcn/ui
- **Build Tool:** Vite

## 🚀 Getting Started

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
src/
├── assets/          # Images, thumbnails, stills
├── components/      # Reusable UI components
├── data/            # Project data and content
├── pages/           # Route pages (Home, Work, About, Contact)
└── hooks/           # Custom React hooks
```

## 📝 Updating Content

### Projects
Edit `src/data/projects.ts` to add or modify portfolio pieces:

```typescript
{
  id: "project-slug",
  title: "Project Title",
  category: "commercial" | "social" | "broadcast" | "film",
  thumbnail: thumbnailImage,
  videoUrl: "https://vimeo.com/...",
  description: "Project description.",
  role: "Director / Editor",
  year: "2024",
  deliverables: "Hero Film • Social Package",
}
```

### Thumbnails
Replace images in `src/assets/` with actual frames from your videos. Use 16:9 aspect ratio for consistency.

### Showreel
Update the Vimeo embed URL in `src/pages/Index.tsx` (search for `player.vimeo.com`).

## 📧 Contact

- **Email:** [your-email]
- **WhatsApp:** +961 70 664 916
- **Location:** Beirut, Lebanon

## 📄 License

© 2024 Ziad Naboulsi. All rights reserved.
