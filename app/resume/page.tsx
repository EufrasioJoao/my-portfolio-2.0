
import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
} from "lucide-react";

export default function Resume() {
  return (
    <main className="mx-auto max-w-[210mm] bg-white text-black p-10 text-[13px] leading-relaxed font-serif">

      {/* Header */}

      <header className="text-center mb-5">
        <h1 className="text-5xl tracking-wide font-normal uppercase">
          Eufrásio Jaime
        </h1>

        <p className="mt-3 max-w-3xl mx-auto text-[13px] leading-relaxed">
          Full Stack Software Engineer with 5+ years of experience building
          scalable SaaS applications, enterprise systems, AI-powered solutions,
          desktop and mobile applications using React, Next.js, TypeScript,
          Node.js and PostgreSQL. Passionate about building high-performance
          software that solves real business problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4 text-[13px]">

          <div className="flex items-center gap-1">
            <Phone size={14} />
            +258 865 504 448
          </div>

          <div className="flex items-center gap-1">
            <Mail size={14} />
            eufrasiojoao00@gmail.com
          </div>

          <div className="flex items-center gap-1">
            <Linkedin size={14} />
            <a
              href="https://www.linkedin.com/in/eufr%C3%A1sio-jaime-04a118248/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/eufrásio-jaime-04a118248
            </a>
          </div>

          <div className="flex items-center gap-1">
            <Github size={14} />
            <a
              href="https://github.com/EufrasioJoao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/EufrasioJoao
            </a>
          </div>

          <div className="flex items-center gap-1">
            <Globe size={14} />
            <a
              href="https://eufrasiojaime.saphirat.co.mz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              eufrasiojaime.saphirat.co.mz
            </a>
          </div>

        </div>
      </header>

      {/* EXPERIENCE */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Experience
        </h2>

        <div className="mb-4">

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">
                Full Stack Software Engineer
              </h3>

              <p className="italic text-gray-700">
                Flexibilidade Lda
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold">
                Aug 2023 – Present
              </p>

            </div>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Developed scalable SaaS and enterprise applications using
              Next.js, TypeScript and Node.js.
            </li>

            <li>
              Built reusable UI components and shared architecture improving
              development productivity.
            </li>

            <li>
              Designed REST APIs, authentication systems, dashboards,
              reporting modules and third-party integrations.
            </li>

            <li>
              Participated in software architecture, code reviews and
              production deployments across multiple projects.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Technologies:</strong> React, Next.js, TypeScript,
            Node.js, PostgreSQL, TailwindCSS
          </p>

        </div>

        <div>

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">
                Freelance Full Stack Developer
              </h3>

              <p className="italic">
                Self Employed
              </p>

            </div>

            <div>

              <p className="font-semibold">
                Jan 2021 – Aug 2023
              </p>

            </div>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Designed and delivered complete web applications for startups,
              SMEs and local businesses.
            </li>

            <li>
              Built SaaS platforms, AI integrations, payment systems and
              enterprise solutions from database design to deployment.
            </li>

            <li>
              Managed the complete software development lifecycle including
              planning, development, testing and production releases.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Technologies:</strong> React, Next.js, Node.js,
            Prisma, MySQL, PostgreSQL, Vercel
          </p>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Selected Projects
        </h2>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              Fluxime
            </h3>

            <span className="italic">
              Next.js • Prisma • Gemini AI
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Built an AI-powered financial management platform with
              WhatsApp AI integration, invoicing, analytics and reporting
              serving over 1,000 active users.
            </li>

            <li>
              Implemented dashboards, financial reports and automation
              features for businesses.
            </li>

          </ul>

        </div>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              PayMoz
            </h3>

            <span className="italic">
              Next.js • Node.js • M-Pesa API
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Developed a payment gateway enabling businesses to integrate
              M-Pesa payments into their applications.
            </li>

            <li>
              Designed secure payment APIs, transaction verification and
              webhook processing.
            </li>

          </ul>

        </div>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              SIGAE – Integrated Municipal Management System
            </h3>

            <span className="italic">
              Electron • React Native • Node.js
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Developed a desktop ERP and mobile application for municipal
              revenue collection used by the Municipality of Milange.
            </li>

            <li>
              Implemented revenue management, authentication, reporting and
              field data collection features.
            </li>

          </ul>

        </div>

        <div>

          <div className="flex justify-between">

            <h3 className="font-bold">
              Flock
            </h3>

            <span className="italic">
              Next.js • TypeScript • MySQL
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Built a social platform connecting Mozambican companies through
              messaging, company pages and event management.
            </li>

            <li>
              Designed scalable backend architecture using Prisma and MySQL.
            </li>

          </ul>

        </div>

      </section>

      {/* SKILLS */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Technical Skills
        </h2>

        <div className="space-y-1">

          <p>
            <strong>Languages:</strong> TypeScript, JavaScript, Python, SQL
          </p>

          <p>
            <strong>Frontend:</strong> React, Next.js, React Native,
            Electron.js, Tailwind CSS
          </p>

          <p>
            <strong>Backend:</strong> Node.js, Express, GraphQL,
            REST APIs, Prisma
          </p>

          <p>
            <strong>Databases:</strong> PostgreSQL, MySQL,
            MongoDB, Redis
          </p>

          <p>
            <strong>Cloud & DevOps:</strong> AWS, Docker,
            Google Cloud, Vercel, GitHub Actions
          </p>

          <p>
            <strong>Tools:</strong> Git, GitHub, Figma
          </p>

          <p>
            <strong>AI:</strong> OpenAI API, Gemini AI
          </p>

        </div>

      </section>

      {/* EDUCATION */}

      <section>

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Education
        </h2>

        <div className="flex justify-between">

          <div>

            <h3 className="font-bold">
              Bachelor of Information and Communication Technology
            </h3>

            <p className="italic">
              Catholic University of Mozambique
            </p>

          </div>

          <p>
            2020 – 2024
          </p>

        </div>

      </section>

    </main>
  );
}

