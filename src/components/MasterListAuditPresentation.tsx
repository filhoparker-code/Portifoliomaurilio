import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, FileCheck, ChevronLeft, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface MasterListAuditPresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MasterListAuditPresentation = ({ isOpen, onClose }: MasterListAuditPresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Auditoria da Lista Mestra',
      subtitle: 'Sistema de Análise de Conformidade Documental',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Sobre o Projeto</h3>
            <p className="text-purple-700 leading-relaxed">
              Ferramenta desenvolvida em Python para análise automatizada da lista mestra de documentos 
              da empresa. O sistema compara os arquivos físicos nos diretórios com as bases documentais, 
              identificando divergências e documentos fora do padrão estabelecido para garantir conformidade 
              e organização documental.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-purple-600 mb-2">Tecnologias Utilizadas</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Python 3.8+</li>
                <li>• Análise de Dados</li>
                <li>• Processamento de Arquivos</li>
                <li>• Exportação para Excel</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-purple-600 mb-2">Necessidade Atendida</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Análises manuais frequentes</li>
                <li>• Identificação de não conformidades</li>
                <li>• Correção de padrões documentais</li>
                <li>• Manutenção da qualidade</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Funcionalidades do Sistema',
      subtitle: 'Processo de Auditoria Automatizada',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Análise Comparativa</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Verificações Realizadas</h4>
                <ul className="text-sm space-y-1">
                  <li>• Conformidade de nomenclatura</li>
                  <li>• Estrutura de diretórios</li>
                  <li>• Versionamento de documentos</li>
                  <li>• Padrões estabelecidos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Detecção de Problemas</h4>
                <ul className="text-sm space-y-1">
                  <li>• Arquivos fora do padrão</li>
                  <li>• Nomenclaturas incorretas</li>
                  <li>• Documentos não catalogados</li>
                  <li>• Versões desatualizadas</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-purple-600 mb-3">Processo de Auditoria</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <div className="font-medium">Carregamento da Lista Mestra</div>
                  <div className="text-sm text-gray-600">Importação dos dados de referência</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <div className="font-medium">Varredura de Diretórios</div>
                  <div className="text-sm text-gray-600">Análise dos arquivos físicos existentes</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <div className="font-medium">Comparação e Análise</div>
                  <div className="text-sm text-gray-600">Identificação de divergências e não conformidades</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <div className="font-medium">Geração de Relatório</div>
                  <div className="text-sm text-gray-600">Exportação dos resultados e recomendações</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Interface e Resultados',
      subtitle: 'Tela de Análise e Relatórios',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Dashboard de Auditoria</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-3">Indicadores de Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-green-100 rounded">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-sm">Conformes</span>
                    </div>
                    <span className="font-bold text-green-600">247</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-100 rounded">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="text-red-600" size={16} />
                      <span className="text-sm">Não Conformes</span>
                    </div>
                    <span className="font-bold text-red-600">23</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-3">Tipos de Problemas</h4>
                <div className="space-y-2 text-sm">
                  <div>• Nomenclatura incorreta (45%)</div>
                  <div>• Versionamento desatualizado (30%)</div>
                  <div>• Localização inadequada (15%)</div>
                  <div>• Falta de catalogação (10%)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-purple-600 mb-3">Relatório Detalhado</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Documento</th>
                    <th className="p-2 text-left">Problema</th>
                    <th className="p-2 text-left">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">
                      <AlertCircle className="text-red-600" size={16} />
                    </td>
                    <td className="p-2 font-mono text-xs">PQ-001-V02.pdf</td>
                    <td className="p-2">Versão desatualizada</td>
                    <td className="p-2 text-blue-600">Atualizar para V03</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <CheckCircle className="text-green-600" size={16} />
                    </td>
                    <td className="p-2 font-mono text-xs">PP-015-V01.pdf</td>
                    <td className="p-2">Conforme</td>
                    <td className="p-2 text-gray-500">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Resultados e Impacto',
      subtitle: 'Benefícios na Gestão Documental',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 rounded-lg p-6 text-center border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-purple-800 font-medium">Redução no Tempo de Auditoria</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-green-800 font-medium">Taxa de Conformidade</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-blue-800 font-medium">Cobertura de Análise</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Principais Conquistas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                <p className="text-gray-700">Automatização completa do processo de auditoria documental</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                <p className="text-gray-700">Identificação proativa de não conformidades antes das auditorias</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">Padronização e melhoria contínua da gestão documental</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                <p className="text-gray-700">Redução significativa de não conformidades em auditorias externas</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-100 rounded-lg p-6 border border-purple-300">
            <h4 className="font-semibold text-purple-800 mb-2">Impacto Estratégico</h4>
            <p className="text-purple-700 text-sm">
              Este projeto transformou a gestão documental da empresa, eliminando processos manuais 
              demorados e proporcionando uma visão clara e atualizada da conformidade dos documentos. 
              A ferramenta tornou-se essencial para manutenção dos padrões de qualidade e preparação 
              para auditorias internas e externas.
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
              <FileCheck className="text-primary" size={24} />
              Apresentação - Auditoria da Lista Mestra
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          {/* Slide Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-600 mb-2">
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
                      ? 'bg-purple-600' 
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

export default MasterListAuditPresentation;