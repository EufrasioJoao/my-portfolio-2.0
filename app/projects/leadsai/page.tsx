import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function LeadsAIProject() {
  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full hover:border-foreground transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            LeadsAI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Complete solution for sales automation on WhatsApp
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Next.js", "Express", "OpenAI", "Prisma", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </a>
             
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">
            Sales teams spend countless hours responding to repetitive questions, qualifying leads 
            manually, and following up with prospects. This manual process is slow, inconsistent, 
            and prevents teams from focusing on high-value activities.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Businesses needed a way to automate initial conversations, identify serious buyers, 
            and provide instant responses 24/7 without sacrificing the personal touch that 
            converts leads into customers.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">The Solution</h2>
          
          <div className="space-y-8">
            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Automated Conversations</h3>
              <p className="text-muted-foreground leading-[1.8]">
                AI-powered chatbot that handles customer inquiries, answers FAQs, and guides 
                prospects through the sales funnel. Responds like a human, understands intent, 
                and adapts to conversation context.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Lead Intelligence</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Automatically identifies high-quality leads based on behavior patterns, conversation 
                analysis, and purchase intent. Prioritizes hot leads for immediate human follow-up.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Real-Time Analytics</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Comprehensive dashboard showing conversion rates, product performance, and sales 
                funnel bottlenecks. Make data-driven decisions with actionable insights.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Smart Notifications</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Instant alerts for completed sales, identified opportunities, and actions needed. 
                Stay informed without constantly monitoring conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">Development Journey</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-[1.8]">
            <p>
              LeadsAI emerged from watching businesses struggle with WhatsApp sales. They were 
              drowning in messages, missing opportunities, and unable to scale their sales process 
              without hiring more people.
            </p>
            <p>
              The technical challenge was building an AI that could handle sales conversations 
              naturally while identifying buying signals and qualifying leads accurately. I integrated 
              OpenAI's models with custom training data specific to sales scenarios.
            </p>
            <p>
              Building the analytics engine required processing thousands of conversations in real-time, 
              extracting insights, and presenting them in an actionable format. The FastAPI backend 
              handles this efficiently while maintaining low latency.
            </p>
            <p>
              The platform has helped businesses increase their sales by 40% while reducing response 
              time to seconds. Seeing companies scale their sales without proportionally scaling 
              their team has been the most satisfying outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Active Clients
              </div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">+40%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Sales Increase
              </div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Retention Rate
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
