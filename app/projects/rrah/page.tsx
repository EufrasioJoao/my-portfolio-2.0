"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function RRAHProject() {
  const { language } = useLanguage();
  const t = translations.projectPages;
  const p = t.rrah;

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
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">{p.tag[language]}</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Rebirth Against Heaven</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">{p.subtitle[language]}</p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-background border border-border rounded-full text-sm">{tech}</span>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <a href="https://rebirth-against-heaven.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition-all">
              <ExternalLink className="w-4 h-4" />
              {t.visitWebsite[language]}
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border">
          <img src="/rah.png" alt="Rebirth Against Heaven" className="w-full object-cover" />
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">{p.overview[language]}</h2>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">{p.overviewP1[language]}</p>
          <p className="text-lg text-muted-foreground leading-[1.8]">{p.overviewP2[language]}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">{p.whatBuilt[language]}</h2>
          <div className="space-y-6">
            {[
              { title: p.f1Title[language], desc: p.f1Desc[language] },
              { title: p.f2Title[language], desc: p.f2Desc[language] },
              { title: p.f3Title[language], desc: p.f3Desc[language] },
              { title: p.f4Title[language], desc: p.f4Desc[language] },
              { title: p.f5Title[language], desc: p.f5Desc[language] },
              { title: p.f6Title[language], desc: p.f6Desc[language] },
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
          <h2 className="text-3xl font-display font-bold mb-6">{p.design[language]}</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-[1.8]">
            <p>{p.designP1[language]}</p>
            <p>{p.designP2[language]}</p>
            <p>{p.designP3[language]}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">{p.scope[language]}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "6+", label: p.stat1Label[language] },
              { value: "Wiki", label: p.stat2Label[language] },
              { value: "Audio", label: p.stat3Label[language] },
              { value: "200+", label: p.stat4Label[language] },
            ].map((stat) => (
              <div key={stat.label} className="p-6 border border-border rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
