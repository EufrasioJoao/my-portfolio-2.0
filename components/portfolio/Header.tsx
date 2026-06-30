"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const navItems = [
  { label: { en: "About", pt: "Sobre" }, href: "#about" },
  { label: { en: "Skills", pt: "Habilidades" }, href: "#skills" },
  { label: { en: "AI", pt: "IA" }, href: "#ai" },
  { label: { en: "Work", pt: "Trabalho" }, href: "#work" },
  { label: { en: "Contact", pt: "Contato" }, href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold">
            EJ
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label[language]}
              </a>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 p-1 border border-border rounded-full">
              <button
                onClick={() => setLanguage("en")}
                title="English"
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "en"
                    ? "bg-foreground text-background"
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                <img src="https://flagcdn.com/us.svg" alt="English" className="w-5 h-3.5 rounded-sm object-cover" />
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage("pt")}
                title="Português"
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "pt"
                    ? "bg-foreground text-background"
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                <img src="https://flagcdn.com/br.svg" alt="Português" className="w-5 h-3.5 rounded-sm object-cover" />
                <span>PT</span>
              </button>
            </div>
            
            <a
              href="#contact"
              className="bg-foreground text-background px-6 py-2 text-sm rounded-full hover:bg-foreground/90 hover:scale-105 transition-all shadow-md"
            >
              {language === "en" ? "Hire Me" : "Contratar"}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold hover:text-muted-foreground transition-colors"
                >
                  {item.label[language]}
                </motion.a>
              ))}
              
              {/* Language Toggle Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="flex items-center gap-2 p-1.5 border border-border rounded-full"
              >
                <button
                  onClick={() => { setLanguage("en"); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-medium transition-all ${
                    language === "en"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground"
                  }`}
                >
                  <img src="https://flagcdn.com/us.svg" alt="English" className="w-6 h-4 rounded-sm object-cover" />
                  <span>EN</span>
                </button>
                <button
                  onClick={() => { setLanguage("pt"); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-medium transition-all ${
                    language === "pt"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground"
                  }`}
                >
                  <img src="https://flagcdn.com/br.svg" alt="Português" className="w-6 h-4 rounded-sm object-cover" />
                  <span>PT</span>
                </button>
              </motion.div>
              
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-foreground text-background px-8 py-4 text-lg mt-4 rounded-full hover:scale-105 transition-transform"
              >
                {language === "en" ? "Hire Me" : "Contratar"}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
