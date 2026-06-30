"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function FluximeProject() {
  const { language } = useLanguage();
  const t = translations.projectPages;
  const p = t.fluxime;

  return (
    <main className="min-h-screen">
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full hover:border-foreground transition-all shadow-sm">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">{t.backToPortfolio[language]}</span>
        </Link>
      </div>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Fluxime</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{p.subtitle[language]}</p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Next.js", "WhatsApp API", "MySQL", "AI"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-background border border-border rounded-full text-sm">{tech}</span>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <a href="https://fluxime.saphirat.co.mz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition-all">
              <ExternalLink className="w-4 h-4" />
              {t.visitWebsite[language]}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">{p.problem[language]}</h2>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">{p.problemP1[language]}</p>
          <p className="text-lg text-muted-foreground leading-[1.8]">{p.problemP2[language]}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">{p.solution[language]}</h2>
          <div className="space-y-8">
            {[
              { title: p.s1Title[language], desc: p.s1Desc[language] },
              { title: p.s2Title[language], desc: p.s2Desc[language] },
              { title: p.s3Title[language], desc: p.s3Desc[language] },
              { title: p.s4Title[language], desc: p.s4Desc[language] },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-[1.8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">{p.journey[language]}</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-[1.8]">
            <p>{p.journeyP1[language]}</p>
            <p>{p.journeyP2[language]}</p>
            <p>{p.journeyP3[language]}</p>
            <p>{p.journeyP4[language]}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">{p.impact[language]}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{p.stat1Label[language]}</div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{p.stat2Label[language]}</div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{p.stat3Label[language]}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
