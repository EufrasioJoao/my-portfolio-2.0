"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const skills = [
  {
    category: "frontend",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion", "Redux", "React Query"],
  },
  {
    category: "backend",
    items: ["Node.js", "Python", "Express", "FastAPI", "MySQL", "MongoDB", "Prisma", "GraphQL"],
  },
  {
    category: "cloudDevops",
    items: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"],
  },
  {
    category: "mobile",
    items: ["React Native", "Expo", "iOS", "Android", "App Store", "Play Store"],
  },
  {
    category: "toolsDesign",
    items: ["Git", "Figma", "VS Code", "Postman", "Linear", "Notion", "Slack"],
  },
  {
    category: "databases",
    items: ["MySQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
];

export function Skills() {
  const { language } = useLanguage();
  return (
    <section id="skills" className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-muted/40 to-transparent" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-muted/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-muted/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {translations.skills.label[language]}
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            {translations.skills.title[language]}
          </h2>
        </motion.div>
        
        <div className="space-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-foreground group-hover:w-12 transition-all" />
                {translations.skills.categories[skill.category as keyof typeof translations.skills.categories][language]}
              </h3>
              <div className="flex flex-wrap gap-3 pl-11">
                {skill.items.map((item, index) => (
                  <span
                    key={index+'8'}
                    className="px-4 py-2 bg-background text-sm rounded-full hover:bg-foreground hover:text-background hover:scale-105 transition-all cursor-default shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
