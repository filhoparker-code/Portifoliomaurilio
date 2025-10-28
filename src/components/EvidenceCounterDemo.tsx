import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Search, FileText } from 'lucide-react';
import { useState } from 'react';

interface EvidenceCounterDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const EvidenceCounterDemo = ({ isOpen, onClose }: EvidenceCounterDemoProps) => {
  const [searchPrefix, setSearchPrefix] = useState('FP-SGI');
  const [isSearching, setIsSearching] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setSearchCompleted(false);
    
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      setSearchCompleted(true);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <FileText className="text-primary" size={24} />
              Demo - Contador de Evidências
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              Verificar Próximo Documento
            </h2>
            <p className="text-gray-600">
              Sistema para buscar o próximo número de procedimento disponível
            </p>
          </div>

          {/* Search Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prefixo do procedimento:
              </label>
              <Input
                value={searchPrefix}
                onChange={(e) => setSearchPrefix(e.target.value)}
                placeholder="Ex: FP-SGI"
                className="w-full"
              />
            </div>

            <Button 
              onClick={handleSearch}
              disabled={isSearching || !searchPrefix.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isSearching ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Buscando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search size={16} />
                  Buscar
                </div>
              )}
            </Button>
          </div>

          {/* Progress Bar */}
          {isSearching && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full transition-all duration-1000 animate-pulse" style={{width: '100%'}}></div>
            </div>
          )}

          {/* Results */}
          {searchCompleted && (
            <div className="space-y-4 border-t pt-6">
              <div className="text-center">
                <div className="text-sm text-green-600 font-medium mb-2">
                  Busca finalizada.
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Arquivo existente: </span>
                  <span className="text-blue-600">FP-SGI-147-V00 - MATRIZ DE PRIORIZAÇÃO</span>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="text-lg font-bold text-blue-600">
                    Próximo número disponível: 148
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Sugestão: FP-SGI-148-V00
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchCompleted(false);
                    setSearchPrefix('');
                  }}
                  className="mr-2"
                >
                  Nova Busca
                </Button>
                <Button variant="default" className="bg-green-600 hover:bg-green-700">
                  Usar Número
                </Button>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start gap-3">
              <FileText className="text-blue-600 mt-1" size={20} />
              <div className="text-sm text-blue-800">
                <div className="font-medium mb-1">Como funciona:</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Insira o prefixo do procedimento (ex: FP-SGI)</li>
                  <li>O sistema busca o último número utilizado</li>
                  <li>Retorna o próximo número sequencial disponível</li>
                  <li>Garante padronização e evita duplicatas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EvidenceCounterDemo;