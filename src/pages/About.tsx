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

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a videographer and editor based in Beirut, Lebanon. I believe in the power of 
              visual storytelling to create meaningful connections between brands and their audiences.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              With a background spanning commercials, broadcast television, and independent film, 
              I bring a cinematic sensibility to every project. Whether it's a high-energy brand campaign 
              or an intimate documentary, I approach each story with intention and craft.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-heading text-2xl font-semibold mb-8">Experience</h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-accent pl-6 relative"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                  <h3 className="font-heading text-lg font-semibold mt-1">{item.role}</h3>
                  <p className="text-accent font-medium">{item.company}</p>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Gear */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-semibold mb-6">Tools</h2>
              <ul className="space-y-2">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-semibold mb-6">Gear</h2>
              <ul className="space-y-2">
                {gear.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Education & Languages */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-semibold mb-6">Education</h2>
              <div>
                <h3 className="font-heading font-semibold">BA in Communication</h3>
                <p className="text-muted-foreground">Lebanese International University</p>
                <p className="text-sm text-muted-foreground">Class of 2022</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-semibold mb-6">Languages</h2>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Arabic</span> — Native
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">English</span> — Professional
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
