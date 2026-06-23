
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

      {/* CABEÇALHO */}

      <header className="text-center mb-5">

        <h1 className="text-5xl tracking-wide font-normal uppercase">
          Eufrásio Jaime
        </h1>

        <p className="mt-3 max-w-3xl mx-auto text-[13px] leading-relaxed">
          Engenheiro de Software Full Stack com mais de 5 anos de experiência
          no desenvolvimento de aplicações SaaS, sistemas empresariais,
          soluções com Inteligência Artificial, aplicações desktop e mobile,
          utilizando React, Next.js, TypeScript, Node.js e PostgreSQL.
          Apaixonado por desenvolver software escalável e soluções que geram
          impacto para empresas e organizações.
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

      {/* EXPERIÊNCIA */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Experiência Profissional
        </h2>

        <div className="mb-4">

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">
                Engenheiro de Software Full Stack
              </h3>

              <p className="italic text-gray-700">
                Flexibilidade Lda
              </p>

            </div>

            <p className="font-semibold">
              Ago 2023 – Presente
            </p>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Desenvolvimento de aplicações SaaS e sistemas empresariais
              utilizando Next.js, TypeScript e Node.js.
            </li>

            <li>
              Criação de componentes reutilizáveis e arquitetura compartilhada,
              aumentando a produtividade das equipas de desenvolvimento.
            </li>

            <li>
              Desenvolvimento de APIs REST, autenticação, dashboards,
              relatórios e integrações com serviços externos.
            </li>

            <li>
              Participação em decisões de arquitetura, revisão de código e
              implementação de sistemas em produção.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Tecnologias:</strong> React, Next.js, TypeScript,
            Node.js, PostgreSQL e Tailwind CSS
          </p>

        </div>

        <div>

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">
                Desenvolvedor Full Stack Freelancer
              </h3>

              <p className="italic">
                Trabalho Independente
              </p>

            </div>

            <p className="font-semibold">
              Jan 2021 – Ago 2023
            </p>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Desenvolvimento de aplicações web completas para startups,
              pequenas e médias empresas.
            </li>

            <li>
              Construção de plataformas SaaS, soluções com IA, gateways de
              pagamento e sistemas empresariais.
            </li>

            <li>
              Gestão de todo o ciclo de desenvolvimento, desde o planeamento
              até à implementação em produção.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Tecnologias:</strong> React, Next.js, Node.js,
            Prisma, PostgreSQL, MySQL e Vercel
          </p>

        </div>

      </section>

      {/* PROJECTOS */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Principais Projetos
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
              Plataforma de gestão financeira com Inteligência Artificial,
              assistente via WhatsApp, faturação, dashboards e relatórios,
              utilizada por mais de 1.000 utilizadores ativos.
            </li>

            <li>
              Automatização de processos financeiros e geração de análises
              para empresas.
            </li>

          </ul>

        </div>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              PayMoz
            </h3>

            <span className="italic">
              Next.js • Node.js • API M-Pesa
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Desenvolvimento de um gateway de pagamentos para integração de
              pagamentos M-Pesa em aplicações web.
            </li>

            <li>
              Implementação de APIs seguras, verificação de transações e
              processamento de webhooks.
            </li>

          </ul>

        </div>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              SIGAE – Sistema Integrado de Gestão Autárquica
            </h3>

            <span className="italic">
              Electron • React Native • Node.js
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Desenvolvimento de um sistema integrado composto por aplicação
              desktop para gestão administrativa e aplicação móvel para
              coletores de receitas do Município de Milange.
            </li>

            <li>
              Implementação de gestão de receitas, autenticação,
              relatórios e recolha de dados em campo.
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
              Plataforma social para conectar empresas moçambicanas através
              de mensagens, páginas empresariais e gestão de eventos.
            </li>

            <li>
              Desenvolvimento de uma arquitetura escalável utilizando Prisma
              e MySQL.
            </li>

          </ul>

        </div>

      </section>

      {/* COMPETÊNCIAS */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Competências Técnicas
        </h2>

        <div className="space-y-1">

          <p>
            <strong>Linguagens:</strong> TypeScript, JavaScript,
            Python e SQL
          </p>

          <p>
            <strong>Frontend:</strong> React, Next.js,
            React Native, Electron.js e Tailwind CSS
          </p>

          <p>
            <strong>Backend:</strong> Node.js, Express,
            GraphQL, APIs REST e Prisma
          </p>

          <p>
            <strong>Bases de Dados:</strong> PostgreSQL,
            MySQL, MongoDB e Redis
          </p>

          <p>
            <strong>Cloud & DevOps:</strong> AWS, Docker,
            Google Cloud, Vercel e GitHub Actions
          </p>

          <p>
            <strong>Ferramentas:</strong> Git, GitHub e Figma
          </p>

          <p>
            <strong>Inteligência Artificial:</strong>
            OpenAI API e Gemini AI
          </p>

        </div>

      </section>

      {/* FORMAÇÃO */}

      <section>

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Formação Académica
        </h2>

        <div className="flex justify-between">

          <div>

            <h3 className="font-bold">
              Licenciatura em Tecnologias de Informação e Comunicação
            </h3>

            <p className="italic">
              Universidade Católica de Moçambique
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
