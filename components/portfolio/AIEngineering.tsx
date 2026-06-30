"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const capabilities = [
  { icon: "🤖", label: "Google Gemini API" },
  { icon: "💬", label: "Conversational AI & Chatbots" },
  { icon: "📱", label: "WhatsApp AI Assistants" },
  { icon: "⚡", label: "Workflow Automation (Webhooks)" },
  { icon: "🔌", label: "REST APIs & AI Integrations" },
  { icon: "🛡️", label: "Prompt Engineering & Guardrails" },
  { icon: "🧠", label: "Multi-step AI Workflows" },
  { icon: "📄", label: "Document Processing & OCR" },
];

const stack = [
  "Google Gemini", "WhatsApp API", "Webhooks",
  "Prompt Engineering", "Node.js", "REST APIs",
  "Automation Pipelines", "JSON Schema", "Function Calling",
];

const projects = [
  {
    title: "Fluxime AI Assistant",
    descKey: "aiProject1Desc" as const,
    tags: ["WhatsApp API", "Gemini AI", "Node.js"],
  },
  {
    title: "AI Content Generation",
    descKey: "aiProject2Desc" as const,
    tags: ["Gemini AI", "Prompt Engineering", "REST API"],
  },
  {
    title: "Workflow Automation",
    descKey: "aiProject3Desc" as const,
    tags: ["Webhooks", "Node.js", "Automation"],
  },
];

export function AIEngineering() {
  const { language } = useLanguage();
  const t = translations.ai;

  return (
    <section id="ai" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--muted)/0.4),transparent)]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t.label[language]}
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t.title[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-[1.8]">
            {t.subtitle[language]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-display font-semibold mb-5">{t.whatIWorkWith[language]}</h3>
            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all group"
                >
                  <span className="text-xl w-8 text-center">{cap.icon}</span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {cap.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-display font-semibold mb-5">{t.aiProjects[language]}</h3>
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="p-5 rounded-2xl border border-border bg-background hover:border-foreground/30 transition-all"
                >
                  <h4 className="font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground leading-[1.7] mb-3">
                    {t[project.descKey][language]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-muted border border-border rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-lg font-display font-semibold mb-5">{t.aiStack[language]}</h3>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm bg-background border border-border rounded-full hover:bg-foreground hover:text-background hover:scale-105 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
