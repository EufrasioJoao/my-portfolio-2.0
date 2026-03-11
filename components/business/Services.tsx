"use client";

import { motion } from "framer-motion";
import { Code, Zap, Users, CheckCircle } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How I Can Help Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions from concept to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-background border border-border rounded-2xl hover:border-foreground hover:shadow-lg transition-all"
          >
            <Code className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Custom Development</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I build web and mobile applications tailored to your specific needs. 
              From MVPs to enterprise solutions, scalable and maintainable.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">Full-stack web applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">Mobile apps (iOS & Android)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">API development & integration</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-background border border-border rounded-2xl hover:border-foreground hover:shadow-lg transition-all"
          >
            <Zap className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">AI Automation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I integrate AI to automate your workflows, improve customer service, 
              and unlock new revenue opportunities for your business.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">WhatsApp chatbots & automation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">Sales & lead qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">Process automation & insights</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-background border border-border rounded-2xl hover:border-foreground hover:shadow-lg transition-all"
          >
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Technical Consulting</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I provide strategic guidance on technology decisions, architecture, 
              and best practices to ensure your project's long-term success.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">Technology stack selection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">Code reviews & optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">Team training & mentoring</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
