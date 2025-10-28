import { 
  Settings, 
  BarChart3, 
  Target, 
  Users, 
  FileSpreadsheet, 
  PenTool, 
  GitBranch,
  Database,
  Code,
  Cog,
  TrendingUp,
  Award
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import PatternDecorations from './PatternDecorations';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Ferramentas & Softwares',
      icon: Settings,
      skills: [
        { name: 'SAP', level: 85, icon: Database },
        { name: 'AutoCAD', level: 90, icon: PenTool },
        { name: 'Excel Avançado', level: 95, icon: FileSpreadsheet },
        { name: 'Microsoft Project', level: 80, icon: BarChart3 },
        { name: 'SketchUp', level: 85, icon: PenTool }
      ]
    },
    {
      title: 'Metodologias',
      icon: Target,
      skills: [
        { name: 'Lean Manufacturing', level: 90, icon: TrendingUp },
        { name: 'Six Sigma (Green Belt)', level: 85, icon: Award },
        { name: 'Melhoria Contínua', level: 95, icon: Cog },
        { name: 'PDCA', level: 90, icon: GitBranch },
        { name: 'Auditoria Interna', level: 85, icon: Target }
      ]
    },
    {
      title: 'Gestão & Liderança',
      icon: Users,
      skills: [
        { name: 'Treinamento de Equipes', level: 90, icon: Users },
        { name: 'Análise de Processos', level: 95, icon: BarChart3 },
        { name: 'Gestão de Projetos', level: 80, icon: Target },
        { name: 'Documentação Técnica', level: 85, icon: FileSpreadsheet }
      ]
    },
    {
      title: 'Programação & Tecnologia',
      icon: Code,
      skills: [
        { name: 'Python', level: 70, icon: Code },
        { name: 'React', level: 65, icon: Code },
        { name: 'JavaScript', level: 70, icon: Code },
        { name: 'Android Development', level: 60, icon: Code },
        { name: 'APIs & Automation', level: 75, icon: Cog }
      ]
    }
  ];

  const qualityTools = [
    { name: 'Diagrama de Ishikawa', icon: GitBranch },
    { name: 'Fluxogramas', icon: BarChart3 },
    { name: 'Indicadores KPI', icon: TrendingUp },
    { name: 'Ciclo PDCA', icon: Target },
    { name: 'Kanban', icon: Cog },
    { name: '5S', icon: Settings }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <PatternDecorations variant="geometric" />
      
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Minhas <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Competências técnicas e metodológicas em processos industriais, qualidade e tecnologia
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-h-96 overflow-y-auto">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <Card key={index} className="card-elevated">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="process-icon">
                        <CategoryIcon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, idx) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <SkillIcon size={16} className="text-primary" />
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quality Tools Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-8">
              Ferramentas da <span className="gradient-text">Qualidade</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {qualityTools.map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <div key={index} className="group">
                    <Card className="card-elevated text-center h-full">
                      <div className="process-icon mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <ToolIcon size={24} className="text-primary" />
                      </div>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        {tool.name}
                      </p>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Anos de Experiência', value: '4+', icon: Award },
                { label: 'Projetos Concluídos', value: '15+', icon: Target },
                { label: 'Auditorias Realizadas', value: '30+', icon: BarChart3 },
                { label: 'Equipes Treinadas', value: '10+', icon: Users }
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <Card key={index} className="card-elevated text-center">
                    <div className="process-icon mx-auto mb-3">
                      <StatIcon size={24} className="text-primary" />
                    </div>
                    <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;