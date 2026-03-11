"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Projects() {
  const { language } = useLanguage();
  return (
    <section id="work" className="py-32 px-6 relative overflow-hidden bg-muted/20">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-muted/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-muted/30 rounded-full blur-3xl -z-10" />
      
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
              {translations.projects.label[language]}
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            {translations.projects.title[language]}
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Flock */}
          <motion.a
            href="/projects/flock"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group block rounded-2xl  bg-background border border-border hover:border-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/0 to-muted/0 group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-500 -z-10" />
            
            <div className="w-full aspect-video bg-muted/30 rounded-xl mb-6 flex items-center justify-center text-6xl">
              <img className='w-full h-full scale-[1.03]' src="/flock.png" alt="Flock"/>
            </div>
            
            <div className="p-6 pt-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">2025</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-foreground transition-colors">
                Flock
              </h3>
              
              <p className="text-muted-foreground mb-3 leading-[1.8] text-sm">
                {translations.projects.flock.description[language]}
              </p>
              
              <p className="text-xs text-foreground/60 mb-4 font-medium">
                {translations.projects.flock.metrics[language]}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Prisma", "MySQL"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-muted rounded-full border border-border group-hover:border-foreground transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>

          {/* Fluxime */}
          <motion.a
            href="/projects/fluxime"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group block rounded-2xl  bg-background border border-border hover:border-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/0 to-muted/0 group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-500 -z-10" />
            
            <div className="w-full aspect-video bg-muted/30 rounded-xl mb-6 flex items-center justify-center text-6xl">
              <img className='w-full h-full scale-[1.03]' src="/fluxime.png" alt="Fluxime"/>
            </div>
            
            <div className="p-6 pt-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">2024</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-foreground transition-colors">
                Fluxime
              </h3>
              
              <p className="text-muted-foreground mb-3 leading-[1.8] text-sm">
                {translations.projects.fluxime.description[language]}
              </p>
              
              <p className="text-xs text-foreground/60 mb-4 font-medium">
                {translations.projects.fluxime.metrics[language]}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Prisma", "MySQL", "Gemini AI"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-muted rounded-full border border-border group-hover:border-foreground transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>

          {/* LeadsAI */}
          <motion.a
            href="/projects/leadsai"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group block rounded-2xl  bg-background border border-border hover:border-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/0 to-muted/0 group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-500 -z-10" />
            
            <div className="w-full aspect-video bg-muted/30 rounded-xl mb-6 flex items-center justify-center text-6xl">
              <img className='w-full h-full scale-[1.03]' src="/leadsai.png" alt="LeadsAI"/>
            </div>
            
            <div className="p-6 pt-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">2024</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-foreground transition-colors">
                LeadsAI
              </h3>
              
              <p className="text-muted-foreground mb-3 leading-[1.8] text-sm">
                {translations.projects.leadsai.description[language]}
              </p>
              
              <p className="text-xs text-foreground/60 mb-4 font-medium">
                {translations.projects.leadsai.metrics[language]}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Express", "OpenAI", "Prisma", "MySQL"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-muted rounded-full border border-border group-hover:border-foreground transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
