"use client";

import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about" className="pt-32 pb-15 px-6 relative overflow-hidden shadow">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-muted/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-muted/40 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              About Me
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight max-w-3xl">
            A developer who understands business.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="aspect-square rounded-3xl bg-muted/30 overflow-hidden border border-border shadow-md">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <img src={'/me.jpeg'} alt="Eufrásio Jaime" className="w-full h-full object-cover"/>               
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-[1.8]">
                I'm Eufrásio Jaime, a full-stack developer with 5+ years of experience turning business 
                ideas into successful digital products. I don't just write code—I solve business problems 
                with technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-muted-foreground leading-[1.8]">
                My approach is simple: understand your business goals first, then build the right solution. 
                I've helped startups launch their MVPs, businesses automate their operations, and companies 
                scale their platforms to serve thousands of users.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground leading-[1.8]">
                Whether you need a complete application built from scratch, AI automation to streamline 
                your workflows, or technical guidance on your project—I bring the expertise, reliability, 
                and business focus to make it happen.
              </p>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Projects Delivered" },
            { number: "20K+", label: "Users Reached" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-foreground hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
