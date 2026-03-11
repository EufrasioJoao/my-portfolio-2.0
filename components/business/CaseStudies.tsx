"use client";

import { motion } from "framer-motion";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects I've built that are making a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <div className="text-5xl font-bold mb-2">2,500+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Active Clients
            </div>
            <h3 className="text-xl font-bold mb-2">LeadsAI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered sales automation serving thousands of businesses. 
              Increased average sales by 40% while reducing response time to seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <div className="text-5xl font-bold mb-2">1,000+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Active Users
            </div>
            <h3 className="text-xl font-bold mb-2">Fluxime</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Complete financial management platform with WhatsApp AI assistant. 
              Helping individuals and businesses gain control of their finances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Mozambican Focus
            </div>
            <h3 className="text-xl font-bold mb-2">Flock</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Business social network connecting Mozambican companies. 
              Creating a professional ecosystem for collaboration and growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
