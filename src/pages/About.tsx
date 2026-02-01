import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

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
