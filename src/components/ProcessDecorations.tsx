import { GitBranch, BarChart3, Target, Cog, TrendingUp, Settings } from 'lucide-react';

interface ProcessDecorationProps {
  type: 'ishikawa' | 'flowchart' | 'pdca' | 'kanban' | 'indicators';
  className?: string;
}

const ProcessDecorations = ({ type, className = '' }: ProcessDecorationProps) => {
  const decorations = {
    ishikawa: (
      <div className={`relative w-32 h-20 ${className}`}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-primary/30"></div>
          <GitBranch size={24} className="text-primary/60 absolute right-0" />
        </div>
        <div className="absolute top-2 left-8 w-8 h-px bg-primary/20 rotate-45"></div>
        <div className="absolute bottom-2 left-8 w-8 h-px bg-primary/20 -rotate-45"></div>
        <div className="absolute top-2 left-16 w-6 h-px bg-primary/20 rotate-45"></div>
        <div className="absolute bottom-2 left-16 w-6 h-px bg-primary/20 -rotate-45"></div>
      </div>
    ),
    flowchart: (
      <div className={`relative w-24 h-24 ${className}`}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-primary/20 rounded"></div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-4 bg-primary/30"></div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-primary/20 rounded-full"></div>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-4 bg-primary/30"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-primary/20 rounded"></div>
      </div>
    ),
    pdca: (
      <div className={`relative w-20 h-20 ${className}`}>
        <div className="absolute inset-0 border-2 border-primary/30 rounded-full"></div>
        <div className="absolute top-0 left-1/2 w-px h-1/2 bg-primary/30 origin-bottom rotate-45"></div>
        <div className="absolute top-1/2 right-0 w-1/2 h-px bg-primary/30 origin-left rotate-45"></div>
        <Target size={16} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary/60" />
      </div>
    ),
    kanban: (
      <div className={`grid grid-cols-3 gap-1 w-20 h-16 ${className}`}>
        <div className="bg-primary/20 rounded h-full"></div>
        <div className="bg-primary/30 rounded h-full"></div>
        <div className="bg-primary/40 rounded h-full"></div>
        <div className="bg-primary/10 rounded h-2"></div>
        <div className="bg-primary/20 rounded h-2"></div>
        <div className="bg-primary/30 rounded h-2"></div>
      </div>
    ),
    indicators: (
      <div className={`relative w-24 h-16 ${className}`}>
        <div className="absolute bottom-0 left-0 w-1 h-8 bg-primary/20 rounded-t"></div>
        <div className="absolute bottom-0 left-3 w-1 h-12 bg-primary/30 rounded-t"></div>
        <div className="absolute bottom-0 left-6 w-1 h-6 bg-primary/40 rounded-t"></div>
        <div className="absolute bottom-0 left-9 w-1 h-10 bg-primary/50 rounded-t"></div>
        <TrendingUp size={16} className="absolute top-0 right-0 text-primary/60" />
      </div>
    )
  };

  return decorations[type];
};

export default ProcessDecorations;