"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function About() {
  const { language } = useLanguage();
  return (
    <section id="about" className="pt-32 pb-15 px-6 relative overflow-hidden  shadow">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-muted/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-muted/40 rounded-full blur-3xl -z-10" />
      
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
              {translations.about.label[language]}
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight max-w-3xl">
            {translations.about.title[language]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Profile Image Placeholder */}
            <div className="aspect-auto rounded-3xl bg-muted/30 overflow-hidden border border-border shadow-md">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <img src={'/me.png'} className="w-full h-full"/>               
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-[1.8]">
                {translations.about.paragraph1[language]}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-muted-foreground leading-[1.8]">
                {translations.about.paragraph2[language]}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground leading-[1.8]">
                {translations.about.paragraph3[language]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={language === "pt" ? "/resume-pt" : "/resume"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-medium text-sm"
              >
                {language === "pt" ? "Ver Currículo" : "View Resume"}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 "
        >
          {[
            { number: "5+", label: translations.about.stats.years[language] },
            { number: "20+", label: translations.about.stats.projects[language] },
            { number: "20K+", label: translations.about.stats.users[language] },
            { number: "98%", label: translations.about.stats.satisfaction[language] },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-foreground hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
