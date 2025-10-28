import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Calculator, ChevronLeft, ChevronRight, FileText, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface EvidenceCountingPresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const EvidenceCountingPresentation = ({ isOpen, onClose }: EvidenceCountingPresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Contador de Evidências',
      subtitle: 'Sistema de Contagem Automática para Indicadores',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Sobre o Projeto</h3>
            <p className="text-orange-700 leading-relaxed">
              Sistema desenvolvido em Python para contagem automática de evidências adicionadas nas 
              pastas internas do setor. O projeto surgiu da necessidade de realizar um indicador mensal 
              preciso sobre a quantidade de evidências geradas, proporcionando dados essenciais para 
              métricas de qualidade e produtividade setorial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-orange-600 mb-2">Tecnologias Utilizadas</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Python 3.8+</li>
                <li>• PyPDF2 (leitura de PDFs)</li>
                <li>• Análise de Arquivos</li>
                <li>• Processamento de Dados</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-orange-600 mb-2">Objetivo Principal</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Automação da contagem</li>
                <li>• Indicadores mensais precisos</li>
                <li>• Métricas de produtividade</li>
                <li>• Relatórios automáticos</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Funcionalidades do Sistema',
      subtitle: 'Processo de Contagem Inteligente',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Processo de Análise</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Detecção de Evidências</h4>
                <ul className="text-sm space-y-1">
                  <li>• Identificação por códigos padronizados</li>
                  <li>• Filtragem por período específico</li>
                  <li>• Suporte múltiplos formatos</li>
                  <li>• Validação de conformidade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Processamento</h4>
                <ul className="text-sm space-y-1">
                  <li>• Varredura automática de pastas</li>
                  <li>• Análise de metadados</li>
                  <li>• Contagem por categoria</li>
                  <li>• Geração de estatísticas</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-orange-600 mb-3">Fluxo de Contagem</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <div className="font-medium">Seleção do Período</div>
                  <div className="text-sm text-gray-600">Definição do mês/ano para análise</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <div className="font-medium">Varredura das Pastas</div>
                  <div className="text-sm text-gray-600">Busca automática em diretórios internos</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <div className="font-medium">Contagem e Catalogação</div>
                  <div className="text-sm text-gray-600">Identificação e contagem por código</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <div className="font-medium">Relatório Final</div>
                  <div className="text-sm text-gray-600">Geração do indicador mensal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Interface e Resultados',
      subtitle: 'Tela de Contagem e Relatórios',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Painel de Contagem</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-3">Controles de Entrada</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calculator className="text-blue-600" size={16} />
                    <span>Seletor de Ano</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="text-blue-600" size={16} />
                    <span>Seletor de Mês</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-blue-600" size={16} />
                    <span>Botão Executar</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-3">Resultados</h4>
                <div className="space-y-2 text-sm">
                  <div>• Total de evidências encontradas</div>
                  <div>• Detalhamento por código</div>
                  <div>• Quantidade por categoria</div>
                  <div>• Tempo de processamento</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-orange-600 mb-3">Exemplo de Resultado - Maio 2025</h4>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">12 Evidências</div>
              <div className="text-blue-800">Total do Período</div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-left">Código Padronizado</th>
                    <th className="p-2 text-center">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 text-blue-600 font-medium">1</td>
                    <td className="p-2 font-mono">DG-SGI-17-V00</td>
                    <td className="p-2 text-center">1</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 text-blue-600 font-medium">2</td>
                    <td className="p-2 font-mono">FL-CONTR-17-V00</td>
                    <td className="p-2 text-center">1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 text-blue-600 font-medium">3</td>
                    <td className="p-2 font-mono">FL-DP-01-V03</td>
                    <td className="p-2 text-center">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Resultados e Benefícios',
      subtitle: 'Impacto nos Indicadores Setoriais',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-orange-50 rounded-lg p-6 text-center border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-orange-800 font-medium">Precisão na Contagem</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
              <div className="text-green-800 font-medium">Redução de Tempo</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-blue-800 font-medium">Automação do Processo</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Principais Conquistas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                <p className="text-gray-700">Eliminação da contagem manual mensal de evidências</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                <p className="text-gray-700">Geração automática de indicadores mensais precisos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">Padronização do processo de coleta de métricas setoriais</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                <p className="text-gray-700">Melhoria na qualidade dos relatórios mensais do setor</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-100 rounded-lg p-6 border border-orange-300">
            <h4 className="font-semibold text-orange-800 mb-2">Valor Estratégico</h4>
            <p className="text-orange-700 text-sm">
              Este projeto transformou a forma como o setor acompanha sua produtividade mensal, 
              fornecendo dados precisos e confiáveis para tomada de decisões estratégicas. 
              A automação eliminou erros humanos e liberou recursos para atividades de maior valor agregado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-orange-600 mb-2">Formatos Suportados</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Arquivos PDF (.pdf)</li>
                <li>• Documentos Word (.docx)</li>
                <li>• Arquivos de texto (.txt)</li>
                <li>• Planilhas Excel (.xlsx)</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-orange-600 mb-2">Indicadores Gerados</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Total mensal de evidências</li>
                <li>• Distribuição por tipo de código</li>
                <li>• Evolução histórica</li>
                <li>• Comparativo com meses anteriores</li>
              </ul>
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
              <Calculator className="text-primary" size={24} />
              Apresentação - Contador de Evidências
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          {/* Slide Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-2">
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
                      ? 'bg-orange-600' 
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

export default EvidenceCountingPresentation;