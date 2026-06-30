"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function SigaeProject() {
  const { language } = useLanguage();
  const t = translations.projectPages;
  const p = t.sigae;

  const modules = [
    "Cadastro de Munícipes (CIM)", "Atestados e Declarações", "Licenças e Alvarás",
    "Cobranças de Mercado", "Taxas de Transporte", "Cobrança de Cargas", "Ambulantes",
    "IPRA e IPA", "Tesouraria", "Requisições Internas", "Requisições Externas",
    "Processos de Pagamento", "Expedientes Físicos", "Gestão de Património",
    "Obras Públicas", "Denúncias de Cidadãos", "Relatórios Diários",
    "Gestão de Utilizadores", "Backups Automáticos", "Auditoria de Ações",
  ];

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
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Município de Milange · 2025</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">SIGAE</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            {language === "pt"
              ? "Sistema Integrado de Gestão Autárquica — plataforma completa de digitalização da gestão municipal de Milange."
              : "Integrated Municipal Management System — full platform for digitalizing municipal management of Milange."}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["React Native", "Next.js", "Electron", "Vite", "Node.js", "Prisma", "MySQL"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-background border border-border rounded-full text-sm">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border">
          <img src="/sigae.png" alt="SIGAE" className="w-full object-cover" />
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
          <div className="space-y-6">
            {[
              { icon: "📱", title: p.s1Title[language], desc: p.s1Desc[language] },
              { icon: "🌐", title: p.s2Title[language], desc: p.s2Desc[language] },
              { icon: "🖥️", title: p.s3Title[language], desc: p.s3Desc[language] },
              { icon: "⚙️", title: p.s4Title[language], desc: p.s4Desc[language] },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-border rounded-2xl">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">{p.architecture[language]}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: p.arch1Title[language], desc: p.arch1Desc[language] },
              { title: p.arch2Title[language], desc: p.arch2Desc[language] },
              { title: p.arch3Title[language], desc: p.arch3Desc[language] },
              { title: p.arch4Title[language], desc: p.arch4Desc[language] },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-border rounded-2xl bg-background">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">{p.modules[language]}</h2>
          <div className="flex flex-wrap gap-3">
            {modules.map((mod) => (
              <span key={mod} className="text-xs px-3 py-2 bg-muted border border-border rounded-full">{mod}</span>
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
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">{p.impact[language]}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "4", label: p.stat1Label[language] },
              { value: "13+", label: p.stat2Label[language] },
              { value: "20+", label: p.stat3Label[language] },
              { value: "50+", label: p.stat4Label[language] },
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
