import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 max-w-[210mm] mx-auto">
      {/* Header */}
      <header className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">Eufrásio Jaime</h1>
        <p className="text-xl text-gray-700 mb-4">Full Stack Developer</p>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:eufrasiojoao00@gmail.com" className="hover:underline">
              eufrasiojoao00@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+258 865 504 448</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <a href="https://eufrasiojoao.site" className="hover:underline">
              https://eufrasiojoao.site
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <a href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248/" className="hover:underline">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <a href="https://github.com/EufrasioJoao" className="hover:underline">
              github.com/EufrasioJoao
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Professional Summary</h2>
        <p className="text-sm leading-relaxed">
          Full-stack developer with 5+ years of experience building scalable web and mobile applications. 
          Specialized in React, Next.js, Node.js, and cloud infrastructure with a proven track record of 
          delivering high-impact products. Strong problem-solving abilities and expertise spanning the entire 
          development lifecycle from design to deployment and optimization.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Frontend:</p>
            <p className="text-gray-700">React, Next.js, TypeScript, Vue.js, Tailwind CSS, Framer Motion</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Backend:</p>
            <p className="text-gray-700">Node.js, Express, Python, Prisma, GraphQL</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Databases:</p>
            <p className="text-gray-700">MySQL, MongoDB, Redis, PostgreSQL</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Cloud & DevOps:</p>
            <p className="text-gray-700">AWS, Vercel, Docker, CI/CD, Nginx</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Mobile:</p>
            <p className="text-gray-700">React Native, Expo, iOS, Android</p>
          </div>
          <div>
            <p className="font-semibold mb-1">AI & Tools:</p>
            <p className="text-gray-700">OpenAI, Gemini AI, Git, Figma, VS Code</p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Professional Experience</h2>
        
        {/* Flexibilidade */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Software Engineer</h3>
              <p className="text-sm text-gray-700">Flexibilidade Lda</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Aug 2023 - Present</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Building scalable web applications with modern frameworks</li>
            <li>Implementing responsive and user-friendly interfaces</li>
            <li>Collaborating with teams to deliver projects on schedule</li>
            <li>Contributing to code reviews and best practices</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS
          </p>
        </div>

        {/* Freelance */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Independent Developer</h3>
              <p className="text-sm text-gray-700">Freelance & Consulting</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jan 2021 - Aug 2023</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Delivered custom web solutions for various clients</li>
            <li>Built and launched personal projects and products</li>
            <li>Provided technical consulting and code reviews</li>
            <li>Managed full project lifecycle independently</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> React, Next.js, Python, Node.js, MySQL, Vercel
          </p>
        </div>

        {/* FlexTech */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Full Stack Developer</h3>
              <p className="text-sm text-gray-700">FlexTech</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jun 2019 - Dec 2020</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Developed responsive web interfaces with HTML, CSS, and JavaScript</li>
            <li>Built server-side applications and integrated with databases</li>
            <li>Participated in full development lifecycle from concept to deployment</li>
            <li>Collaborated with team members on feature implementation</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> React, JavaScript, Node.js, MongoDB, Express, CSS
          </p>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Key Projects</h2>
        
        <div className="space-y-3">
          {/* Flock */}
          <div>
            <h3 className="text-lg font-bold">Flock - Business Social Network</h3>
            <p className="text-sm text-gray-800 mb-1">
              Business social network exclusively for Mozambican companies. Platform for networking, 
              project collaboration, and business ecosystem events.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Next.js, TypeScript, Prisma, MySQL
            </p>
          </div>

          {/* Fluxime */}
          <div>
            <h3 className="text-lg font-bold">Fluxime - Financial Management Platform</h3>
            <p className="text-sm text-gray-800 mb-1">
              Complete personal and business financial management platform with AI assistant on WhatsApp. 
              Interactive dashboard, reports, and full control. 1,000+ active users.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Next.js, Prisma, MySQL, Gemini AI
            </p>
          </div>

          {/* LeadsAI */}
          <div>
            <h3 className="text-lg font-bold">LeadsAI - Sales Automation</h3>
            <p className="text-sm text-gray-800 mb-1">
              Sales automation with AI integrated into WhatsApp. Automated conversations, opportunity 
              identification, and real-time sales insights. 2,500+ active clients.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Next.js, Express, OpenAI, Prisma, MySQL
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
