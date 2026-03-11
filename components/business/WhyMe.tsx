"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Target } from "lucide-react";

export function WhyMe() {
  return (
    <section id="why-me" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Work With Me?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I bring technical expertise, business understanding, and proven results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <Zap className="w-12 h-12 mb-4 text-foreground" />
            <h3 className="text-2xl font-bold mb-3">Fast & Efficient</h3>
            <p className="text-muted-foreground leading-relaxed">
              I deliver quality work on time. My experience allows me to anticipate challenges 
              and solve problems quickly, keeping your project on track.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <Shield className="w-12 h-12 mb-4 text-foreground" />
            <h3 className="text-2xl font-bold mb-3">Reliable & Professional</h3>
            <p className="text-muted-foreground leading-relaxed">
              Clear communication, transparent processes, and consistent delivery. 
              You'll always know the status of your project and what to expect next.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <Target className="w-12 h-12 mb-4 text-foreground" />
            <h3 className="text-2xl font-bold mb-3">Business-Focused</h3>
            <p className="text-muted-foreground leading-relaxed">
              I don't just write code—I solve business problems. Every technical decision 
              is made with your business goals and ROI in mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <CheckCircle className="w-12 h-12 mb-4 text-foreground" />
            <h3 className="text-2xl font-bold mb-3">Proven Track Record</h3>
            <p className="text-muted-foreground leading-relaxed">
              20+ successful projects, 20K+ users served, and 98% client satisfaction. 
              My work speaks for itself through real results and happy clients.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Projects Delivered" },
            { number: "20K+", label: "Users Served" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background border border-border rounded-2xl"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
