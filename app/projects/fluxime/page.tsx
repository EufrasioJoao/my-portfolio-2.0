import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function FluximeProject() {
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
            Fluxime
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Intelligent financial control for individuals and businesses
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Next.js", "Python", "WhatsApp API", "MySQL", "AI"].map((tech) => (
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
            Most people and small businesses struggle with financial management. Spreadsheets are 
            complicated, traditional apps require too much manual input, and there's no easy way 
            to track expenses on the go.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            People needed a simple, accessible solution that fits into their daily routine without 
            requiring them to learn complex software or spend hours organizing finances.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">The Solution</h2>
          
          <div className="space-y-8">
            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">WhatsApp AI Assistant</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Record expenses and income directly through WhatsApp. Just send a message like 
                "Spent 500 on groceries" and the AI assistant automatically categorizes and 
                registers the transaction.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Interactive Dashboard</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Visualize your finances in real-time with interactive charts and indicators. 
                See exactly where your money is going and identify spending patterns instantly.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Financial Goals</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Set and track financial goals with visual progress indicators. Stay motivated 
                and achieve your objectives with clear milestones and insights.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Business Management</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Complete control for your business with customer management, suppliers, accounts 
                payable and receivable, inventory control, and multi-user access.
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
              Fluxime started from a personal need—I wanted to track my expenses without the 
              friction of opening an app and filling out forms. The idea of using WhatsApp, 
              something everyone already uses daily, seemed perfect.
            </p>
            <p>
              The biggest challenge was building an AI that could understand natural language 
              in Portuguese and automatically categorize transactions accurately. I trained 
              custom models and implemented smart pattern recognition to make it feel truly 
              conversational.
            </p>
            <p>
              Building the dashboard with real-time updates and the business management features 
              required careful architecture. Using Next.js for the frontend and Python for the 
              AI backend, I created a system that's both powerful and user-friendly.
            </p>
            <p>
              Seeing users save money and gain financial clarity through Fluxime has been incredibly 
              rewarding. The platform continues to evolve based on real user feedback.
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
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Active Users
              </div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Satisfaction Rate
              </div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Businesses Using
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
