"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const experiences = [
  {
    company: "Flexibilidade Lda",
    position: "flexibilidade",
    location: "Nampula, Moçambique",
    period: "Aug 2023 - Present",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    company: "Freelance & Consulting",
    position: "freelance",
    location: "Remote",
    period: "Jan 2021 - Aug 2023",
    technologies: ["React", "Next.js", "Python", "Node.js", "Supabase", "Vercel"],
    isFreelance: true,
  },
  {
    company: "FlexTech",
    position: "flextech",
    location: "Nampula, Moçambique",
    period: "Jun 2019 - Dec 2020",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Express", "CSS"],
  },
];

export function Experience() {
  const { language } = useLanguage();
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30 -z-10" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-muted/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-muted/40 rounded-full blur-3xl -z-10" />
      
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
              {translations.experience.label[language]}
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            {translations.experience.title[language]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Flexibilidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-3xl transition-all duration-300 bg-background border border-foreground shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/0 to-muted/0 group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-300 -z-10" />
            
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-foreground text-background rounded-full text-xs font-medium">
                <div className="w-2 h-2 rounded-full bg-background animate-pulse" />
                {translations.experience.current[language]}
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              <span className="text-sm font-medium">{experiences[0].period}</span>
            </div>

            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-foreground transition-colors">
              {translations.experience.flexibilidade.position[language]}
            </h3>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="font-semibold">{experiences[0].company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{experiences[0].location}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-[1.8]">
              {translations.experience.flexibilidade.description[language]}
            </p>

            <div className="space-y-3 mb-6">
              {translations.experience.flexibilidade.achievements.map((achievement: any, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-[1.8]">{achievement[language]}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {experiences[0].technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-muted text-xs rounded-full hover:bg-foreground hover:text-background transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Freelance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-8 rounded-3xl transition-all duration-300 bg-background border border-border hover:border-foreground hover:shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/0 to-muted/0 group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-300 -z-10" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm font-medium">{experiences[1].period}</span>
            </div>

            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-foreground transition-colors">
              {translations.experience.freelance.position[language]}
            </h3>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="font-semibold">{translations.experience.freelance.company[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{experiences[1].location}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-[1.8]">
              {translations.experience.freelance.description[language]}
            </p>

            <div className="space-y-3 mb-6">
              {translations.experience.freelance.achievements.map((achievement: any, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-[1.8]">{achievement[language]}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {experiences[1].technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-muted text-xs rounded-full hover:bg-foreground hover:text-background transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Freelance experience - full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative p-8 rounded-3xl transition-all duration-300 bg-background border border-border hover:border-foreground hover:shadow-xl overflow-hidden mt-8"
        >
          {/* Gradient accent on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/0 to-muted/0 group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-300 -z-10" />
          
          {/* Company badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-foreground" />
            <span className="text-sm font-medium">{experiences[2].period}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-foreground transition-colors">
                {translations.experience.flextech.position[language]}
              </h3>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-semibold">{experiences[2].company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{experiences[2].location}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-[1.8]">
                {translations.experience.flextech.description[language]}
              </p>
            </div>

            <div>
              <div className="space-y-3 mb-6">
                {translations.experience.flextech.achievements.map((achievement: any, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-[1.8]">{achievement[language]}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {experiences[2].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-muted text-xs rounded-full hover:bg-foreground hover:text-background transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
