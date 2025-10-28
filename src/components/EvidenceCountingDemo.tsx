import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Calculator, FileText, Calendar } from 'lucide-react';
import { useState } from 'react';

interface EvidenceCountingDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const EvidenceCountingDemo = ({ isOpen, onClose }: EvidenceCountingDemoProps) => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('MAIO');
  const [isExecuting, setIsExecuting] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const sampleResults = [
    { codigo: 'DG-SGI-17-V00', quantidade: 1 },
    { codigo: 'DG-SGI-18-V00', quantidade: 1 },
    { codigo: 'DG-SGI-19-V00', quantidade: 1 },
    { codigo: 'FL-CONTR-17-V00', quantidade: 1 },
    { codigo: 'FL-CONTR-18-V00', quantidade: 1 },
    { codigo: 'FL-CONTR-19-V00', quantidade: 1 },
    { codigo: 'FL-DP-01-V03', quantidade: 1 },
    { codigo: 'FL-DP-03-V03', quantidade: 1 },
    { codigo: 'FL-DP-04-V04', quantidade: 1 },
    { codigo: 'FL-DP-05-V04', quantidade: 1 },
    { codigo: 'FL-DP-06-V03', quantidade: 1 },
    { codigo: 'FL-DP-08-V00', quantidade: 1 }
  ];

  const handleExecute = () => {
    setIsExecuting(true);
    setResults([]);
    
    // Simulate processing
    setTimeout(() => {
      setResults(sampleResults);
      setIsExecuting(false);
    }, 3000);
  };

  const totalEvidences = results.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <Calculator className="text-primary" size={24} />
              Demo - Contador de Evidências
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 space-y-6 overflow-auto max-h-[calc(90vh-120px)]">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              Contador de Evidências
            </h2>
            <p className="text-gray-600">
              Sistema para contagem automática de evidências por período
            </p>
          </div>

          {/* Selection Form */}
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-1" />
                  Ano:
                </label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mês:
                </label>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="JANEIRO">JANEIRO</SelectItem>
                    <SelectItem value="FEVEREIRO">FEVEREIRO</SelectItem>
                    <SelectItem value="MARÇO">MARÇO</SelectItem>
                    <SelectItem value="ABRIL">ABRIL</SelectItem>
                    <SelectItem value="MAIO">MAIO</SelectItem>
                    <SelectItem value="JUNHO">JUNHO</SelectItem>
                    <SelectItem value="JULHO">JULHO</SelectItem>
                    <SelectItem value="AGOSTO">AGOSTO</SelectItem>
                    <SelectItem value="SETEMBRO">SETEMBRO</SelectItem>
                    <SelectItem value="OUTUBRO">OUTUBRO</SelectItem>
                    <SelectItem value="NOVEMBRO">NOVEMBRO</SelectItem>
                    <SelectItem value="DEZEMBRO">DEZEMBRO</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleExecute}
              disabled={isExecuting}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isExecuting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Executar Contagem
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Calculator size={16} />
                  Executar Contagem
                </div>
              )}
            </Button>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="space-y-4">
              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Total de Evidências: {totalEvidences}
                </h3>
                <p className="text-blue-800">
                  Período: {selectedMonth} de {selectedYear}
                </p>
              </div>

              {/* Detailed Results */}
              <div className="bg-white rounded-lg border">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <h4 className="font-semibold">Detalhamento por Código</h4>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="p-3 text-left font-medium text-blue-800">#</th>
                        <th className="p-3 text-left font-medium text-blue-800">Código (Padronizado)</th>
                        <th className="p-3 text-center font-medium text-blue-800">Quantidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((item, index) => (
                        <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                          <td className="p-3 text-blue-600 font-medium">{index + 1}</td>
                          <td className="p-3 font-mono text-gray-800">{item.codigo}</td>
                          <td className="p-3 text-center font-medium">{item.quantidade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start gap-3">
              <FileText className="text-blue-600 mt-1" size={20} />
              <div className="text-sm text-blue-800">
                <div className="font-medium mb-2">Funcionalidades do Sistema:</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Contagem automática de evidências em pastas internas</li>
                  <li>Filtragem por período (mês/ano) específico</li>
                  <li>Identificação de códigos padronizados</li>
                  <li>Geração de relatório para indicadores mensais</li>
                  <li>Suporte a múltiplos formatos de arquivo (.pdf, .docx, .txt)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EvidenceCountingDemo;