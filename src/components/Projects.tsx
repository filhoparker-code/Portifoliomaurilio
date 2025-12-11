import { useState } from 'react';
import { FileText, BarChart3, Search, FileCheck, Calculator, ExternalLink, FileEdit } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AuditSystemDemo from './AuditSystemDemo';
import PowerBIDashboardDemo from './PowerBIDashboardDemo';
import EvidenceCounterDemo from './EvidenceCounterDemo';
import MasterListAuditDemo from './MasterListAuditDemo';
import EvidenceCountingDemo from './EvidenceCountingDemo';
import DocumentSystemDemo from './DocumentSystemDemo';

const Projects = () => {
  const [showAuditDemo, setShowAuditDemo] = useState(false);
  const [showPowerBIDemo, setShowPowerBIDemo] = useState(false);
  const [showEvidenceCounterDemo, setShowEvidenceCounterDemo] = useState(false);
  const [showMasterListDemo, setShowMasterListDemo] = useState(false);
  const [showEvidenceCountingDemo, setShowEvidenceCountingDemo] = useState(false);
  const [showDocumentSystemDemo, setShowDocumentSystemDemo] = useState(false);

  const projects = [
    {
      title: 'Sistema de Elaboração de Documentos',
      description: 'Aplicação web desenvolvida para automatizar a criação, versionamento e padronização de documentos corporativos, eliminando inconsistências de formatação e garantindo conformidade com normas de qualidade.',
      technologies: ['React', 'TypeScript', 'Form Management', 'PDF'],
      icon: FileEdit,
      demo: () => setShowDocumentSystemDemo(true)
    },
    {
      title: 'Sistema de Auditoria de Processos',
      description: 'Aplicação completa para gerenciamento de auditorias internas com geração automática de relatórios e dashboards de indicadores.',
      technologies: ['React', 'Node.js', 'MySQL', 'PDF'],
      icon: FileText,
      demo: () => setShowAuditDemo(true)
    },
    {
      title: 'Dashboard de Auditorias - Power BI',
      description: 'Dashboards interativos em Power BI para análise de ações corretivas, cronograma de auditorias e indicadores de conformidade.',
      technologies: ['Power BI', 'DAX', 'Data Analysis'],
      icon: BarChart3,
      demo: () => setShowPowerBIDemo(true)
    },
    {
      title: 'Verificador de Próximo Documento',
      description: 'Sistema Python para buscar automaticamente o próximo número de procedimento disponível por setor específico.',
      technologies: ['Python', 'Automation', 'Regex'],
      icon: Search,
      demo: () => setShowEvidenceCounterDemo(true)
    },
    {
      title: 'Auditoria da Lista Mestra',
      description: 'Ferramenta Python para análise da lista mestra de documentos, identificando divergências e documentos fora do padrão.',
      technologies: ['Python', 'Data Analysis', 'Excel'],
      icon: FileCheck,
      demo: () => setShowMasterListDemo(true)
    },
    {
      title: 'Contador de Evidências',
      description: 'Sistema para contagem automática de evidências em pastas internas, gerando indicadores mensais para o setor.',
      technologies: ['Python', 'PyPDF2', 'File Analysis'],
      icon: Calculator,
      demo: () => setShowEvidenceCountingDemo(true)
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'var(--section-projects)' }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Projetos que <span className="text-secondary">Desenvolvi</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Soluções digitais criadas para otimizar processos e qualidade
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onClick={project.demo}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <Icon size={32} className="text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Demo Button */}
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        project.demo();
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Ver Demo
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Demo Modals */}
      <DocumentSystemDemo isOpen={showDocumentSystemDemo} onClose={() => setShowDocumentSystemDemo(false)} />
      <AuditSystemDemo isOpen={showAuditDemo} onClose={() => setShowAuditDemo(false)} />
      <PowerBIDashboardDemo isOpen={showPowerBIDemo} onClose={() => setShowPowerBIDemo(false)} />
      <EvidenceCounterDemo isOpen={showEvidenceCounterDemo} onClose={() => setShowEvidenceCounterDemo(false)} />
      <MasterListAuditDemo isOpen={showMasterListDemo} onClose={() => setShowMasterListDemo(false)} />
      <EvidenceCountingDemo isOpen={showEvidenceCountingDemo} onClose={() => setShowEvidenceCountingDemo(false)} />
    </div>
  );
};

export default Projects;