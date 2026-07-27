
import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Smartphone,
} from "lucide-react";
import { getDuration, jobs } from "@/lib/duration";

export default function ResumeMobile() {
  const forge = getDuration(jobs[0].startDate, jobs[0].endDate, "pt");
  const flex = getDuration(jobs[1].startDate, jobs[1].endDate, "pt");
  const flextech = getDuration(jobs[2].startDate, jobs[2].endDate, "pt");
  return (
    <main className="mx-auto max-w-[210mm] bg-white text-black p-10 text-[13px] leading-relaxed font-serif">

      {/* CABEÇALHO */}

      <header className="text-center mb-5">

        <div className="flex items-center justify-center gap-2 mb-2">
          <Smartphone size={28} className="text-gray-800" />
          <h1 className="text-5xl tracking-wide font-normal uppercase">
            Eufrásio Jaime
          </h1>
        </div>

        <p className="text-lg font-semibold text-gray-700 mb-2">
          Mobile Developer | Desenvolvedor de Aplicações Móveis
        </p>

        <p className="mt-3 max-w-3xl mx-auto text-[13px] leading-relaxed">
          Desenvolvedor Mobile com mais de 5 anos de experiência na criação de
          aplicações móveis nativas e cross-platform utilizando React Native,
          desde apps de coletores de campo para gestão municipal até
          aplicações de gestão financeira pessoal e empresarial, gateways de
          pagamento e soluções para pequenos negócios. Possuo sólida
          experiência em Full Stack, incluindo Node.js, APIs REST, Next.js e
          integrações com serviços externos (M-Pesa, WhatsApp API, IA).
          Apaixonado por construir experiências móveis intuitivas, performáticas
          e com foco no utilizador final.
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
              href="https://www.linkedin.com/in/eufrasiojaime/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/eufrasiojaime
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
                Desenvolvedor Mobile & Full Stack
              </h3>

              <p className="italic text-gray-700">
                Flexibilidade Lda · Tempo integral
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold">
                {flex}
              </p>

            </div>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Desenvolvimento de aplicações móveis cross-platform com React Native para Android e iOS.
            </li>

            <li>
              Implementação de funcionalidades offline-first, sincronização de dados e integração com APIs REST e GraphQL.
            </li>

            <li>
              Criação de componentes reutilizáveis e arquitetura partilhada, aumentando a produtividade da equipa em 40%.
            </li>

            <li>
              Desenvolvimento de backends Node.js, autenticação, dashboards e integrações com serviços externos (M-Pesa, WhatsApp).
            </li>

          </ul>

          <p className="mt-2">
            <strong>Tecnologias:</strong> React Native, TypeScript, Node.js, Express, MySQL, Tailwind CSS, Next.js
          </p>

        </div>


        <div className="mb-4">

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">
                Desenvolvedor Mobile & Full Stack
              </h3>

              <p className="italic text-gray-700">
                Forge · Tempo integral
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold">
                {forge}
              </p>
              <p className="text-gray-600 text-xs">Nampula, Moçambique · Híbrido</p>

            </div>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Liderança no desenvolvimento de aplicações móveis para clientes institucionais, desde o conceito até a publicação nas lojas.
            </li>

            <li>
              Implementação de soluções fullstack mobile-first com React Native, Next.js, Node.js e Prisma.
            </li>

            <li>
              Responsável por arquitetura técnica mobile, otimização de performance e experiência do utilizador.
            </li>

            <li>
              Publicação e manutenção de apps na Google Play Store e integração com serviços de pagamento móvel.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Tecnologias:</strong> React Native, Next.js, TypeScript, Node.js, Prisma, MySQL, M-Pesa API
          </p>

        </div>


        <div>

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">
                Desenvolvedor de Software
              </h3>

              <p className="italic">
                FlexTech · Tempo integral
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold">
                {flextech}
              </p>
              <p className="text-gray-600 text-xs">Nampula, Moçambique · No local</p>

            </div>

          </div>

          <ul className="list-disc ml-5 mt-2 space-y-1">

            <li>
              Desenvolvimento e manutenção de aplicações móveis em React Native para uso empresarial.
            </li>

            <li>
              Colaboração com equipas multifuncionais para entregar soluções escaláveis com JavaScript, React e Node.js.
            </li>

            <li>
              Foco na qualidade do código, testes unitários, melhores práticas e processos de CI/CD.
            </li>

          </ul>

          <p className="mt-2">
            <strong>Tecnologias:</strong> React Native, React, JavaScript, Node.js, MongoDB, Express, CSS
          </p>

        </div>

      </section>

      {/* PROJECTOS MOBILE */}

      <section className="mb-6">

        <h2 className="font-bold text-xl border-b border-black mb-2">
          Projetos Mobile
        </h2>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              SIGAE – Aplicativos de Coletores (Município de Milange)
            </h3>

            <span className="italic">
              React Native • Node.js • MySQL
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Desenvolvimento de múltiplas aplicações móveis para coletores de
              receitas municipais, operando em modo offline com sincronização
              em tempo real quando conectado.
            </li>

            <li>
              Módulos incluem: cobranças de mercado, taxas de transporte,
              cobrança de cargas, ambulantes, IPRA/IPA e CIM (Cadastro de
              Munícipes).
            </li>

            <li>
              Integração com aplicação desktop (Electron) e backend centralizado
              para relatórios, tesouraria e auditoria de todas as transações.
            </li>

            <li>
              Utilizado por mais de 50 coletores em campo, processando
              diariamente dezenas de transações com segurança e confiabilidade.
            </li>

          </ul>

        </div>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              Fluxime – App de Gestão Financeira Pessoal e Empresarial
            </h3>

            <span className="italic">
              React Native • Next.js • Gemini AI • WhatsApp API
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Aplicação móvel de gestão financeira com suporte a contas
              pessoais e empresariais, incluindo controlo de receitas e
              despesas, faturação e relatórios gerenciais.
            </li>

            <li>
              Integração com assistente virtual via WhatsApp API e IA (Gemini)
              para lançamentos automáticos e análises inteligentes.
            </li>

            <li>
              Dashboard com indicadores financeiros, gráficos e exportação de
              relatórios em PDF e Excel.
            </li>

            <li>
              Mais de 1.000 utilizadores ativos com taxa de retenção de 98%.
            </li>

          </ul>

        </div>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              PayMoz – Gateway de Pagamentos Móvel
            </h3>

            <span className="italic">
              React Native • Node.js • M-Pesa API • REST APIs
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Desenvolvimento de aplicação móvel e SDK para integração de
              pagamentos M-Pesa em aplicações de terceiros.
            </li>

            <li>
              Implementação de fluxos de pagamento seguros, checkout nativo,
              verificação de transações e processamento de webhooks.
            </li>

            <li>
              Dashboard mobile para comerciantes consultarem transações,
              saldos e relatórios financeiros em tempo real.
            </li>

            <li>
              Suporte a múltiplas contas empresariais e integração com
              sistemas de faturação existentes.
            </li>

          </ul>

        </div>

        <div className="mb-4">

          <div className="flex justify-between">

            <h3 className="font-bold">
              Barbearia App – Gestão de Agendamentos e Fidelidade
            </h3>

            <span className="italic">
              React Native • Node.js • Prisma • PostgreSQL
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Aplicação mobile para barbearias com agendamento online,
              escolha de barbeiro, serviço e horário.
            </li>

            <li>
              Sistema de fidelidade com pontos, descontos e promoções
              personalizadas para clientes frequentes.
            </li>

            <li>
              Notificações push para lembretes de agendamento e confirmações.
            </li>

            <li>
              Painel do profissional para gestão da agenda, serviços e
              histórico de atendimentos.
            </li>

          </ul>

        </div>

        <div>

          <div className="flex justify-between">

            <h3 className="font-bold">
              SIGAE – Aplicação Desktop + Mobile (Gestão Autárquica)
            </h3>

            <span className="italic">
              Electron • React Native • Node.js • Prisma
            </span>

          </div>

          <ul className="list-disc ml-5 mt-2">

            <li>
              Sistema integrado composto por aplicação desktop (Electron) para
              gestão administrativa e aplicações móveis (React Native) para
              coletores do Município de Milange.
            </li>

            <li>
              20+ módulos: licenças, alvarás, atestados, tesouraria,
              património, obras públicas, expedientes e denúncias.
            </li>

            <li>
              Backups automáticos, auditoria de ações e relatórios diários
              consolidando dados de múltiplas fontes.
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
            <strong>Mobile:</strong> React Native, Expo, EAS Build,
            Navegação (React Navigation), Estado Global (Redux, Zustand),
            AsyncStorage, MMKV, Geolocalização, Câmera, Push Notifications,
            Deep Linking, Publicação em Play Store/App Store
          </p>

          <p>
            <strong>Linguagens:</strong> TypeScript, JavaScript, SQL, Dart
          </p>

          <p>
            <strong>Frontend &amp; UI:</strong> React, Next.js, Tailwind CSS,
            Styled Components, ShadCN UI, Figma, Design Responsivo, Acessibilidade
          </p>

          <p>
            <strong>Backend:</strong> Node.js, Express, NestJS, GraphQL,
            APIs REST, Prisma ORM, Autenticação JWT/OAuth, Webhooks
          </p>

          <p>
            <strong>Bases de Dados:</strong> MySQL, PostgreSQL,
            MongoDB, Redis, SQLite (local mobile)
          </p>

          <p>
            <strong>Integrações:</strong> M-Pesa API, WhatsApp API,
            OpenAI API, Gemini AI, Google Maps API, serviços de autenticação social
          </p>

          <p>
            <strong>Cloud &amp; DevOps:</strong> AWS, Docker,
            Google Cloud, Vercel, GitHub Actions, CI/CD
          </p>

          <p>
            <strong>Ferramentas:</strong> Git, GitHub, Figma,
            Postman, Android Studio, Xcode, Jest, Detox
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
