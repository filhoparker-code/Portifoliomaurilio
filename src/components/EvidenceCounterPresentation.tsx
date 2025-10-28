import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Search, ChevronLeft, ChevronRight, FileText, Folder } from 'lucide-react';
import { useState } from 'react';

interface EvidenceCounterPresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const EvidenceCounterPresentation = ({ isOpen, onClose }: EvidenceCounterPresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Verificador de Próximo Documento',
      subtitle: 'Sistema de Busca Automática de Numeração',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Sobre o Projeto</h3>
            <p className="text-green-700 leading-relaxed">
              Sistema desenvolvido em Python para automatizar a busca do próximo número de procedimento 
              disponível por setor específico. Surgiu da necessidade de ter um sistema capaz de buscar 
              sempre que necessário o próximo número que deve ser utilizado para cada documento setorial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-green-600 mb-2">Tecnologias Utilizadas</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Python 3.8+</li>
                <li>• Sistema de Arquivos</li>
                <li>• Expressões Regulares (Regex)</li>
                <li>• Automação de Processos</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-green-600 mb-2">Problema Resolvido</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Busca manual demorada</li>
                <li>• Erros de numeração</li>
                <li>• Conflitos de códigos</li>
                <li>• Perda de tempo operacional</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Funcionalidades do Sistema',
      subtitle: 'Como Funciona a Busca Automática',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Processo de Verificação</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Entrada de Dados</h4>
                <ul className="text-sm space-y-1">
                  <li>• Seleção do setor</li>
                  <li>• Tipo de documento</li>
                  <li>• Padrão de numeração</li>
                  <li>• Diretório de busca</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Processamento</h4>
                <ul className="text-sm space-y-1">
                  <li>• Varredura de arquivos</li>
                  <li>• Extração de números</li>
                  <li>• Análise de padrões</li>
                  <li>• Identificação do próximo</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-green-600 mb-3">Fluxo de Trabalho</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <div className="font-medium">Seleção do Setor</div>
                  <div className="text-sm text-gray-600">Escolha do departamento específico</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <div className="font-medium">Busca Automática</div>
                  <div className="text-sm text-gray-600">Varredura nos diretórios setoriais</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <div className="font-medium">Identificação do Próximo</div>
                  <div className="text-sm text-gray-600">Cálculo do próximo número disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Interface do Sistema',
      subtitle: 'Tela Principal de Operação',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Componentes da Interface</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-3">Painel de Controle</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Folder className="text-blue-600" size={16} />
                    <span>Seletor de Setor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="text-blue-600" size={16} />
                    <span>Tipo de Documento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="text-blue-600" size={16} />
                    <span>Botão de Busca</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-3">Área de Resultados</h4>
                <div className="space-y-2 text-sm">
                  <div>• Próximo número disponível</div>
                  <div>• Último documento encontrado</div>
                  <div>• Status da verificação</div>
                  <div>• Tempo de processamento</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-blue-600 mb-3">Setores Suportados</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-700">Qualidade</div>
                <div className="text-xs text-blue-600">PQ-XXX</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="font-medium text-green-700">Produção</div>
                <div className="text-xs text-green-600">PP-XXX</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-700">RH</div>
                <div className="text-xs text-purple-600">PR-XXX</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="font-medium text-orange-700">Manutenção</div>
                <div className="text-xs text-orange-600">PM-XXX</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Resultados e Benefícios',
      subtitle: 'Impacto na Operação',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-green-800 font-medium">Redução no Tempo</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-blue-800 font-medium">Erros de Numeração</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-purple-800 font-medium">Automação</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Principais Conquistas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                <p className="text-gray-700">Eliminação completa de conflitos na numeração de documentos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">Redução significativa no tempo de criação de novos procedimentos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                <p className="text-gray-700">Padronização do processo de numeração em todos os setores</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                <p className="text-gray-700">Melhoria na organização e rastreabilidade dos documentos</p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 rounded-lg p-6 border border-green-300">
            <h4 className="font-semibold text-green-800 mb-2">Tecnologia Aplicada</h4>
            <p className="text-green-700 text-sm">
              Este projeto demonstra o uso eficaz de Python para automação de processos administrativos, 
              combinando manipulação de arquivos, expressões regulares e lógica de negócio para resolver 
              um problema operacional real de forma elegante e eficiente.
            </p>
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
              <Search className="text-primary" size={24} />
              Apresentação - Verificador de Próximo Documento
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          {/* Slide Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-600 mb-2">
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
                      ? 'bg-green-600' 
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

export default EvidenceCounterPresentation;