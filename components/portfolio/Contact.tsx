"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Contact() {
  const { language } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
      setStatus("error");
    }
  };
  
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-muted/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-muted/40 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {translations.contact.label[language]}
              </span>
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              {translations.contact.title[language]}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-[1.8]">
              {translations.contact.description[language]}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium mb-1">{translations.contact.email[language]}</div>
                  <a href="mailto:eufrasiojoao00@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    eufrasiojoao00@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium mb-1">{translations.contact.phone[language]}</div>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                    +258865504448
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium mb-1">{translations.contact.location[language]}</div>
                  <p className="text-muted-foreground">
                   Nampula City, Mozambique
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {translations.contact.form.name[language]}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:border-foreground/50 transition-all shadow-sm"
                placeholder={translations.contact.form.namePlaceholder[language]}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {translations.contact.form.email[language]}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:border-foreground/50 transition-all shadow-sm"
                placeholder={translations.contact.form.emailPlaceholder[language]}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {translations.contact.form.message[language]}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:border-foreground/50 resize-none transition-all shadow-sm"
                placeholder={translations.contact.form.messagePlaceholder[language]}
              />
            </div>
            
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-foreground text-background px-8 py-4 rounded-full hover:bg-foreground/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl font-medium disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {language === "pt" ? "Enviando..." : "Sending..."}
                </>
              ) : (
                translations.contact.form.submit[language]
              )}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
              >
                <CheckCircle className="w-4 h-4" />
                {language === "pt" ? "Mensagem enviada com sucesso!" : "Message sent successfully!"}
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
              >
                <AlertCircle className="w-4 h-4" />
                {errorMsg}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
