import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";

export default function ResumeFrontendPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 max-w-[210mm] mx-auto">
      {/* Header */}
      <header className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">Eufrásio Jaime</h1>
        <p className="text-xl text-gray-700 mb-4">Frontend Developer</p>
        
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
            <a href="https://eufrasiojaime.com" className="hover:underline">
              eufrasiojaime.com
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
          Frontend developer with 5+ years of experience building modern, responsive, and performant web 
          applications. Expert in React, Next.js, and TypeScript with a strong focus on user experience, 
          accessibility, and clean code. Proven track record of creating pixel-perfect interfaces and 
          implementing complex UI/UX designs that delight users.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Technical Skills</h2>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold mb-1">Core Frontend:</p>
            <p className="text-gray-700">React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Styling & UI:</p>
            <p className="text-gray-700">Tailwind CSS, CSS Modules, Styled Components, SASS/SCSS, Responsive Design</p>
          </div>
          <div>
            <p className="font-semibold mb-1">State Management & Data:</p>
            <p className="text-gray-700">Redux, React Query, Context API, SWR, REST APIs, GraphQL</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Animation & Interaction:</p>
            <p className="text-gray-700">Framer Motion, CSS Animations, GSAP, React Spring</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Tools & Workflow:</p>
            <p className="text-gray-700">Git, Webpack, Vite, npm/yarn, Figma, VS Code, Chrome DevTools</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Testing & Quality:</p>
            <p className="text-gray-700">Jest, React Testing Library, Cypress, ESLint, Prettier</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Performance & SEO:</p>
            <p className="text-gray-700">Web Vitals, Lighthouse, SSR/SSG, Code Splitting, Lazy Loading</p>
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
              <h3 className="text-lg font-bold">Frontend Developer</h3>
              <p className="text-sm text-gray-700">Flexibilidade Lda</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Aug 2023 - Present</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Built responsive and accessible web applications using React and Next.js</li>
            <li>Implemented pixel-perfect UI designs with Tailwind CSS and modern CSS techniques</li>
            <li>Optimized application performance achieving 95+ Lighthouse scores</li>
            <li>Collaborated with designers to create seamless user experiences</li>
            <li>Integrated RESTful APIs and managed complex application state</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> React, Next.js, TypeScript, Tailwind CSS, Framer Motion
          </p>
        </div>

        {/* Freelance */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Freelance Frontend Developer</h3>
              <p className="text-sm text-gray-700">Independent</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jan 2021 - Aug 2023</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Delivered custom frontend solutions for diverse clients across industries</li>
            <li>Created responsive landing pages and web applications from Figma designs</li>
            <li>Implemented complex animations and interactive UI components</li>
            <li>Ensured cross-browser compatibility and mobile responsiveness</li>
            <li>Maintained high code quality with TypeScript and modern best practices</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> React, Next.js, TypeScript, Tailwind CSS, Redux
          </p>
        </div>

        {/* FlexTech */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Frontend Developer</h3>
              <p className="text-sm text-gray-700">FlexTech</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jun 2019 - Dec 2020</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Developed responsive web interfaces with HTML, CSS, and JavaScript</li>
            <li>Built reusable React components following atomic design principles</li>
            <li>Implemented form validations and interactive user interfaces</li>
            <li>Collaborated with backend team to integrate APIs and display data</li>
            <li>Participated in code reviews and maintained coding standards</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Technologies:</span> React, JavaScript, CSS3, HTML5, Bootstrap
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
              Built the complete frontend for a business social network with complex UI interactions, 
              real-time updates, and responsive design. Implemented advanced filtering, search, and 
              profile management features.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Next.js, TypeScript, Tailwind CSS, Framer Motion
            </p>
          </div>

          {/* Fluxime */}
          <div>
            <h3 className="text-lg font-bold">Fluxime - Financial Dashboard</h3>
            <p className="text-sm text-gray-800 mb-1">
              Created an interactive financial dashboard with real-time charts, data visualizations, 
              and responsive layouts. Implemented complex forms and multi-step workflows for financial 
              management. 1,000+ active users.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Next.js, React Query, Tailwind CSS, Chart.js
            </p>
          </div>

          {/* LeadsAI */}
          <div>
            <h3 className="text-lg font-bold">LeadsAI - Sales Analytics Platform</h3>
            <p className="text-sm text-gray-800 mb-1">
              Developed a comprehensive analytics dashboard with real-time data visualization, 
              conversation tracking, and performance metrics. Optimized for performance with 
              large datasets. 2,500+ active clients.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Technologies:</span> Next.js, TypeScript, Tailwind CSS, Recharts
            </p>
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section>
        <h2 className="text-2xl font-bold border-b border-black mb-3">Additional Competencies</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>• Accessibility (WCAG, ARIA)</p>
          <p>• Progressive Web Apps (PWA)</p>
          <p>• Mobile-First Design</p>
          <p>• Cross-Browser Testing</p>
          <p>• UI/UX Best Practices</p>
          <p>• Agile/Scrum Methodology</p>
        </div>
      </section>
    </main>
  );
}
