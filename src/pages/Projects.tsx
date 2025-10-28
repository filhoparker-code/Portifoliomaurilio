import { Code, ExternalLink, BarChart3, FileText, MessageSquare, Calculator, FileCheck, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import programmingWorkspaceImage from '@/assets/programming-workspace.jpg';
import AuditSystemDemo from '../components/AuditSystemDemo';
import AuditSystemPresentation from '../components/AuditSystemPresentation';
import PowerBIDashboardDemo from '../components/PowerBIDashboardDemo';
import PowerBIDashboardPresentation from '../components/PowerBIDashboardPresentation';
import EvidenceCounterDemo from '../components/EvidenceCounterDemo';
import EvidenceCounterPresentation from '../components/EvidenceCounterPresentation';
import MasterListAuditDemo from '../components/MasterListAuditDemo';
import MasterListAuditPresentation from '../components/MasterListAuditPresentation';
import EvidenceCountingDemo from '../components/EvidenceCountingDemo';
import EvidenceCountingPresentation from '../components/EvidenceCountingPresentation';
import Header from '../components/Header';

const Projects = () => {
  const [showAuditDemo, setShowAuditDemo] = useState(false);
  const [showAuditPresentation, setShowAuditPresentation] = useState(false);
  const [showPowerBIDemo, setShowPowerBIDemo] = useState(false);
  const [showPowerBIPresentation, setShowPowerBIPresentation] = useState(false);
  const [showEvidenceCounterDemo, setShowEvidenceCounterDemo] = useState(false);
  const [showEvidenceCounterPresentation, setShowEvidenceCounterPresentation] = useState(false);
  const [showMasterListDemo, setShowMasterListDemo] = useState(false);
  const [showMasterListPresentation, setShowMasterListPresentation] = useState(false);
  const [showEvidenceCountingDemo, setShowEvidenceCountingDemo] = useState(false);
  const [showEvidenceCountingPresentation, setShowEvidenceCountingPresentation] = useState(false);

  const projects = [
    {
      title: 'Sistema de Auditoria de Processos',
      description: 'Aplicação completa para gerenciamento de auditorias internas com geração automática de relatórios e dashboards de indicadores.',
      technologies: ['React', 'Node.js', 'MySQL', 'PDF Generation'],
      icon: FileText,
      status: 'Concluído',
      category: 'Web App',
      hasDemo: true,
      demoType: 'audit'
    },
    {
      title: 'Dashboard de Auditorias - Power BI',
      description: 'Dashboards interativos em Power BI para análise de ações corretivas, cronograma de auditorias e indicadores de conformidade.',
      technologies: ['Power BI', 'DAX', 'Data Analysis', 'KPI Dashboard'],
      icon: BarChart3,
      status: 'Concluído',
      category: 'Analytics',
      hasDemo: true,
      demoType: 'powerbi'
    },
    {
      title: 'Verificador de Próximo Documento',
      description: 'Sistema Python para buscar automaticamente o próximo número de procedimento disponível por setor específico.',
      technologies: ['Python', 'File System', 'Automation', 'Regex'],
      icon: Search,
      status: 'Concluído',
      category: 'Automation',
      hasDemo: true,
      demoType: 'evidenceCounter'
    },
    {
      title: 'Auditoria da Lista Mestra',
      description: 'Ferramenta Python para análise da lista mestra de documentos, identificando divergências e documentos fora do padrão.',
      technologies: ['Python', 'Data Analysis', 'File Processing', 'Excel Export'],
      icon: FileCheck,
      status: 'Concluído',
      category: 'Quality Control',
      hasDemo: true,
      demoType: 'masterList'
    },
    {
      title: 'Contador de Evidências',
      description: 'Sistema para contagem automática de evidências em pastas internas, gerando indicadores mensais para o setor.',
      technologies: ['Python', 'PyPDF2', 'File Analysis', 'Data Processing'],
      icon: Calculator,
      status: 'Concluído',
      category: 'Analytics',
      hasDemo: true,
      demoType: 'evidenceCounting'
    }
  ];

  const statusColors = {
    'Concluído': 'bg-green-100 text-green-700',
    'Em Desenvolvimento': 'bg-blue-100 text-blue-700',
    'Planejamento': 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--section-projects)' }}>
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Meus <span className="gradient-text">Projetos</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Soluções desenvolvidas combinando conhecimento em processos industriais com programação
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={index} 
                    className={`card-elevated group ${project.hasDemo ? 'cursor-pointer' : ''}`}
                    onClick={project.hasDemo ? () => {
                      switch (project.demoType) {
                        case 'audit':
                          setShowAuditPresentation(true);
                          break;
                        case 'powerbi':
                          setShowPowerBIPresentation(true);
                          break;
                        case 'evidenceCounter':
                          setShowEvidenceCounterPresentation(true);
                          break;
                        case 'masterList':
                          setShowMasterListPresentation(true);
                          break;
                        case 'evidenceCounting':
                          setShowEvidenceCountingPresentation(true);
                          break;
                      }
                    } : undefined}
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="process-icon group-hover:scale-110 transition-transform duration-300">
                            <Icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className={`font-semibold text-lg group-hover:text-primary transition-colors ${project.hasDemo ? 'hover:underline' : ''}`}>
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.category}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t border-border">
                        {project.hasDemo ? (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              switch (project.demoType) {
                                case 'audit':
                                  setShowAuditDemo(true);
                                  break;
                                case 'powerbi':
                                  setShowPowerBIDemo(true);
                                  break;
                                case 'evidenceCounter':
                                  setShowEvidenceCounterDemo(true);
                                  break;
                                case 'masterList':
                                  setShowMasterListDemo(true);
                                  break;
                                case 'evidenceCounting':
                                  setShowEvidenceCountingDemo(true);
                                  break;
                              }
                            }}
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Ver Demo
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="flex-1" disabled>
                            <ExternalLink size={16} className="mr-2" />
                            Em Breve
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src={programmingWorkspaceImage} 
                    alt="Programming Workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4">
                    Interessado em colaborar?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Estou sempre aberto a novos desafios e oportunidades de desenvolvimento. 
                    Vamos conversar sobre como posso ajudar seu projeto!
                  </p>
                  <Button className="btn-primary">
                    <MessageSquare size={20} className="mr-2" />
                    Iniciar Conversa
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Demo Modals */}
      <AuditSystemDemo 
        isOpen={showAuditDemo} 
        onClose={() => setShowAuditDemo(false)} 
      />
      
      <PowerBIDashboardDemo 
        isOpen={showPowerBIDemo} 
        onClose={() => setShowPowerBIDemo(false)} 
      />
      
      <EvidenceCounterDemo 
        isOpen={showEvidenceCounterDemo} 
        onClose={() => setShowEvidenceCounterDemo(false)} 
      />
      
      <MasterListAuditDemo 
        isOpen={showMasterListDemo} 
        onClose={() => setShowMasterListDemo(false)} 
      />
      
      <EvidenceCountingDemo 
        isOpen={showEvidenceCountingDemo} 
        onClose={() => setShowEvidenceCountingDemo(false)} 
      />

      {/* Presentation Modals */}
      <AuditSystemPresentation 
        isOpen={showAuditPresentation} 
        onClose={() => setShowAuditPresentation(false)} 
      />
      
      <PowerBIDashboardPresentation 
        isOpen={showPowerBIPresentation} 
        onClose={() => setShowPowerBIPresentation(false)} 
      />
      
      <EvidenceCounterPresentation 
        isOpen={showEvidenceCounterPresentation} 
        onClose={() => setShowEvidenceCounterPresentation(false)} 
      />
      
      <MasterListAuditPresentation 
        isOpen={showMasterListPresentation} 
        onClose={() => setShowMasterListPresentation(false)} 
      />
      
      <EvidenceCountingPresentation 
        isOpen={showEvidenceCountingPresentation} 
        onClose={() => setShowEvidenceCountingPresentation(false)} 
      />
    </div>
  );
};

export default Projects;