import { Lightbulb, Users, Cog } from 'lucide-react';
import qualityToolsImage from '@/assets/quality-management-tools.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'var(--section-about)' }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Minha <span className="text-primary">História</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sou profissional apaixonado por processos, inovação e tecnologia. Atuo atualmente como 
                  <strong className="text-foreground"> Assistente de Processos na Vonixx</strong> e tenho experiência 
                  anterior na Aeris Energy, onde desenvolvi melhorias produtivas, auditorias internas e 
                  padronização de processos.
                </p>
                <p>
                  Atualmente estou aprendendo programação e já desenvolvi sistemas próprios, unindo minha 
                  bagagem em qualidade e gestão à tecnologia. Meu objetivo é criar soluções que otimizem 
                  processos e gerem valor real para as organizações.
                </p>
              </div>

              {/* Icons with descriptions */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Cog size={32} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Processos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Lightbulb size={32} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Inovação</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Users size={32} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Liderança</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={qualityToolsImage} 
                  alt="Ferramentas de Qualidade e Six Sigma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;