import { Building2, GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Assistente de Processos',
      company: 'Vonixx',
      period: 'Atual',
      status: 'current',
      description: [
        'Apoio em otimização e análise de processos industriais',
        'Desenvolvimento de controles e acompanhamento de indicadores',
        'Implementação de melhorias contínuas'
      ]
    },
    {
      title: 'Processista de Engenharia',
      company: 'Aeris Energy',
      period: '2023-2025',
      status: 'previous',
      description: [
        'Desenvolvimento e implementação de melhorias produtivas',
        'Elaboração de documentação técnica (POP, fluxogramas, formulários)',
        'Auditorias internas e treinamentos de equipe'
      ]
    },
    {
      title: 'Operador de Produção',
      company: 'Aeris Energy',
      period: '2020-2023',
      status: 'previous',
      description: [
        'Execução de processos produtivos conforme padrões de qualidade',
        'Treinamento e gestão de equipes',
        'Controle de qualidade e melhoria contínua'
      ]
    },
    {
      title: 'Aprendiz de Produção',
      company: 'Aeris Energy',
      period: '2019-2020',
      status: 'previous',
      description: [
        'Suporte à fabricação com foco em normas de segurança',
        'Aplicação de ferramentas de qualidade',
        'Desenvolvimento de habilidades técnicas'
      ]
    }
  ];

  const education = [
    {
      title: 'Engenharia de Produção',
      institution: 'Estácio',
      period: '2024-2029',
      status: 'current'
    },
    {
      title: 'Processos Gerenciais',
      institution: 'Uniasselvi',
      period: '2025-2027',
      status: 'current'
    },
    {
      title: 'Ensino Médio Completo',
      institution: 'Concluído',
      period: '2015-2017',
      status: 'completed'
    }
  ];

  const certifications = [
    'Green Belt – Six Sigma',
    'Auditor Interno da Qualidade',
    'Pacote Office Avançado (79h)',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'var(--section-experience)' }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Formação & <span className="text-primary">Experiência</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Education & Certifications */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <GraduationCap size={28} className="text-primary" />
                  </div>
                  Formação Acadêmica
                </h3>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                      <div className="flex items-start gap-4">
                        <div className={`mt-2 w-3 h-3 rounded-full ${
                          edu.status === 'current' ? 'bg-primary animate-pulse' : 'bg-white/60'
                        }`}></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-white mb-2">{edu.title}</h4>
                          <p className="text-primary font-medium mb-1">{edu.institution}</p>
                          <span className="text-sm text-white/80">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Award size={28} className="text-primary" />
                  </div>
                  Certificações
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-white font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Professional Experience */}
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Building2 size={28} className="text-primary" />
                </div>
                Experiência Profissional
              </h3>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className={`mt-2 w-3 h-3 rounded-full ${
                        exp.status === 'current' ? 'bg-primary animate-pulse' : 'bg-white/60'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-xl text-white">{exp.title}</h4>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <span className="text-sm px-4 py-1 rounded-full bg-primary/20 text-white border border-primary/30">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-2 text-white/80">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-sm">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;