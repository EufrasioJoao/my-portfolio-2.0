"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  return (
    <section className="relative py-35 flex  justify-center px-6">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            {translations.hero.role[language]}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-6"
          >
            Eufrásio Jaime
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-[1.8]"
          >
            {translations.hero.description[language]}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full hover:bg-foreground/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              {translations.hero.cta[language]}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#work"
              className="inline-flex items-center gap-2 border-2 border-foreground px-8 py-4 rounded-full hover:bg-foreground hover:text-background hover:scale-105 transition-all"
            >
              {translations.hero.viewWork[language]}
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 mt-16"
          >
            <a href="https://github.com/EufrasioJoao" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-muted-foreground flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-muted-foreground flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:eufrasiojoao00@gmail.com" className="w-12 h-12 rounded-full border-2 border-muted-foreground flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">{translations.hero.scroll[language]}</span>
          <div className="w-[1px] h-12 bg-muted-foreground/30" />
        </div>
      </motion.div>
    </section>
  );
}
