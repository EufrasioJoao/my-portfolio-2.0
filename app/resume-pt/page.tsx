import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";

export default function ResumePtPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 max-w-[210mm] mx-auto">
      {/* Header */}
      <header className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">Eufrásio Jaime</h1>
        <p className="text-xl text-gray-700 mb-4">Desenvolvedor Full Stack</p>
        
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
          Desenvolvedor full-stack com mais de 5 anos de experiência construindo aplicações web e mobile 
          escaláveis. Especializado em React, Next.js, Node.js e infraestrutura em nuvem com um histórico 
          comprovado de entrega de produtos de alto impacto. Fortes habilidades de resolução de problemas 
          e expertise abrangendo todo o ciclo de desenvolvimento desde design até implantação e otimização.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Competências Técnicas</h2>
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
            <p className="font-semibold mb-1">Bancos de Dados:</p>
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
            <p className="font-semibold mb-1">IA & Ferramentas:</p>
            <p className="text-gray-700">OpenAI, Gemini AI, Git, Figma, VS Code</p>
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
              <h3 className="text-lg font-bold">Engenheiro de Software</h3>
              <p className="text-sm text-gray-700">Flexibilidade Lda</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Ago 2023 - Presente</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Construindo aplicações web escaláveis com frameworks modernos</li>
            <li>Implementando interfaces responsivas e amigáveis ao usuário</li>
            <li>Colaborando com equipes para entregar projetos no prazo</li>
            <li>Contribuindo para revisões de código e melhores práticas</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS
          </p>
        </div>

        {/* Freelance */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Independente</h3>
              <p className="text-sm text-gray-700">Freelance & Consultoria</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jan 2021 - Ago 2023</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Entreguei soluções web personalizadas para vários clientes</li>
            <li>Construí e lancei projetos e produtos pessoais</li>
            <li>Forneci consultoria técnica e revisões de código</li>
            <li>Gerenciei o ciclo completo de projetos de forma independente</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> React, Next.js, Python, Node.js, MySQL, Vercel
          </p>
        </div>

        {/* FlexTech */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Full Stack</h3>
              <p className="text-sm text-gray-700">FlexTech</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jun 2019 - Dez 2020</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Desenvolvi interfaces web responsivas com HTML, CSS e JavaScript</li>
            <li>Construí aplicações server-side e integrei com bancos de dados</li>
            <li>Participei do ciclo completo de desenvolvimento desde o conceito até a implantação</li>
            <li>Colaborei com membros da equipe na implementação de funcionalidades</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> React, JavaScript, Node.js, MongoDB, Express, CSS
          </p>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Projetos Principais</h2>
        
        <div className="space-y-3">
          {/* Flock */}
          <div>
            <h3 className="text-lg font-bold">Flock - Rede Social Empresarial</h3>
            <p className="text-sm text-gray-800 mb-1">
              Rede social empresarial exclusiva para empresas moçambicanas. Plataforma para networking, 
              colaboração em projetos e eventos do ecossistema empresarial.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Next.js, TypeScript, Prisma, MySQL
            </p>
          </div>

          {/* Fluxime */}
          <div>
            <h3 className="text-lg font-bold">Fluxime - Plataforma de Gestão Financeira</h3>
            <p className="text-sm text-gray-800 mb-1">
              Plataforma completa de gestão financeira pessoal e empresarial com assistente IA no WhatsApp. 
              Dashboard interativo, relatórios e controle total. 1.000+ usuários ativos.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Next.js, Prisma, MySQL, Gemini AI
            </p>
          </div>

          {/* LeadsAI */}
          <div>
            <h3 className="text-lg font-bold">LeadsAI - Automação de Vendas</h3>
            <p className="text-sm text-gray-800 mb-1">
              Automação de vendas com IA integrada ao WhatsApp. Conversas automatizadas, identificação 
              de oportunidades e insights de vendas em tempo real. 2.500+ clientes ativos.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Next.js, Express, OpenAI, Prisma, MySQL
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
