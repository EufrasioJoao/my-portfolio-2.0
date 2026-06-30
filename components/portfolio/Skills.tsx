"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const skills = [
  {
    category: "frontend",
    items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Redux", "React Query"],
  },
  {
    category: "backend",
    items: ["Node.js", "Express", "MySQL", "MongoDB", "Prisma", "GraphQL"],
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
    category: "databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
];

export function Skills() {
  const { language } = useLanguage();
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-muted/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {translations.skills.label[language]}
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            {translations.skills.title[language]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-5 rounded-2xl bg-background border border-border"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                {translations.skills.categories[skill.category as keyof typeof translations.skills.categories][language]}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs bg-muted rounded-full border border-border hover:bg-foreground hover:text-background hover:scale-105 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
