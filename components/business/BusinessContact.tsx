"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export function BusinessContact() {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    
    const subject = `Business Inquiry from ${name} - ${company}`;
    const body = `Name: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.open(`mailto:eufrasiojoao00@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss your project? I'm here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a 
                    href="mailto:eufrasiojoao00@gmail.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    eufrasiojoao00@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a 
                    href="tel:+258865504448" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +258 865 504 448
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Linkedin className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium mb-1">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/30 rounded-2xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Response Time:</strong> I typically respond within 24 hours. 
                For urgent inquiries, feel free to call directly.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleContactSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:border-foreground transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:border-foreground transition-all"
                placeholder="Your Company"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:border-foreground transition-all"
                placeholder="john@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell Me About Your Project
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:border-foreground resize-none transition-all"
                placeholder="What are you looking to build? What are your goals and timeline?"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-foreground text-background px-8 py-4 rounded-full hover:bg-foreground/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
