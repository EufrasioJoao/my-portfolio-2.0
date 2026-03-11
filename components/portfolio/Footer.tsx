'use client'
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Eufrásio Jaime. {translations.footer.rights[language]}
        </p>
        
        <div className="flex gap-8 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            {translations.footer.about[language]}
          </a>
          <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
            {translations.footer.work[language]}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            {translations.footer.contact[language]}
          </a>
        </div>
      </div>
    </footer>
  );
}
