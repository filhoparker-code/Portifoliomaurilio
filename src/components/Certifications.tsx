import {
  Cog,
  Globe,
  ClipboardCheck,
  Home,
  Wrench,
  Award,
  FileText,
} from 'lucide-react';

const Certifications = () => {
  // Use the real certificate image files that are present in public/
  const items = [
    { title: 'Ferramentas da Qualidade', img: '/Certificado ferramentas da qualidade.jpg', desc: 'Ferramentas e metodologias de melhoria contínua.' },
    { title: 'Inglês', img: '/Certificado de praticas em ingles.jpg', desc: 'Comunicação em inglês para ambientes profissionais.' },
    { title: 'Auditor de ISO 9001:2015', img: ['/Auditor interno de ISO 9001 2015.png','/Certificado de interpretação de requisitos da norma ISO 9001 2015.jpg'], desc: 'Auditor interno com foco em sistemas de qualidade.' },
    { title: 'Edificações', img: '/Certificado de edificações.jpg', desc: 'Formação técnica em edificações e obras.' },
    { title: 'Metrologia', img: '/Certificado de metrologia.jpg', desc: 'Práticas e instrumentos de medição industrial.' },
    { title: 'Green Belt', img: '/certificado de greebelt.jpg', desc: 'Metodologia Lean Six Sigma (Green Belt).' },
    { title: 'Office Avançado', img: '/Certificado pacote office.jpg', desc: 'Automação e análises avançadas no Microsoft Office.' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'var(--section-certifications)' }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-foreground">
              Minhas <span className="text-primary">Certificações</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Abaixo estão os cursos que concluí e possuo certificados. Clique para solicitar o comprovante.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.title} className="card-elevated flex flex-col items-start hover:scale-105 transition-transform duration-300">
                {/* Icon instead of image preview */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  {/* choose an icon based on title */}
                  {item.title === 'Ferramentas da Qualidade' && <Cog size={28} className="text-primary" />}
                  {item.title === 'Inglês' && <Globe size={28} className="text-primary" />}
                  {item.title === 'Auditor de ISO 9001:2015' && <ClipboardCheck size={28} className="text-primary" />}
                  {item.title === 'Edificações' && <Home size={28} className="text-primary" />}
                  {item.title === 'Metrologia' && <Wrench size={28} className="text-primary" />}
                  {item.title === 'Green Belt' && <Award size={28} className="text-primary" />}
                  {item.title === 'Office Avançado' && <FileText size={28} className="text-primary" />}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>

                <div className="mt-auto w-full">
                  {Array.isArray(item.img) ? (
                    <div className="flex gap-2">
                      {item.img.map((src: string, i: number) => (
                        <a key={i} href={encodeURI(src)} target="_blank" rel="noopener noreferrer" className="inline-block btn-primary w-full text-center">
                          Visualizar certificado {i + 1}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a href={encodeURI(item.img as string)} target="_blank" rel="noopener noreferrer" className="inline-block btn-primary w-full text-center">
                      Visualizar certificado
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
