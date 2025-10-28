import React from 'react';

interface PatternDecorationsProps {
  variant?: 'dots' | 'lines' | 'geometric' | 'mixed';
  className?: string;
}

const PatternDecorations: React.FC<PatternDecorationsProps> = ({ 
  variant = 'mixed', 
  className = '' 
}) => {
  const renderDots = () => (
    <>
      <div className="absolute top-10 right-10 w-2 h-2 bg-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-16 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-32 right-8 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-32 left-16 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </>
  );

  const renderLines = () => (
    <>
      <div className="absolute top-0 right-20 w-px h-32 bg-gradient-to-b from-accent/20 to-transparent"></div>
      <div className="absolute top-16 right-32 w-16 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-20 w-px h-24 bg-gradient-to-t from-secondary/20 to-transparent"></div>
      <div className="absolute bottom-16 left-32 w-20 h-px bg-gradient-to-l from-accent/20 to-transparent"></div>
    </>
  );

  const renderGeometric = () => (
    <>
      <div className="absolute top-16 right-16 w-4 h-4 border border-accent/20 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-8 w-3 h-3 bg-primary/10 transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-24 left-12 w-6 h-6 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-24 w-2 h-8 bg-accent/15 transform -rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
    </>
  );

  const renderMixed = () => (
    <>
      {renderDots()}
      {renderLines()}
      {renderGeometric()}
    </>
  );

  const renderPattern = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'lines':
        return renderLines();
      case 'geometric':
        return renderGeometric();
      case 'mixed':
      default:
        return renderMixed();
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {renderPattern()}
    </div>
  );
};

export default PatternDecorations;