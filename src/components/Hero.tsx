import { Mail, Phone, Download, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'var(--section-hero)' }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Profile Image */}
                <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/lovable-uploads/75f14b11-85df-43fd-b5d6-e2f110b67434.png" 
                    alt="Maurilio Cesar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Right - Content */}
                <div className="text-white space-y-6">
              <div className="space-y-2">
                <p className="text-xl font-medium">Olá, eu sou</p>
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span translate="no">Maurilio Cesar</span>
                </h1>
                <p className="text-2xl font-medium text-white/90">
                  Assistente de Processos | Estudante de Engenharia de Produção | Estudante de Processos Gerenciais
                </p>
              </div>

              <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                Profissional apaixonado por processos, inovação e tecnologia. 
                Especializado em qualidade industrial, auditoria interna e desenvolvimento de sistemas 
                para otimização de processos.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  <a href="/Maurilio_Cesar_curriculo.pdf" download>
                    <Download size={20} className="mr-2" />
                    Baixar CV
                  </a>
                </Button>

                <Button variant="secondary" size="lg" className="rounded-full font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <MessageSquare size={20} className="mr-2" />
                  Entrar em Contato
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-6 text-white/90">
                <a href="mailto:mauriliocesar.n@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={20} />
                  <span className="text-sm">mauriliocesar.n@gmail.com</span>
                </a>
                <a href="tel:+5585992993933" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={20} />
                  <span className="text-sm">(85) 99299-3933</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;