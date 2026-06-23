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

        <div className="flex flex-wrap justify-center gap-4 mt-3 text-[13px]">

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
            github.com/EufrasioJoao
          </div>

          <div className="flex items-center gap-1">
            <Globe size={14} />
            eufrasiojaime.saphirat.co.mz
          </div>

        </div>
      </header>

      {/* EXPERIENCE */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Experience
        </h2>

        {/* Flexibilidade */}

        <div className="mb-4">

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">
                Software Engineer
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
              Developed scalable web applications using
              Next.js, TypeScript and Node.js.
            </li>

            <li>
              Built reusable UI components improving
              development productivity.
            </li>

            <li>
              Integrated REST APIs, authentication,
              dashboards and reporting systems.
            </li>

            <li>
              Participated in architecture decisions,
              code reviews and production deployments.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Tech Stack:</strong> React, Next.js,
            TypeScript, Node.js, PostgreSQL, TailwindCSS
          </p>

        </div>

        {/* Freelance */}

        <div className="mb-4">

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
              Designed and developed complete web
              applications for local businesses.
            </li>

            <li>
              Built SaaS platforms from database design
              to deployment.
            </li>

            <li>
              Integrated payment gateways,
              authentication and AI APIs.
            </li>

            <li>
              Managed full project lifecycle from planning
              to production.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Tech Stack:</strong> React,
            Next.js, Node.js, MySQL, Prisma, Vercel
          </p>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Projects
        </h2>

        {/* Fluxime */}

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              Fluxime
            </h3>

            <span className="italic">
              Next.js | Prisma | Gemini AI
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Built an AI-powered financial management
              platform.
            </li>

            <li>
              Developed WhatsApp AI assistant for expense
              tracking and reporting.
            </li>

            <li>
              Designed dashboards, invoices,
              analytics and financial reports.
            </li>

            <li>
              Platform serves over 1,000 active users.
            </li>

          </ul>

        </div>

        {/* Flock */}

        <div>

          <div className="flex justify-between">

            <h3 className="font-bold">
              Flock
            </h3>

            <span className="italic">
              Next.js | TypeScript | MySQL
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Developed a social platform connecting
              Mozambican companies.
            </li>

            <li>
              Implemented authentication, messaging,
              company pages and event management.
            </li>

            <li>
              Designed scalable backend architecture
              using Prisma and MySQL.
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
            <strong>Languages:</strong> TypeScript,
            JavaScript, Python, SQL
          </p>

          <p>
            <strong>Frontend:</strong> React,
            Next.js, React Native, Electron.Js, TailwindCSS
          </p>

          <p>
            <strong>Backend:</strong> Node.js,
            Express, GraphQL, Prisma
          </p>

          <p>
            <strong>Database:</strong>
            PostgreSQL, MySQL, MongoDB, Redis
          </p>

          <p>
            <strong>Cloud:</strong>
            AWS, Docker, Google Cloud, Vercel
          </p>

          <p>
            <strong>Tools:</strong>
            Git, GitHub, Figma
          </p>

          <p>
            <strong>AI:</strong>
            OpenAI API, Gemini AI
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
              Bachelor's degree in Information and Communication Technology
            </h3>

            <p className="italic">
              Catholic University of Mozambique
            </p>

          </div>

          <p>
            2024
          </p>

        </div>

      </section>

    </main>
  );
}
