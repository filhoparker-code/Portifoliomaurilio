import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, X, BarChart3, FileText, Settings, Users, Calendar, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

interface AuditSystemPresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuditSystemPresentation = ({ isOpen, onClose }: AuditSystemPresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Sistema de Auditoria de Processos",
      subtitle: "Visão Geral do Sistema",
      icon: FileText,
      content: (
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <FileText size={64} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Sistema Completo de Gestão de Auditorias</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desenvolvido para automatizar e otimizar processos de auditoria interna, 
              oferecendo controle total desde o planejamento até o acompanhamento de ações corretivas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <BarChart3 className="text-primary mx-auto mb-2" size={32} />
              <p className="text-sm font-medium">Relatórios Automáticos</p>
            </div>
            <div className="text-center">
              <Users className="text-primary mx-auto mb-2" size={32} />
              <p className="text-sm font-medium">Gestão de Equipes</p>
            </div>
            <div className="text-center">
              <Calendar className="text-primary mx-auto mb-2" size={32} />
              <p className="text-sm font-medium">Cronogramas</p>
            </div>
            <div className="text-center">
              <TrendingUp className="text-primary mx-auto mb-2" size={32} />
              <p className="text-sm font-medium">Indicadores KPI</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Dashboard Principal",
      subtitle: "Visão Centralizada dos Indicadores",
      icon: BarChart3,
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <BarChart3 className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Dashboard Executivo</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Visão geral em tempo real de todas as auditorias
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Gráficos interativos de performance e conformidade
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Alertas automáticos para prazos e não conformidades
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Resumo executivo com métricas principais
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Funcionalidade Principal:</strong> O dashboard oferece uma visão consolidada 
              de todos os processos de auditoria, permitindo tomada de decisões rápida e baseada em dados.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Relatórios Inteligentes",
      subtitle: "Geração Automática de Documentação",
      icon: FileText,
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <FileText className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Sistema de Relatórios</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Geração automática de relatórios padronizados
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Templates personalizáveis para diferentes tipos de auditoria
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Exportação em PDF com formatação profissional
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Histórico completo de versões e alterações
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Vantagem:</strong> Reduz em até 80% o tempo gasto na elaboração de relatórios, 
              mantendo a padronização e qualidade da documentação.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Indicadores de Performance",
      subtitle: "Monitoramento de KPIs em Tempo Real",
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <TrendingUp className="text-purple-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Métricas e Indicadores</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Taxa de conformidade por processo e departamento
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Tempo médio de resolução de não conformidades
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Eficácia das ações corretivas implementadas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Tendências e análises preditivas
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Impacto:</strong> Permite identificação proativa de problemas e 
              acompanhamento da melhoria contínua dos processos organizacionais.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Gestão de Ações Corretivas",
      subtitle: "Controle e Acompanhamento de Melhorias",
      icon: AlertCircle,
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <AlertCircle className="text-orange-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Planos de Ação</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Cadastro e priorização de ações corretivas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Atribuição de responsáveis e prazos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Notificações automáticas de vencimentos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Acompanhamento do status de implementação
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Resultado:</strong> Garante que todas as não conformidades sejam tratadas 
              adequadamente e que as melhorias sejam efetivamente implementadas.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Cronograma de Auditorias",
      subtitle: "Planejamento e Organização Temporal",
      icon: Calendar,
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-cyan-200">
            <CardContent className="p-6">
              <Calendar className="text-cyan-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Agenda Inteligente</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Planejamento anual de auditorias por processo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Distribuição equilibrada de recursos e equipes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Alertas preventivos para preparação
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Integração com calendários corporativos
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Organização:</strong> Facilita o planejamento estratégico das auditorias, 
              otimizando recursos e garantindo cobertura adequada de todos os processos.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Tecnologias Utilizadas",
      subtitle: "Stack Técnico do Projeto",
      icon: Settings,
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
            <CardContent className="p-6">
              <Settings className="text-slate-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Arquitetura do Sistema</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• React.js com TypeScript</li>
                    <li>• Interface responsiva e intuitiva</li>
                    <li>• Gráficos interativos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Node.js com Express</li>
                    <li>• Banco de dados MySQL</li>
                    <li>• APIs RESTful</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Funcionalidades</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Geração automática de PDFs</li>
                    <li>• Sistema de notificações</li>
                    <li>• Controle de acesso por perfis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Integração</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• APIs de calendário</li>
                    <li>• Exportação de dados</li>
                    <li>• Backup automático</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <CurrentIcon className="text-primary" size={24} />
            <div>
              <DialogTitle className="text-xl">{slides[currentSlide].title}</DialogTitle>
              <p className="text-sm text-muted-foreground">{slides[currentSlide].subtitle}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </DialogHeader>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Slide Content */}
        <div className="min-h-[400px]">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            Anterior
          </Button>
          
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} de {slides.length}
          </span>
          
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
      </DialogContent>
    </Dialog>
  );
};

export default AuditSystemPresentation;