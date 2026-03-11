import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";

export default function ResumeBackendPtPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 max-w-[210mm] mx-auto">
      {/* Header */}
      <header className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">Eufrásio Jaime</h1>
        <p className="text-xl text-gray-700 mb-4">Desenvolvedor Backend</p>
        
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
              Perfil LinkedIn
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
        <h2 className="text-2xl font-bold border-b border-black mb-3">Resumo Profissional</h2>
        <p className="text-sm leading-relaxed">
          Desenvolvedor backend com mais de 5 anos de experiência projetando e construindo aplicações 
          server-side e APIs escaláveis. Especialista em Node.js, Express e design de bancos de dados 
          com forte conhecimento em arquitetura de sistemas, segurança e otimização de performance. 
          Histórico comprovado de construir sistemas backend robustos que lidam com milhares de usuários simultâneos.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Competências Técnicas</h2>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold mb-1">Linguagens & Frameworks Backend:</p>
            <p className="text-gray-700">Node.js, Express.js, Python, FastAPI, TypeScript</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Bancos de Dados:</p>
            <p className="text-gray-700">MySQL, PostgreSQL, MongoDB, Redis, Design de BD, Otimização de Queries</p>
          </div>
          <div>
            <p className="font-semibold mb-1">ORMs & Ferramentas de BD:</p>
            <p className="text-gray-700">Prisma, Sequelize, Mongoose, TypeORM, Migrações de Banco de Dados</p>
          </div>
          <div>
            <p className="font-semibold mb-1">APIs & Integração:</p>
            <p className="text-gray-700">APIs RESTful, GraphQL, WebSockets, Design de APIs, Integrações Third-party</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Autenticação & Segurança:</p>
            <p className="text-gray-700">JWT, OAuth, bcrypt, Segurança de APIs, CORS, Rate Limiting, Criptografia de Dados</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Cloud & DevOps:</p>
            <p className="text-gray-700">AWS (EC2, S3, RDS), Vercel, Docker, CI/CD, Nginx, Linux</p>
          </div>
          <div>
            <p className="font-semibold mb-1">IA & Serviços Externos:</p>
            <p className="text-gray-700">API OpenAI, Gemini AI, API WhatsApp, Gateways de Pagamento, Serviços de Email</p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Experiência Profissional</h2>
        
        {/* Flexibilidade */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Backend</h3>
              <p className="text-sm text-gray-700">Flexibilidade Lda</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Ago 2023 - Presente</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Projetei e implementei APIs RESTful servindo milhares de requisições por dia</li>
            <li>Construí schemas de banco de dados escaláveis com Prisma e PostgreSQL</li>
            <li>Implementei sistemas de autenticação e autorização com JWT</li>
            <li>Otimizei queries de banco de dados reduzindo tempo de resposta em 60%</li>
            <li>Integrei serviços third-party incluindo gateways de pagamento e APIs de IA</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> Node.js, Express, Prisma, PostgreSQL, Redis
          </p>
        </div>

        {/* Freelance */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Backend Freelance</h3>
              <p className="text-sm text-gray-700">Independente</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jan 2021 - Ago 2023</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Construí soluções backend personalizadas e APIs para vários projetos de clientes</li>
            <li>Projetei arquiteturas de banco de dados para requisitos de negócio complexos</li>
            <li>Implementei recursos em tempo real usando WebSockets e arquitetura event-driven</li>
            <li>Integrei serviços de IA (OpenAI, Gemini) para automação inteligente</li>
            <li>Implantei e mantive aplicações em AWS e plataformas cloud</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> Node.js, Python, MySQL, MongoDB, AWS
          </p>
        </div>

        {/* FlexTech */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Backend</h3>
              <p className="text-sm text-gray-700">FlexTech</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jun 2019 - Dez 2020</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Desenvolvi aplicações server-side com Node.js e Express</li>
            <li>Criei e mantive APIs RESTful para aplicações web e mobile</li>
            <li>Projetei e implementei schemas de banco de dados com MongoDB</li>
            <li>Implementei validação de dados, tratamento de erros e sistemas de logging</li>
            <li>Colaborei com equipe frontend para definir contratos de API</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> Node.js, Express, MongoDB, REST APIs
          </p>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Projetos Principais</h2>
        
        <div className="space-y-3">
          {/* Flock */}
          <div>
            <h3 className="text-lg font-bold">Flock - Backend Rede Social Empresarial</h3>
            <p className="text-sm text-gray-800 mb-1">
              Arquitetei e construí a infraestrutura backend completa incluindo autenticação de usuários, 
              perfis de empresas, gestão de projetos e sistemas de eventos. Implementei notificações em 
              tempo real e sistema de convites com lógica de autorização complexa.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Node.js, Prisma, MySQL, JWT, WebSockets
            </p>
          </div>

          {/* Fluxime */}
          <div>
            <h3 className="text-lg font-bold">Fluxime - Backend Gestão Financeira</h3>
            <p className="text-sm text-gray-800 mb-1">
              Construí um sistema backend robusto lidando com transações financeiras, integração WhatsApp 
              com IA e lógica de negócio complexa. Implementei processamento seguro de pagamentos e controle 
              de acesso multiusuário. Serve 1.000+ usuários ativos com 99.9% uptime.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Node.js, Prisma, MySQL, Gemini AI, API WhatsApp
            </p>
          </div>

          {/* LeadsAI */}
          <div>
            <h3 className="text-lg font-bold">LeadsAI - Backend Automação de Vendas</h3>
            <p className="text-sm text-gray-800 mb-1">
              Desenvolvi um sistema de automação de vendas com IA integrando OpenAI para gestão de conversas, 
              algoritmos de pontuação de leads e processamento de análises em tempo real. Lida com 2.500+ 
              clientes ativos com milhares de conversas diárias.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Express, API OpenAI, Prisma, MySQL, Redis
            </p>
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section>
        <h2 className="text-2xl font-bold border-b border-black mb-3">Competências Adicionais</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>• Arquitetura de Microserviços</p>
          <p>• Documentação de APIs (Swagger)</p>
          <p>• Otimização de Performance</p>
          <p>• Tratamento de Erros & Logging</p>
          <p>• Testes Unitários & Integração</p>
          <p>• Metodologia Agile/Scrum</p>
        </div>
      </section>
    </main>
  );
}
