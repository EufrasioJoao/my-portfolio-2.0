import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";

export default function ResumeBackendPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 max-w-[210mm] mx-auto">
      {/* Header */}
      <header className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">Eufrásio Jaime</h1>
        <p className="text-xl text-gray-700 mb-4">Backend Developer</p>
        
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
          Backend developer with 5+ years of experience designing and building scalable server-side 
          applications and APIs. Expert in Node.js, Express, and database design with strong knowledge 
          of system architecture, security, and performance optimization. Proven track record of building 
          robust backend systems that handle thousands of concurrent users.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Technical Skills</h2>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold mb-1">Backend Languages & Frameworks:</p>
            <p className="text-gray-700">Node.js, Express.js, Python, FastAPI, TypeScript</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Databases:</p>
            <p className="text-gray-700">MySQL, PostgreSQL, MongoDB, Redis, Database Design, Query Optimization</p>
          </div>
          <div>
            <p className="font-semibold mb-1">ORMs & Database Tools:</p>
            <p className="text-gray-700">Prisma, Sequelize, Mongoose, TypeORM, Database Migrations</p>
          </div>
          <div>
            <p className="font-semibold mb-1">APIs & Integration:</p>
            <p className="text-gray-700">RESTful APIs, GraphQL, WebSockets, API Design, Third-party Integrations</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Authentication & Security:</p>
            <p className="text-gray-700">JWT, OAuth, bcrypt, API Security, CORS, Rate Limiting, Data Encryption</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Cloud & DevOps:</p>
            <p className="text-gray-700">AWS (EC2, S3, RDS), Vercel, Docker, CI/CD, Nginx, Linux</p>
          </div>
          <div>
            <p className="font-semibold mb-1">AI & External Services:</p>
            <p className="text-gray-700">OpenAI API, Gemini AI, WhatsApp API, Payment Gateways, Email Services</p>
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
              <h3 className="text-lg font-bold">Backend Developer</h3>
              <p className="text-sm text-gray-700">Flexibilidade Lda</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Aug 2023 - Present</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Designed and implemented RESTful APIs serving thousands of requests per day</li>
            <li>Built scalable database schemas with Prisma and PostgreSQL</li>
            <li>Implemented authentication and authorization systems with JWT</li>
            <li>Optimized database queries reducing response time by 60%</li>
            <li>Integrated third-party services including payment gateways and AI APIs</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> Node.js, Express, Prisma, PostgreSQL, Redis
          </p>
        </div>

        {/* Freelance */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Freelance Backend Developer</h3>
              <p className="text-sm text-gray-700">Independent</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jan 2021 - Aug 2023</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Built custom backend solutions and APIs for various client projects</li>
            <li>Designed database architectures for complex business requirements</li>
            <li>Implemented real-time features using WebSockets and event-driven architecture</li>
            <li>Integrated AI services (OpenAI, Gemini) for intelligent automation</li>
            <li>Deployed and maintained applications on AWS and cloud platforms</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> Node.js, Python, MySQL, MongoDB, AWS
          </p>
        </div>

        {/* FlexTech */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Backend Developer</h3>
              <p className="text-sm text-gray-700">FlexTech</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jun 2019 - Dec 2020</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Developed server-side applications with Node.js and Express</li>
            <li>Created and maintained RESTful APIs for web and mobile applications</li>
            <li>Designed and implemented database schemas with MongoDB</li>
            <li>Implemented data validation, error handling, and logging systems</li>
            <li>Collaborated with frontend team to define API contracts</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> Node.js, Express, MongoDB, REST APIs
          </p>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Key Projects</h2>
        
        <div className="space-y-3">
          {/* Flock */}
          <div>
            <h3 className="text-lg font-bold">Flock - Business Social Network Backend</h3>
            <p className="text-sm text-gray-800 mb-1">
              Architected and built the complete backend infrastructure including user authentication, 
              company profiles, project management, and event systems. Implemented real-time notifications 
              and invitation system with complex authorization logic.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Node.js, Prisma, MySQL, JWT, WebSockets
            </p>
          </div>

          {/* Fluxime */}
          <div>
            <h3 className="text-lg font-bold">Fluxime - Financial Management Backend</h3>
            <p className="text-sm text-gray-800 mb-1">
              Built a robust backend system handling financial transactions, AI-powered WhatsApp integration, 
              and complex business logic. Implemented secure payment processing and multi-user access control. 
              Serves 1,000+ active users with 99.9% uptime.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Node.js, Prisma, MySQL, Gemini AI, WhatsApp API
            </p>
          </div>

          {/* LeadsAI */}
          <div>
            <h3 className="text-lg font-bold">LeadsAI - Sales Automation Backend</h3>
            <p className="text-sm text-gray-800 mb-1">
              Developed an AI-powered sales automation system integrating OpenAI for conversation handling, 
              lead scoring algorithms, and real-time analytics processing. Handles 2,500+ active clients 
              with thousands of daily conversations.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Express, OpenAI API, Prisma, MySQL, Redis
            </p>
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section>
        <h2 className="text-2xl font-bold border-b border-black mb-3">Additional Competencies</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>• Microservices Architecture</p>
          <p>• API Documentation (Swagger)</p>
          <p>• Performance Optimization</p>
          <p>• Error Handling & Logging</p>
          <p>• Unit & Integration Testing</p>
          <p>• Agile/Scrum Methodology</p>
        </div>
      </section>
    </main>
  );
}
