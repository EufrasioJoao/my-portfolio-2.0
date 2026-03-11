import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function FlockProject() {
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
            Flock
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            The business social network exclusively for Mozambican companies
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Next.js", "TypeScript", "Prisma", "MySQL"].map((tech) => (
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
              href="https://flock.kimmy.pro/"
              target="_blank"
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
            In Mozambique, business connections are informal, fragmented, and lack visibility. 
            Companies rely on WhatsApp groups, Facebook, and lost contacts to network and collaborate.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            There was no centralized, professional platform where Mozambican businesses could 
            discover each other, showcase their work, and collaborate on projects.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">The Solution</h2>
          
          <div className="space-y-8">
            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Business Profiles</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Each company has its own space to showcase projects, events, and collaborations. 
                No resumes, no job postings—just businesses connecting with businesses.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Real Projects</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Share initiatives, find partners, and collaborate. Make your company's work visible 
                to the entire Mozambican business ecosystem.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Ecosystem Events</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Workshops, meetups, presentations. Connect in person with other companies and 
                strengthen the business network.
              </p>
            </div>

            <div className="p-6 border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Verified Companies</h3>
              <p className="text-muted-foreground leading-[1.8]">
                Real and verified companies only. Invitation system and access requests ensure 
                authenticity and trust within the platform.
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
              Flock was born from observing the fragmented nature of business networking in Mozambique. 
              I noticed companies struggling to find partners, showcase their work, and connect with 
              the broader ecosystem.
            </p>
            <p>
              The challenge was creating a platform that felt professional yet accessible, exclusive 
              yet welcoming. I focused on building features that truly mattered to Mozambican businesses—
              project collaboration, event discovery, and authentic networking.
            </p>
            <p>
              Using Next.js and Supabase, I built a scalable platform that handles real-time updates, 
              company verification, and contextual networking. The result is a hub where Mozambican 
              businesses can truly connect and grow together.
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
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Mozambican Focus
              </div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Job Postings
              </div>
            </div>
            <div className="p-6 border border-border rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Collaboration Potential
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
