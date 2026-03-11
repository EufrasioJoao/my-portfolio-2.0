import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";

export default function ResumeFrontendPtPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 max-w-[210mm] mx-auto">
      {/* Header */}
      <header className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">Eufrásio Jaime</h1>
        <p className="text-xl text-gray-700 mb-4">Desenvolvedor Frontend</p>
        
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
          Desenvolvedor frontend com mais de 5 anos de experiência construindo aplicações web modernas, 
          responsivas e performáticas. Especialista em React, Next.js e TypeScript com forte foco em 
          experiência do usuário, acessibilidade e código limpo. Histórico comprovado de criar interfaces 
          pixel-perfect e implementar designs UI/UX complexos que encantam os usuários.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b border-black mb-3">Competências Técnicas</h2>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold mb-1">Frontend Principal:</p>
            <p className="text-gray-700">React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Estilização & UI:</p>
            <p className="text-gray-700">Tailwind CSS, CSS Modules, Styled Components, SASS/SCSS, Design Responsivo</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Gestão de Estado & Dados:</p>
            <p className="text-gray-700">Redux, React Query, Context API, SWR, REST APIs, GraphQL</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Animação & Interação:</p>
            <p className="text-gray-700">Framer Motion, Animações CSS, GSAP, React Spring</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Ferramentas & Fluxo de Trabalho:</p>
            <p className="text-gray-700">Git, Webpack, Vite, npm/yarn, Figma, VS Code, Chrome DevTools</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Testes & Qualidade:</p>
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
        <h2 className="text-2xl font-bold border-b border-black mb-3">Experiência Profissional</h2>
        
        {/* Flexibilidade */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Frontend</h3>
              <p className="text-sm text-gray-700">Flexibilidade Lda</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Ago 2023 - Presente</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Construí aplicações web responsivas e acessíveis usando React e Next.js</li>
            <li>Implementei designs UI pixel-perfect com Tailwind CSS e técnicas CSS modernas</li>
            <li>Otimizei performance de aplicações alcançando pontuações Lighthouse 95+</li>
            <li>Colaborei com designers para criar experiências de usuário perfeitas</li>
            <li>Integrei APIs RESTful e gerenciei estado complexo de aplicações</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> React, Next.js, TypeScript, Tailwind CSS, Framer Motion
          </p>
        </div>

        {/* Freelance */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Frontend Freelance</h3>
              <p className="text-sm text-gray-700">Independente</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jan 2021 - Ago 2023</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Entreguei soluções frontend personalizadas para diversos clientes em várias indústrias</li>
            <li>Criei landing pages responsivas e aplicações web a partir de designs Figma</li>
            <li>Implementei animações complexas e componentes UI interativos</li>
            <li>Garanti compatibilidade cross-browser e responsividade mobile</li>
            <li>Mantive alta qualidade de código com TypeScript e melhores práticas modernas</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> React, Next.js, TypeScript, Tailwind CSS, Redux
          </p>
        </div>

        {/* FlexTech */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-bold">Desenvolvedor Frontend</h3>
              <p className="text-sm text-gray-700">FlexTech</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Jun 2019 - Dez 2020</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
            <li>Desenvolvi interfaces web responsivas com HTML, CSS e JavaScript</li>
            <li>Construí componentes React reutilizáveis seguindo princípios de design atômico</li>
            <li>Implementei validações de formulários e interfaces de usuário interativas</li>
            <li>Colaborei com equipe backend para integrar APIs e exibir dados</li>
            <li>Participei de revisões de código e mantive padrões de codificação</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-semibold">Tecnologias:</span> React, JavaScript, CSS3, HTML5, Bootstrap
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
              Construí o frontend completo para uma rede social empresarial com interações UI complexas, 
              atualizações em tempo real e design responsivo. Implementei recursos avançados de filtragem, 
              pesquisa e gestão de perfis.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Next.js, TypeScript, Tailwind CSS, Framer Motion
            </p>
          </div>

          {/* Fluxime */}
          <div>
            <h3 className="text-lg font-bold">Fluxime - Dashboard Financeiro</h3>
            <p className="text-sm text-gray-800 mb-1">
              Criei um dashboard financeiro interativo com gráficos em tempo real, visualizações de dados 
              e layouts responsivos. Implementei formulários complexos e fluxos multi-etapas para gestão 
              financeira. 1.000+ usuários ativos.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Next.js, React Query, Tailwind CSS, Chart.js
            </p>
          </div>

          {/* LeadsAI */}
          <div>
            <h3 className="text-lg font-bold">LeadsAI - Plataforma de Análise de Vendas</h3>
            <p className="text-sm text-gray-800 mb-1">
              Desenvolvi um dashboard de análise abrangente com visualização de dados em tempo real, 
              rastreamento de conversas e métricas de desempenho. Otimizado para performance com 
              grandes conjuntos de dados. 2.500+ clientes ativos.
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Tecnologias:</span> Next.js, TypeScript, Tailwind CSS, Recharts
            </p>
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section>
        <h2 className="text-2xl font-bold border-b border-black mb-3">Competências Adicionais</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>• Acessibilidade (WCAG, ARIA)</p>
          <p>• Progressive Web Apps (PWA)</p>
          <p>• Design Mobile-First</p>
          <p>• Testes Cross-Browser</p>
          <p>• Melhores Práticas UI/UX</p>
          <p>• Metodologia Agile/Scrum</p>
        </div>
      </section>
    </main>
  );
}
