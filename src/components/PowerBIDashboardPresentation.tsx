import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, BarChart3, ChevronLeft, ChevronRight, Monitor } from 'lucide-react';
import { useState } from 'react';

interface PowerBIDashboardPresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const PowerBIDashboardPresentation = ({ isOpen, onClose }: PowerBIDashboardPresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Dashboard de Auditorias - Power BI',
      subtitle: 'Visão Geral do Projeto',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Sobre o Projeto</h3>
            <p className="text-blue-700 leading-relaxed">
              Dashboard desenvolvido em Power BI para análise completa do sistema de auditorias internas. 
              Composto por dois painéis principais: Dashboard de Ações Corretivas e Dashboard de Cronograma 
              de Auditorias, oferecendo uma visão estratégica e operacional do processo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Tecnologias Utilizadas</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Power BI Desktop</li>
                <li>• DAX (Data Analysis Expressions)</li>
                <li>• Power Query</li>
                <li>• Análise de Dados</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Benefícios</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Visão em tempo real</li>
                <li>• Análise de tendências</li>
                <li>• Indicadores de performance</li>
                <li>• Relatórios automáticos</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Dashboard de Ações Corretivas',
      subtitle: 'Painel de Monitoramento de Ações',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Funcionalidades Principais</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Indicadores de Status</h4>
                <ul className="text-sm space-y-1">
                  <li>• Ações em andamento</li>
                  <li>• Ações concluídas</li>
                  <li>• Ações em atraso</li>
                  <li>• Taxa de conformidade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Análises Detalhadas</h4>
                <ul className="text-sm space-y-1">
                  <li>• Distribuição por setor</li>
                  <li>• Histórico de evolução</li>
                  <li>• Prazos de execução</li>
                  <li>• Responsáveis por ação</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-blue-600 mb-3">Visualizações Disponíveis</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <BarChart3 className="mx-auto text-blue-600 mb-2" size={32} />
                <p className="font-medium">Gráficos de Status</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Monitor className="mx-auto text-blue-600 mb-2" size={32} />
                <p className="font-medium">Tabelas Dinâmicas</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Dashboard de Cronograma',
      subtitle: 'Planejamento e Controle de Auditorias',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Gestão de Cronograma</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Planejamento</h4>
                <ul className="text-sm space-y-1">
                  <li>• Auditorias programadas</li>
                  <li>• Distribuição mensal</li>
                  <li>• Setores auditados</li>
                  <li>• Recursos necessários</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Acompanhamento</h4>
                <ul className="text-sm space-y-1">
                  <li>• Auditorias realizadas</li>
                  <li>• Taxa de cumprimento</li>
                  <li>• Desvios de cronograma</li>
                  <li>• Próximas auditorias</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-green-600 mb-3">Indicadores de Performance</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span>Compliance do Cronograma</span>
                <span className="font-bold text-green-600">95%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <span>Auditorias no Prazo</span>
                <span className="font-bold text-blue-600">87%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                <span>Setores Cobertos</span>
                <span className="font-bold text-orange-600">100%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Resultados e Impacto',
      subtitle: 'Benefícios Alcançados',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-blue-800 font-medium">Redução no Tempo de Análise</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-green-800 font-medium">Taxa de Conformidade</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-purple-800 font-medium">Automação de Relatórios</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Principais Conquistas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">Centralização de todas as informações de auditoria em um único painel</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                <p className="text-gray-700">Melhoria significativa na tomada de decisões baseadas em dados</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                <p className="text-gray-700">Otimização do processo de acompanhamento de ações corretivas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                <p className="text-gray-700">Padronização e automatização dos indicadores de qualidade</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <BarChart3 className="text-primary" size={24} />
              Apresentação - Dashboard Power BI
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          {/* Slide Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-600 text-lg">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Slide Content */}
          <div className="mb-8">
            {slides[currentSlide].content}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Anterior
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2"
            >
              Próximo
              <ChevronRight size={16} />
            </Button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            Slide {currentSlide + 1} de {slides.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PowerBIDashboardPresentation;