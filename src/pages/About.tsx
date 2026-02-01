import { motion } from "framer-motion";
import { Film, Globe, Camera, Tv, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import stillHorse from "@/assets/still-horse.webp";

const About = () => {
  const experience = [
    {
      role: "Freelance Videographer & Editor",
      company: "Self-Employed",
      period: "2022 – Present",
      description: "Working with brands, agencies, and production houses across Lebanon and the region.",
    },
    {
      role: "Video Editor",
      company: "Solo Films",
      period: "2021 – 2022",
      description: "Edited commercials, documentaries, and branded content for regional clients.",
    },
    {
      role: "Junior Editor",
      company: "Advert Communications",
      period: "2020 – 2021",
      description: "Started my professional journey editing social media content and corporate videos.",
    },
  ];

  const tools = [
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Adobe Audition",
    "DaVinci Resolve",
    "Logic Pro X",
    "Final Cut Pro",
  ];

  const gear = [
    "Sony FX3 / A7S III",
    "DJI Ronin RS3 Pro",
    "Aputure Lighting",
    "Sennheiser Audio",
    "DJI Drones",
  ];

  return (
    <Layout>
      <SEO
        title="About"
        description="Learn more about Ziad Naboulsi — videographer and editor based in Lebanon with experience across commercial, broadcast, and film."
      />

      {/* Hero About Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} viewport={{
            once: true
          }} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img src={stillHorse} alt="On set" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} viewport={{
            once: true
          }}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                About
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ziad Naboulsi
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 text-[15px]">
                With over a decade of experience in video production, I bring a cinematic sensibility to every project—whether it's a 30-second commercial, a multi-episode documentary series, or a feature film. My work spans brands, broadcasters, NGOs, and independent filmmakers, always with a focus on visual storytelling that connects and resonates.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Film className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">10+ Years</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Editing & Directing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">MENA Region</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Lebanon, KSA, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">Full Service</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Edit, Color, Motion</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Tv className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold">Based in Beirut</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Remote & On-Site</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4
        }} viewport={{
          once: true
        }} className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
              What I Do
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-3xl mx-auto">
            <motion.div initial={{
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
          }}>
              <h3 className="font-heading text-lg font-semibold mb-5">Post-Production</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Video Editing (Short & Long Form)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Color Grading
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Motion Graphics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Sound Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Subtitles & Localization
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <h3 className="font-heading text-lg font-semibold mb-5">Production</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Directing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Camera Operation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Lighting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Location Scouting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  Project Management
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mb-20"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8">Background</h1>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-xl font-semibold mb-10">Experience</h2>
            <div className="space-y-10">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="border-l border-border pl-8 relative"
                >
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-muted-foreground" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.period}</span>
                  <h3 className="font-heading text-base font-semibold mt-2">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Gear */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-xl font-semibold mb-8">Tools</h2>
              <ul className="space-y-3">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-xl font-semibold mb-8">Gear</h2>
              <ul className="space-y-3">
                {gear.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Education & Languages */}
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-xl font-semibold mb-8">Education</h2>
              <div>
                <h3 className="font-heading text-base font-semibold">BA in Communication</h3>
                <p className="text-sm text-muted-foreground mt-1">Lebanese International University</p>
                <p className="text-xs text-muted-foreground mt-1">Class of 2022</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-xl font-semibold mb-8">Languages</h2>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  <span className="text-foreground">Arabic</span> — Native
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground">English</span> — Professional
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
